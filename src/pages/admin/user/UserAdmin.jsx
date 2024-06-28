import React from "react";
import { Link } from "react-router-dom";

const UserAdmin = ({ data, removeUser }) => {
    const role = JSON.parse(localStorage.getItem("user"))?.user?.role;
    // console.log(role);
    return (
        <div className="container containerUser">
            <table className="w-100 table text-center mx-auto ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Role(Chức vụ)</th>
                        {role == 1 || role == "1" ? (
                            <>
                                <th>Action</th>
                            </>
                        ) : (
                            <></>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.role}</td>
                            {role == 1 || role == "1" ? (
                                <>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <button
                                                className="btn btn-danger me-3"
                                                onClick={() =>
                                                    removeUser(item.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                            {/* <Link
                                                to={`/admin/user/${item.id}`}
                                                className="btn btn-warning"
                                            >
                                                Edit
                                            </Link> */}
                                        </div>
                                    </td>
                                </>
                            ) : (
                                <></>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="note">
                <ul>
                    <li>1-Giám Đốc</li>
                    <li>2-Quản lý, Nhà Phát triển, Nhân Viên</li>
                    <li>3-Khách Hàng</li>
                </ul>
            </div>
        </div>
    );
};

export default UserAdmin;
