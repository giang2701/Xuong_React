import React from "react";
import { Link } from "react-router-dom";

const Not404 = () => {
    return (
        <div>
            <main className="container-sm my-5 boxNotSum">
                <div className=" mx-auto text-center NotAdmin py-5">
                    <p className="text-base font-semibold text-indigo-600 fw-bold text-danger">
                        404
                    </p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl fw-bold text-danger">
                        Evolving Functionality
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        <i class="fa-solid fa-triangle-exclamation text-warning me-3"></i>
                        Chức Năng Đang phát triển!!!
                    </p>

                    <Link to="/admin">
                        <i class="fa-solid fa-house"></i>Back to Home
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Not404;
