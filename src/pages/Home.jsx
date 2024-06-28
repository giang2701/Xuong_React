import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home({ data }) {
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
    return (
        <>
            <div className="hero">
                <div className="header container-fliud bg-black">
                    <div className="info">
                        <p className="sub-title">Phong cách mỗi ngày</p>
                        <h1 className="title">
                            Nâng tầm diện mạo, khẳng định cá tính riêng.
                        </h1>
                        <p className="desc">
                            Thời trang đa dạng, chất lượng cao, giá cả hợp lý,
                            phục vụ tận tâm.
                        </p>
                        <button className="btn btn-primary btn-hero">
                            <a hrel="">Visit</a>
                        </button>
                    </div>
                    <div className="Round">
                        <img src="../../public/image/banner.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container-sm ListPro">
                <div className="filterPro">
                    <div className="search-bar w-50 mx-auto">
                        <input
                            type="text"
                            placeholder="Tìm Kiếm Sản Phẩm....."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="form-control"
                        />
                    </div>
                    <div className="price-filter w-50 mx-auto ">
                        <select
                            value={selectedPriceRange}
                            onChange={handlePriceRangeChange}
                            className="form-select"
                        >
                            <option value="">Tất Cả</option>
                            <option value="0-200">0-200.000$</option>
                            <option value="200-500">200.000-500.000$</option>
                            <option value="500-1000">500.000-1.000.000$</option>
                        </select>
                    </div>
                    <i class="fa-solid fa-filter"></i>
                </div>
                <h1 className="my-4 text-center">Danh Sách Sản Phẩm</h1>
                <div className="row mt-5">
                    {/* @for(item of listProject; track item.id){ */}
                    {filteredData.map((item) => (
                        <div
                            className="col-md-3 mb-5 borderBox p-4 "
                            key={item.id}
                        >
                            <img src={item.thumbnail} alt="" width="250" />
                            <div className="iconHeart">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                            </div>
                            <p>
                                <Link
                                    to={`/product-detail/${item.id}`}
                                    className="nav-link"
                                >
                                    {item.title}
                                </Link>
                            </p>
                            <p>{item.price}.000 Đ</p>
                            <button
                                className="btn btn-dark btnCart w-25"
                                style={{
                                    borderEndEndRadius: "20px",
                                    borderTopLeftRadius: "20px",
                                    position: "absolute",
                                    top: "498px",
                                    left: "180px",
                                    height: "50px",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-bag"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>
                            </button>
                        </div>
                    ))}
                    {/* } */}
                </div>
            </div>
        </>
    );
}

export default Home;
