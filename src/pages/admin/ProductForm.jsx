import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productSchema from "../../schemaValid/productSchema";
import { useForm } from "react-hook-form";
import instance from "../../axios";

const ProductForm = ({ onProduct }) => {
    const { id } = useParams();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ resolver: zodResolver(productSchema) });

    if (id) {
        useEffect(() => {
            (async () => {
                try {
                    const { data } = await instance.get(`/products/${id}`);
                    reset(data);
                } catch (error) {
                    console.log(error);
                }
            })();
        }, []);
    }

    const onSubmit = (data) => {
        onProduct({ ...data, id });
    };
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="container-sm my-5 w-50 formProduct"
            >
                <h1 className="h1 text-center">
                    {id ? "Product Edit" : "Product Add"}
                </h1>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        {...register("title", { required: true })}
                    />
                    {errors.title?.message && (
                        <p className="text-danger">{errors.title?.message}</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="thumbnail" className="form-label">
                        Images
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="thumbnail"
                        {...register("thumbnail")}
                    />
                    {errors.thumbnail?.message && (
                        <p className="text-danger">
                            {errors.thumbnail?.message}
                        </p>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        {...register("price", {
                            required: true,
                            valueAsNumber: true,
                        })}
                    />
                    {errors.price?.message && (
                        <p className="text-danger">{errors.price?.message}</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="color" className="form-label">
                        Color
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="color"
                        {...register("color")}
                    />
                    {errors.color?.message && (
                        <p className="text-danger">{errors.color?.message}</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        rows={10}
                        type="text"
                        className="form-control"
                        id="description"
                        {...register("description")}
                    />
                    {errors.description?.message && (
                        <p className="text-danger">
                            {errors.description?.message}
                        </p>
                    )}
                </div>
                <div className="my-5">
                    <button className="btn btn-primary w-100" type="submit">
                        {id ? "Product Edit" : "Product Add"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default ProductForm;
