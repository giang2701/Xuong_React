import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import instance from "../axios";

const LayoutClient = () => {
    const [products, setProducts] = useState([]);
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
    // console.log(data);
    return (
        <>
            <Header data={products} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default LayoutClient;
