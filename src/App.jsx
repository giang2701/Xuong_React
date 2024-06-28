import React, { useEffect, useState } from "react";
import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import instance, { getProducts } from "./axios";
import AuthForm from "./components/AuthForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import ProductDetail from "./pages/ProductDetail";
import FormActivate from "./pages/admin/FormActivate";
import NotFoudAdmin from "./pages/admin/NotFoudAdmin";
import EditAvata from "./pages/EditAvata";
import LayoutClient from "./layouts/LayoutClient";
import LayoutAdmin from "./layouts/LayoutAdmin";
import HomeAdmin from "./pages/admin/HomeAdmin";
import Not404 from "./pages/admin/Not404";

function App() {
    const [products, setProducts] = useState([]);
    const [user, setuser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get("/products");
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleSubmitForm = (data) => {
        (async () => {
            try {
                if (data.id) {
                    // logic cho edit product
                    await instance.patch(`/products/${data.id}`, data);
                    const newData = await getProducts();
                    setProducts(newData);
                } else {
                    // logic cho add product
                    const res = await instance.post("/products", data);
                    setProducts([...products, res.data]);
                }
                if (confirm("Successfully, redirect to admin page!")) {
                    navigate("/admin");
                }
            } catch (error) {
                console.log(error);
            }
        })();
    };

    const handleRemove = (id) => {
        console.log(id);
        (async () => {
            try {
                if (confirm("Are yout sure?")) {
                    await instance.delete(`/products/${id}`);
                    const newData = products.filter(
                        (item) => item.id !== id && item
                    );
                    setProducts(newData);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    };
    // Cập nhật info user
    const HandleAvata = async (data) => {
        // console.log(data);
        const res = await instance.put(`/users/${data.id}`, data);
        const NewInfo = await instance.get("/users");
        console.log(NewInfo.data); // Kiểm tra dữ liệu mới
        setuser(NewInfo);
        alert("Cập Thật Thành Công!!");
        window.location.reload();
    };
    return (
        <>
            {/* <Header /> */}
            {/* <main> */}
            <Routes>
                {/* path for client */}
                <Route path="/" element={<LayoutClient />}>
                    <Route index element={<Home data={products} />} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route
                        path="/product-detail/:id"
                        element={<ProductDetail />}
                    />
                    {/* path empty */}
                    <Route
                        path="/edit-avata/:id"
                        element={<EditAvata EditAvata={HandleAvata} />}
                    />
                    <Route path="/register" element={<AuthForm isRegister />} />
                    <Route path="/login" element={<AuthForm />} />
                    <Route path="/about" element={<About />} />
                </Route>

                {/* path for admin */}
                <Route path="/admin" element={<FormActivate />}>
                    <Route path="/admin" element={<LayoutAdmin />}>
                        <Route index element={<HomeAdmin />} />
                        <Route
                            path="/admin/dashboard"
                            element={
                                <Dashboard
                                    data={products}
                                    remove={handleRemove}
                                />
                            }
                        />
                        <Route
                            path="/admin/product-form"
                            element={
                                <ProductForm onProduct={handleSubmitForm} />
                            }
                        />
                        <Route
                            path="/admin/product-form/:id"
                            element={
                                <ProductForm onProduct={handleSubmitForm} />
                            }
                        />
                        <Route path="/admin/not404" element={<Not404 />} />
                    </Route>
                </Route>

                <Route path="/notAdmin" element={<NotFoudAdmin />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
            {/* </main> */}

            {/* <Footer /> */}
        </>
    );
}

export default App;
