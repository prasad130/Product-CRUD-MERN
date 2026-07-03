import { useState, useEffect } from "react";
import API from "../services/api";

function ProductForm({ refreshProducts, selectedProduct, setSelectedProduct }) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {

        if (selectedProduct) {

            setName(selectedProduct.name);
            setPrice(selectedProduct.price);
            setCategory(selectedProduct.category);
            setDescription(selectedProduct.description);

        }

    }, [selectedProduct]);

    const handleSubmit = async (e) => {

    e.preventDefault();

    if (!name.trim()) {
        alert("Product name is required");
        return;
    }

    if (name.trim().length < 3) {
        alert("Product name must be at least 3 characters");
        return;
    }

    if (!price || price <= 0) {
        alert("Price must be greater than 0");
        return;
    }

    if (!category.trim()) {
        alert("Category is required");
        return;
    }

    if (!description.trim()) {
        alert("Description is required");
        return;
    }

    try {

        if (selectedProduct) {

            await API.put(`/products/${selectedProduct._id}`, {
                name,
                price,
                category,
                description
            });

            alert("Product Updated Successfully");

        } else {

            await API.post("/products", {
                name,
                price,
                category,
                description
            });

            alert("Product Added Successfully");

        }

        setName("");
        setPrice("");
        setCategory("");
        setDescription("");

        setSelectedProduct(null);

        refreshProducts();

    } catch (error) {

        console.log(error);

        alert("Something Went Wrong");

    }

};

    return (
        <div className="form-container">

            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <br /><br />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <br /><br />

                <button type="submit">
                    {selectedProduct ? "Update Product" : "Add Product"}
                </button>

            </form>

        </div>
    );

}

export default ProductForm;