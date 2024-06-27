import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container mt-3 AboutPoly">
            <div className="back">
                <Link to="/" className="nav-link d-inline">
                    Trang chủ
                </Link>
                {/* Img */}
                &nbsp;&nbsp; - &nbsp;&nbsp;<span>Giới thiệu về POLY Shop</span>
            </div>
            <figure>
                <img
                    src="../../public/image/d9b35efcb2e9b92794dcd64cafb07f66.jpg"
                    alt=""
                    className="mw-100"
                />
                <figcaption className="text-primary text-center my-2">
                    CEO Nguyễn-Lê Vũ Linh
                </figcaption>
            </figure>
            {/* content */}
            <h1 className="h1 mb-3">POLY Shop - thời trang độc đáo.</h1>
            <h2 className="mb-3">Tầm nhìn và Sứ mệnh</h2>
            <p className="mb-3">
                <b>Tầm nhìn:</b> POLY Shop mong muốn trở thành thương hiệu thời
                trang hàng đầu, không chỉ tại Việt Nam mà còn vươn ra thế giới.
                Chúng tôi cam kết mang đến những sản phẩm thời trang đẳng cấp,
                bắt kịp xu hướng toàn cầu, và đồng thời tôn vinh nét đẹp riêng
                của mỗi khách hàng.
            </p>
            <p className="mb-3">
                <b>Sứ mệnh:</b> POLY Shop hướng đến việc cung cấp cho khách hàng
                những trải nghiệm mua sắm tuyệt vời nhất. Chúng tôi không chỉ
                bán quần áo mà còn mang đến phong cách sống, sự tự tin và niềm
                vui qua từng sản phẩm
            </p>
            <p className="mb-3">
                <b>Sản phẩm và Dịch vụ</b> POLY Shop cung cấp đa dạng các loại
                sản phẩm, từ trang phục công sở, dạo phố, dự tiệc cho đến những
                bộ sưu tập thể thao năng động. Mỗi sản phẩm đều được chúng tôi
                chọn lọc kỹ lưỡng, từ chất liệu vải cao cấp, thiết kế hiện đại
                đến màu sắc tinh tế, nhằm đảm bảo sự hài lòng tuyệt đối cho
                khách hàng.
            </p>
            <div className="slogan">
                <p>Your Fashion, Our Passion.</p>
            </div>
            <div className="fashion">
                {/* <div className="item_fashion">
					img
				</div> */}
                <img src="../../public/image/fashion-2.avif" alt="" />
                <img src="../../public/image/fashion-3.avif" alt="" />
                <img src="../../public/image/fashion-4.avif" alt="" />
                <img src="../../public/image/fashion-5.avif" alt="" />
                <img src="../../public/image/fashion-6.avif" alt="" />
                <img src="../../public/image/fashion-7.avif" alt="" />
            </div>
        </div>
    );
};

export default About;
