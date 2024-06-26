import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";

const ProductDetail = () => {
    const { id } = useParams();
    const [p, setP] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`/products/${id}`);
                setP(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <div className="container" style={{ height: "1000px" }}>
            <p className="my-3" id="nav">
                Trang chủ - Chi tiết sản phẩm
            </p>
            <div className="row">
                <div className="col-md-6 d-flex">
                    <img
                        src={p.thumbnail}
                        alt=""
                        width="500px"
                        className="me-3"
                    />
                    <div className="box-detail d-flex flex-column mt-5">
                        <img src={p.thumbnail} alt="" width="100px" />
                        <img
                            src={p.thumbnail}
                            alt=""
                            width="100px"
                            className="my-3"
                        />
                        <img
                            src={p.thumbnail}
                            alt=""
                            width="100px"
                            className="mb-3"
                        />
                        <img src={p.thumbnail} alt="" width="100px" />
                    </div>
                </div>

                <div className="col-md-6 profile">
                    <h1 className="h1">{p.title}</h1>
                    <div className="star my-4">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <span style={{ marginLeft: "5px" }} className="h6">
                            (0 Đánh Giá)
                        </span>
                    </div>

                    <p className="h3 text-danger my-4" id="price">
                        {p.price}.000 đ
                    </p>
                    <p className="h4 my-4" id="color">
                        Màu sắc: {p.color}
                    </p>

                    <div className="box-Round my-4">
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                    </div>
                    {/* <!-- Nút bấm tăng giảm số lượng --> */}
                    <span style={{ fontWeight: 700 }}>Số Lượng</span>
                    <div className="box_quantity">
                        <div className="product-quantity">
                            <button className="decrease-btn">-</button>
                            <input
                                type="text"
                                className="quantity-input"
                                defaultValue="1"
                            />
                            <button className="increase-btn">+</button>
                        </div>
                    </div>
                    {/* <!-- Mua hàng --> */}
                    <div className="boxShopping">
                        <a href="" className="nav-link">
                            <div className="Cart bg-body text-black">
                                <p>Thêm Giỏ Hàng</p>
                            </div>
                        </a>
                        <a href="" className="nav-link">
                            <div className="Buy bg-dark text-white">
                                <p>Mua Hàng</p>
                            </div>
                        </a>
                        <div className="heart-icon">
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
                    </div>
                    {/* <!-- description --> */}
                    <p className="h4 mt-3 description">Mô tả</p>
                    <p style={{ textIndent: "30px" }} id="detail-description">
                        {p.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
