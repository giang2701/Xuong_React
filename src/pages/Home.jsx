import React from "react";
import { Link } from "react-router-dom";

function Home({ data }) {
    return (
        <>
            <div class="hero">
                <div class="header container-fliud bg-black">
                    <div class="info">
                        <p class="sub-title">Phong cách mỗi ngày</p>
                        <h1 class="title">
                            Nâng tầm diện mạo, khẳng định cá tính riêng.
                        </h1>
                        <p class="desc">
                            Thời trang đa dạng, chất lượng cao, giá cả hợp lý,
                            phục vụ tận tâm.
                        </p>
                        <button class="btn btn-primary btn-hero">
                            <a hrel="">Visit</a>
                        </button>
                    </div>
                    <div class="Round">
                        <img src="../../public/image/banner.png" alt="" />
                    </div>
                </div>
            </div>
            {/* <h1>Danh sach san pham</h1>
            <div className="row">
                {data.map((item) => (
                    <div
                        className="col-12 col-sm-6 col-md-4 col-lg-3"
                        key={item.id}
                    >
                        <ProductItem data={item} />
                    </div>
                ))}
            </div> */}
            <div className="container-sm ListPro">
                <h1 className="my-4 text-center">Danh Sách Sản Phẩm</h1>
                <div class="row mt-5">
                    {/* @for(item of listProject; track item.id){ */}
                    {data.map((item) => (
                        <div class="col-md-3 mb-5 borderBox p-4 " key={item.id}>
                            <img src={item.thumbnail} alt="" width="250" />
                            <div class="iconHeart">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-heart"
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
                                class="btn btn-dark btnCart w-25"
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
                                    class="bi bi-bag"
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
