const OwnerDashboard = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Juan Pérez", items: ["Pizza Margarita", "Coca Cola"], status: "Pendiente" },
    { id: 2, customer: "Ana Gómez", items: ["Whopper", "Papas Fritas"], status: "Preparando" }
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "Pizza Margarita", price: "$10" },
    { id: 2, name: "Whopper", price: "$8" }
  ]);

  const updateOrderStatus = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  const addProduct = () => {
    const name = prompt("Nombre del nuevo producto:");
    const price = prompt("Precio del nuevo producto:");
    if (name && price) {
      setProducts([...products, { id: products.length + 1, name, price }]);
    }
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2>Panel de Dueño 🏪</h2>
      <h3>📦 Pedidos:</h3>
      <ul>
        {orders.map((order, index) => (
          <li key={order.id}>
            <p>{order.customer} - {order.items.join(", ")}</p>
            <p>Estado: {order.status}</p>
            <button onClick={() => updateOrderStatus(index, "En camino")}>Enviar pedido</button>
            <button onClick={() => updateOrderStatus(index, "Entregado")}>Marcar como entregado</button>
          </li>
        ))}
      </ul>

      <h3>🛍️ Productos:</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name} - {product.price}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Agregar nuevo producto</button>
    </div>
  );
};

export default OwnerDashboard;
