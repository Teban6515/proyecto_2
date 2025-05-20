const restaurantsData = [
  { id: 1, name: "Pizza Hut", address: "Av. Principal 123", image: "https://example.com/pizza.jpg", menu: [
      { name: "Pizza Margarita", price: "$10" },
      { name: "Pizza Pepperoni", price: "$12" }
    ] },
  { id: 2, name: "Burger King", address: "Calle Secundaria 456", image: "https://example.com/burger.jpg", menu: [
      { name: "Whopper", price: "$8" },
      { name: "Papas Fritas", price: "$4" }
    ] }
];

const Restaurants = ({ onSelect }) => {
  return (
    <div>
      <h2>Lista de Restaurantes</h2>
      {restaurantsData.map((restaurant) => (
        <div key={restaurant.id} onClick={() => onSelect(restaurant)} style={{ cursor: "pointer" }}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.address}</p>
          <img src={restaurant.image} alt={restaurant.name} width="200" />
        </div>
      ))}
    </div>
  );
};

export default Restaurants;




