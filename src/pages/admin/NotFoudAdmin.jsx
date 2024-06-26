import React from "react";
import { Link } from "react-router-dom";

const NotFoudAdmin = () => {
    return (
        <div>
            <main className="container-sm my-5 boxNotSum">
                <div className="w-50 mx-auto text-center NotAdmin py-5">
                    <p className="text-base font-semibold text-indigo-600 fw-bold text-danger">
                        404
                    </p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl fw-bold text-danger">
                        Page not found
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Xin lỗi ,bạn không có quyền truy cập vào trang dành cho
                        admin
                    </p>

                    <Link to="/">
                        <i class="fa-solid fa-house"></i>Back to Home
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default NotFoudAdmin;
