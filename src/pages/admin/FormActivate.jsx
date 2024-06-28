import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const FormActivate = () => {
    const user = JSON.parse(localStorage.getItem("user"))?.user?.role;
    // const role =
    return (
        <div>
            {user == 1 || user == "1" || user == 2 || user == "2" ? (
                <Outlet />
            ) : (
                <Navigate to="/notAdmin" />
            )}
        </div>
    );
};

export default FormActivate;
