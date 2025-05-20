import { useEffect, useState } from "react";
import axios from "axios";

const Menu = ({ restaurantId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/menu/${restaurantId}`).then((response) => {
      setProducts(response.data.menu);
    });
  }, [restaurantId]);

  return (
    <div>
      <h2>Menú del Restaurante</h2>
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

export default Menu;
