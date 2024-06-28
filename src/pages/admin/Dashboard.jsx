import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ data, remove }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(data);
    return (
        <div className="container-sm">
            {/* <h1 className="h1 text-center my-5">Hello, admin</h1> */}
            <div className="add">
                <Link to="/admin/product-form">
                    <i class="fa-solid fa-plus"></i>
                </Link>
            </div>
            <div className="search-bar w-50 mx-auto mt-5 mb-2">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="form-control"
                />
            </div>

            <table className="table table-bordered table-striped text-center mx-auto table-admin">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Thumbnail</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.price}</td>
                            <td>
                                <div className="td-Desc">
                                    {p.description || "Dang cap nhat"}
                                </div>
                            </td>
                            <td>
                                {p.thumbnail ? (
                                    <img
                                        src={p.thumbnail}
                                        alt="Dang cap nhat"
                                        className="w-25"
                                    />
                                ) : (
                                    "Dang cap nhat"
                                )}
                            </td>
                            <td>
                                <div className="d-flex mx-3">
                                    <button
                                        className="btn btn-danger me-2"
                                        onClick={() => remove(p.id)}
                                    >
                                        Delete
                                    </button>
                                    <Link
                                        to={`/admin/product-form/${p.id}`}
                                        className="btn btn-warning btnEdit"
                                    >
                                        Edit
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
