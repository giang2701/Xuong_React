import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import instance from "../axios";
const EditAvata = ({ EditAvata, user }) => {
    const img = JSON.parse(localStorage.getItem("user"))?.user?.img;
    // const address = JSON.parse(localStorage.getItem("user"))?.user?.address;
    // console.log(img);
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`/users/${id}`);
                reset(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <div className="container-sm">
            <div className="box-infoUser w-50 mx-auto">
                {img ? (
                    <>
                        {/* {user.map((item) => (
                            <img src={item.name} alt="" className="AvataEdit" />
                        ))} */}
                        <img src={img} alt="" className="AvataEdit" />
                    </>
                ) : (
                    <>
                        <img
                            src="../../public/image/avatar.jpg"
                            alt=""
                            className="AvataEdit"
                        />
                    </>
                )}
                <form
                    onSubmit={handleSubmit((data) =>
                        EditAvata({ ...data, id })
                    )}
                    className=" mt-3"
                >
                    <div className="mb-3 d-flex">
                        <label for="" className="form-label me-4 w-25">
                            User Name:
                        </label>
                        <input
                            type="text"
                            name="username"
                            className="form-control w-75"
                            {...register("username")}
                        />
                    </div>
                    <div className="mb-3 d-flex">
                        <label for="" className="form-label me-4 w-25">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control w-75"
                            {...register("email")}
                        />
                    </div>
                    <div className="mb-3 d-flex">
                        <label for="" className="form-label me-4 w-25">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control w-75"
                            {...register("password")}
                        />
                    </div>
                    <div className="mb-3 d-flex">
                        <label for="" className="form-label me-4 w-25">
                            Avata:
                        </label>
                        <input
                            type="text"
                            name="img"
                            className="form-control w-75"
                            {...register("img")}
                        />
                    </div>
                    <div className="mb-3 d-flex">
                        <label for="" className="form-label me-4 w-25">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            className="form-control w-75"
                            {...register("address")}
                        />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">
                            Cập Nhật
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditAvata;
