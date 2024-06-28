import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import instance from "../../../axios";

const EditUser = ({ onSubmit }) => {
    const { id } = useParams();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    if (id) {
        useEffect(() => {
            (async () => {
                try {
                    const { data } = await instance.get(`/users/${id}`);
                    reset(data);
                } catch (error) {
                    console.log(error);
                }
            })();
        }, []);
    }
    return (
        <>
            <form
                onSubmit={handleSubmit((data) => onSubmit({ ...data, id }))}
                className="container-sm my-5 w-50 formProduct"
            >
                <h1 className="h1 text-center">User Edit</h1>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("username", { required: true })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="thumbnail" className="form-label">
                        email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="thumbnail"
                        {...register("email")}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        role
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("role", {
                            required: true,
                        })}
                    />
                </div>

                <div className="my-5">
                    <button className="btn btn-primary w-100" type="submit">
                        {id ? "Product Edit" : "Product Add"}
                    </button>
                </div>
                <div className="note">
                    <ul>
                        <li>1-Giám Đốc</li>
                        <li>2-Quản lý, Nhà Phát triển, Nhân Viên</li>
                        <li>3-Khách Hàng</li>
                    </ul>
                </div>
            </form>
        </>
    );
};

export default EditUser;
