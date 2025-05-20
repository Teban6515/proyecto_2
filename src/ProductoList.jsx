import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = ({ restaurantId }) => {
  const [products, setProducts] = useState([]);

  // 🔄 Obtener menú del restaurante por ID
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/menu/${restaurantId}`).then((response) => {
      setProducts(response.data.menu);
    });
  }, [restaurantId]);

  return (
    <div>
      <h2>Menú</h2>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} USD</p>
          <button>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
