import { useState } from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {

  const [refresh, setRefresh] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const refreshProducts = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container">

      <h1 className="title">
        Product CRUD Application
      </h1>

      <ProductForm
        refreshProducts={refreshProducts}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />

      <ProductList
        refresh={refresh}
        setSelectedProduct={setSelectedProduct}
      />

    </div>
  );
}

export default App;