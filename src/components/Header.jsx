import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
    const nav = useNavigate();
    const username = JSON.parse(localStorage.getItem("user"))?.user?.username;
    const email = JSON.parse(localStorage.getItem("user"))?.user?.email;
    const role = JSON.parse(localStorage.getItem("user"))?.user?.role;
    const img = JSON.parse(localStorage.getItem("user"))?.user?.img;
    const id = JSON.parse(localStorage.getItem("user"))?.user?.id;
    // console.log(id);
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        nav("/login");
    };
    return (
        <>
            <div className="container-sum">
                <div className="container-fliud bg-black d-flex align-items-center main">
                    <Link to="/">
                        <img
                            src="../../public/image/Logo.png"
                            alt=""
                            width={130}
                            style={{
                                margin: "10px 20px 10px 50px",
                            }}
                        />
                    </Link>
                    {/* Nav */}
                    <ul className="nav">
                        <li>
                            <Link
                                to="/home"
                                className="nav-link text-white"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "2.4rem",
                                    fontWeight: 400,
                                    textAlign: "left",
                                    color: "rgba(79, 83, 97, 1)",
                                }}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/"
                                className="nav-link text-white"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "2.4rem",
                                    fontWeight: 400,
                                    textAlign: "left",
                                    color: "rgba(79, 83, 97, 1)",
                                }}
                            >
                                Nam
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="nav-link text-white"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "2.4rem",
                                    fontWeight: 400,
                                    textAlign: "left",
                                    color: "rgba(79, 83, 97, 1)",
                                }}
                            >
                                Nữ
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="nav-link text-white"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "2.4rem",
                                    fontWeight: 400,
                                    textAlign: "left",
                                    color: "rgba(79, 83, 97, 1)",
                                }}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                    {/* Acc */}
                    <div className="Box-AccStream">
                        {username ? (
                            <>
                                {/* Account avatar and modal */}
                                <div className="Avata" onClick={openModal}>
                                    <i className="fa-regular fa-circle-user text-white"></i>
                                </div>
                                {modalOpen && (
                                    <div className="box-infoAcc" id="myModal">
                                        <div className="modal_content">
                                            <span
                                                className="close"
                                                onClick={closeModal}
                                            >
                                                &times;
                                            </span>
                                            <span>{email}</span>
                                            <br />
                                            {/* avata */}
                                            {img ? (
                                                <>
                                                    {" "}
                                                    <img
                                                        src={img}
                                                        alt=""
                                                        className="AvataUser"
                                                    />
                                                    <Link
                                                        to={`/edit-avata/${id}`}
                                                    >
                                                        <i class="fa-solid fa-pen"></i>
                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <img
                                                        src="../../public/image/avatar.jpg"
                                                        alt=""
                                                        className="AvataUser"
                                                    />
                                                    <Link
                                                        to={`/edit-avata/${id}`}
                                                    >
                                                        <i class="fa-solid fa-pen"></i>
                                                    </Link>
                                                </>
                                            )}

                                            {/* <i className="fa-regular fa-circle-user "></i> */}
                                            <p>{username}</p>
                                            {role ? (
                                                <>
                                                    <div className="my-3">
                                                        <Link
                                                            to="/admin"
                                                            className="nav-link mb-3"
                                                        >
                                                            <span className="admin">
                                                                Admin
                                                            </span>
                                                        </Link>
                                                        <button
                                                            className="btn btn-danger me-3"
                                                            onClick={
                                                                handleLogout
                                                            }
                                                        >
                                                            <span>
                                                                Đăng Xuất
                                                            </span>
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        className="btn btn-danger my-3"
                                                        onClick={handleLogout}
                                                    >
                                                        <span>Đăng Xuất </span>
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                <div className="box-Action">
                                    <button
                                        className="btn btn-success ms-5 me-2"
                                        style={{
                                            backgroundColor: "#ff3cac",
                                            backgroundImage:
                                                "linear-gradient(225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%)",
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Link
                                            to="/register"
                                            style={{ color: "white" }}
                                            className="nav-link"
                                        >
                                            Register
                                        </Link>
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        style={{
                                            minWidth: "100px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Link
                                            to="/login"
                                            style={{ color: "white" }}
                                            className="nav-link"
                                        >
                                            login
                                        </Link>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
