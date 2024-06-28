import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import instance from "../axios";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema, registerSchema } from "../schemaValid/authSchema";

const AuthForm = ({ isRegister }) => {
    const nav = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(isRegister ? registerSchema : loginSchema),
        defaultValues: {
            role: isRegister ? "3" : undefined, // Đặt giá trị mặc định cho role nếu là đăng ký
        },
    });

    const onSubmit = (data) => {
        (async () => {
            try {
                if (isRegister) {
                    await instance.post(`/register`, {
                        ...data,
                        role: data.role || "3",
                    }); // Đảm bảo role có giá trị
                    if (confirm("Successfully, redirect login page?")) {
                        nav("/login");
                    }
                } else {
                    const result = await instance.post(`/login`, data);
                    localStorage.setItem("user", JSON.stringify(result.data));
                    if (confirm("Successfully, redirect home page?")) {
                        nav("/");
                    }
                }
            } catch (error) {
                alert(error?.response?.data);
            }
        })();
    };

    return (
        <div className="container-sm my-5 contaiForm">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" mx-auto mt-5 formAcc"
            >
                <h1 className="h1 text-center my-5">
                    {isRegister ? "Register" : "Login"}
                </h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        {...register("email", { required: true })}
                    />
                    {errors.email?.message && (
                        <p className="text-danger">{errors.email?.message}</p>
                    )}
                </div>
                {isRegister && (
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">
                            UserName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            {...register("username", { required: true })}
                        />
                        {errors.username?.message && (
                            <p className="text-danger">
                                {errors.username?.message}
                            </p>
                        )}
                    </div>
                )}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password?.message && (
                        <p className="text-danger">
                            {errors.password?.message}
                        </p>
                    )}
                </div>
                {isRegister && (
                    <>
                        <div className="mb-3">
                            <label htmlFor="confirmPass" className="form-label">
                                Confirm password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPass"
                                {...register("confirmPass", { required: true })}
                            />
                            {errors.confirmPass?.message && (
                                <p className="text-danger">
                                    {errors.confirmPass?.message}
                                </p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label rolelabel">
                                Role
                            </label>
                            <input
                                type="text"
                                className="form-control role"
                                {...register("role")}
                                defaultValue="3"
                            />
                        </div>
                    </>
                )}

                <div className="mb-3 ">
                    <button className="button2" type="submit">
                        {isRegister ? "Register" : "Login"}
                    </button>
                    <p>
                        {isRegister && (
                            <Link to="/login" className="text-dark fw-normal">
                                Da co tai khoan, chuyen sang dang nhap?
                            </Link>
                        )}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;
