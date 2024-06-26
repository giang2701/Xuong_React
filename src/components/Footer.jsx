function Footer() {
    return (
        <>
            <footer className="container-fluid boxF pt-4">
                <section className="box_footer mx-5">
                    <div className="Sub_boxF1">
                        {/* <img
                            src="image/Logo.png"
                            alt=""
                            width="70px"
                            style={{ marginTop: "10px", marginBottom: "5px" }}
                        /> */}
                        <p>
                            Công ty Cổ phần Dự Kim với số đăng ký kinh doanh:
                            0105777650
                        </p>
                        <p>
                            Địa chỉ đăng ký: Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ
                            Liêm, TP.Hà Nội, Việt Nam
                        </p>
                        <p>Số điện thoại: 0243 205 2222/ 090 589 8683</p>
                        <p>Email: giangnvph31897fpt.edu.vn</p>
                        <div className="SDT bg-dark text-white">
                            <p>Hotline: 012 5137 627</p>
                        </div>
                    </div>

                    <div className="Sub_boxF2">
                        <h3 className="h2">Giới thiệu</h3>
                        <p>Về IVY moda</p>
                        <p>Tuyển dụng</p>
                        <p>Hệ thống cửa hàng</p>
                    </div>

                    <div className="Sub_boxF3">
                        <h3>Dịch vụ khách hàng</h3>
                        <p>Chính sách điều khoản</p>
                        <p>Hướng dẫn mua hàng</p>
                        <p>Chính sách thanh toán</p>
                        <p>Chính sách đổi trả</p>
                        <p>Chính sách bảo hành</p>
                        <p>Chính sách giao nhận vận chuyển</p>
                        <p>Chính sách thẻ thành viên</p>
                        <p>Hệ thống cửa hàng</p>
                        <p>Q&A</p>
                    </div>

                    <div className="Sub_boxF4">
                        <h3>Liên hệ</h3>
                        <p>Hotline</p>
                        <p>Email</p>
                        <p>Live Chat</p>
                        <p>Messenger</p>
                        <p>Liên hệ</p>
                    </div>

                    <div className="Sub_boxF5">
                        <div className="informationForm p-4">
                            <h5>
                                Nhận thông tin các
                                <br />
                                chương trình Boogeymen Shop
                            </h5>
                            <form action="" className="SearchFooter">
                                <input
                                    type="text"
                                    placeholder="Nhập địa chỉ email"
                                    className="form-control"
                                />
                                <button className="btn-formF form-control w-25 btn btn-secondary">
                                    Đăng kí
                                </button>
                            </form>
                        </div>
                        <div className="applink">
                            <h4 className="my-3">Download App</h4>
                            <img
                                src="image/applink.png"
                                alt=""
                                width="150px"
                                style={{
                                    borderRadius: "10px",
                                    marginBottom: "5px",
                                }}
                            />
                            <img
                                src="image/applink2.png"
                                alt=""
                                width="200px"
                                style={{ borderRadius: "10px" }}
                            />
                        </div>
                    </div>
                </section>
                <hr />
                <section className="box_endF text-center py-4">
                    <p>Nguyễn văn Giang-PH31897</p>
                </section>
            </footer>
        </>
    );
}

export default Footer;
