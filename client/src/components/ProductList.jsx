import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "./ProductCard";

function ProductList({ refresh, setSelectedProduct }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [refresh]);

    const fetchProducts = async () => {

        try {

            const response = await API.get("/products");

            setProducts(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
        return;
    }

    try {

        await API.delete(`/products/${id}`);

        alert("Product Deleted Successfully");

        fetchProducts();

    } catch (error) {

        console.log(error);

        alert("Error Deleting Product");

    }

};

    return (

        <div className="product-list">

            <h2>Product List</h2>

            {
                products.map((product) => (

                    <ProductCard
                        key={product._id}
                        product={product}
                        onDelete={deleteProduct}
                        onEdit={setSelectedProduct}
                    />

                ))
            }

        </div>

    );

}

export default ProductList;