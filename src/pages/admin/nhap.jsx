import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ data, remove }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPriceRange, setSelectedPriceRange] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePriceRangeChange = (e) => {
        setSelectedPriceRange(e.target.value);
    };

    const getPriceRange = (range) => {
        switch (range) {
            case "0-200":
                return { min: 0, max: 200 };
            case "200-500":
                return { min: 200, max: 500 };
            case "500-1000":
                return { min: 500, max: 1000 };
            default:
                return { min: 0, max: Infinity };
        }
    };

    const { min, max } = getPriceRange(selectedPriceRange);

    const filteredData = data.filter((p) => {
        const matchesSearchTerm = p.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesPriceRange = p.price >= min && p.price <= max;
        return matchesSearchTerm && matchesPriceRange;
    });

    console.log(data);

    return (
        <div className="container-sm">
            <h1 className="h1 text-center my-5">Hello, admin</h1>
            <div className="add">
                <Link to="/admin/product-form">
                    <i className="fa-solid fa-plus"></i>
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
            <div className="price-filter w-50 mx-auto mt-3 mb-5">
                <select
                    value={selectedPriceRange}
                    onChange={handlePriceRangeChange}
                    className="form-select"
                >
                    <option value="">All Prices</option>
                    <option value="0-200">0-200</option>
                    <option value="200-500">200-500</option>
                    <option value="500-1000">500-1000</option>
                </select>
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
