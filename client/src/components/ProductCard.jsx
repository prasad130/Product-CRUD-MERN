function ProductCard({ product, onDelete, onEdit }) {

    return (

        <div className="product-card">

            <h3>{product.name}</h3>

            <p>
                <strong>Price:</strong> ₹{product.price}
            </p>

            <p>
                <strong>Category:</strong> {product.category}
            </p>

            <p>{product.description}</p>

            <div className="button-group">

                <button
                    onClick={() => onEdit(product)}
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(product._id)}
                >
                    Delete
                </button>

            </div>

        </div>

    );

}

export default ProductCard;