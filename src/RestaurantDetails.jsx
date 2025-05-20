const RestaurantDetails = ({ restaurant, onBack, addToCart }) => {
  if (!restaurant) {
    return <p>No se ha seleccionado un restaurante.</p>;  // ✅ Mensaje si `restaurant` es `null`
  }

  return (
    <div>
      <button onClick={onBack}>← Volver</button>
      <h2>{restaurant.name}</h2>
      <img src={restaurant.image} alt={restaurant.name} width="300" />
      <h3>Menú:</h3>
      <ul>
        {restaurant.menu ? (
          restaurant.menu.map((item, index) => (
            <li key={index}>
              <p>{item.name} - {item.price}</p>
              <button onClick={() => addToCart(item)}>Agregar al carrito</button>
            </li>
          ))
        ) : (
          <p>El restaurante no tiene menú disponible.</p>  // ✅ Mensaje si `restaurant.menu` es `null`
        )}
      </ul>
    </div>
  );
};

export default RestaurantDetails;



