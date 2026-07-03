const Product = require("../models/Product");

// Create Product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            message: "Product Created Successfully",
            data: product
        });

    } catch (error) {
        res.status(500).json({
            message: "Error Creating Product",
            error: error.message
        });
    }
};

// Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({
            message: "Error Fetching Products",
            error: error.message
        });
    }
};

// Update Product
const updateProduct = async (req, res) => {
    try {

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Product Updated Successfully",
            data: updatedProduct
        });

    } catch (error) {

        res.status(500).json({
            message: "Error Updating Product",
            error: error.message
        });

    }
};

// Delete Product
const deleteProduct = async (req, res) => {
    try {

        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Product Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Error Deleting Product",
            error: error.message
        });

    }
};

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
};