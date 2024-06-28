import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
    const img = JSON.parse(localStorage.getItem("user"))?.user.img;
    const username = JSON.parse(localStorage.getItem("user"))?.user.username;
    // console.log(user);
    return (
        <div className="container-fliud sum_admin">
            <header className="container-fliud d-flex justify-content-between">
                <div className="row">
                    <div className="col-3">
                        <img src="../../public/image/Logo.png" alt="" />
                    </div>
                    <div className="col-9 d-flex justify-content-around align-content-center my-auto">
                        <i className="fa-solid fa-bars"></i>
                        <nav className="nav navbar">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link
                                        to="/admin/dashboard"
                                        className="nav-link"
                                    >
                                        DashBoard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/user" className="nav-link">
                                        User
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link">Settings</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <i className="fa-regular fa-bell"></i>
                        <i className="fa-solid fa-gear"></i>
                    </div>
                    <div className="col-6">
                        <img src={img} alt="" />
                        <div className="username">
                            <p>{username}</p>
                        </div>

                        <Link to="/" className="btn btn-danger">
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="row">
                <div className="col-2">
                    <nav className="nav navAdmin">
                        <ul className="nav flex-column">
                            <li className=" navbar">
                                <Link to="/admin" className="nav-link">
                                    <i class="fa-solid fa-house me-3"></i>Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/admin/dashboard"
                                    className="nav-link"
                                >
                                    <i class="fa-solid fa-gauge me-3"></i>
                                    DashBoard
                                    <div className="new">
                                        <p>new</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/user" className="nav-link">
                                    <i class="fa-solid fa-user me-3"></i>User
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/not404" className="nav-link">
                                    <i class="fa-solid fa-book me-3"></i>
                                    Order
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/not404" className="nav-link">
                                    <i class="fa-brands fa-facebook-messenger me-3"></i>
                                    Chats
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/not404" className="nav-link">
                                    <i class="fa-solid fa-chart-simple me-3"></i>
                                    Statistical
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-10">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default LayoutAdmin;
