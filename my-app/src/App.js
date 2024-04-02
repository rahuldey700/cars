import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

function createCarData() {
  const carTypes = ['Sedan', 'Truck', 'SUV'];
  const carColors = ['Red', 'Black', 'Blue', 'White', 'Grey'];
  let carsData = [
    { id: 1, name: 'Tesla Model S', type: 'Sedan', color: 'Red', price: 79990, imageUrl: 'https://via.placeholder.com/150?text=Tesla+Model+S' },
    { id: 2, name: 'Ford F-150', type: 'Truck', color: 'Black', price: 29990, imageUrl: 'https://via.placeholder.com/150?text=Ford+F-150' },
    { id: 3, name: 'Chevrolet Tahoe', type: 'SUV', color: 'White', price: 49990, imageUrl: 'https://via.placeholder.com/150?text=Chevrolet+Tahoe' },
    {id: 4, name: 'Mercedes E Class', type: 'Sedan', color: 'Red', price: 79990, imageUrl: 'https://via.placeholder.com/150?text=Mercedes+E+Class'},
    {id: 5, name: 'BMW Series X', type: 'Sedan', color: 'Grey', price: 79990, imageUrl: 'https://via.placeholder.com/150?text=BMW+Series+X'},
    {id: 6, name: 'Range Rover', type: 'SUV', color: 'Black', price: 65000, imageUrl: 'https://via.placeholder.com/150?text=Range+Rover'},
    {id: 7, name: 'Tesla Model 3', type: 'Sedan', color: 'Grey', price: 40000, imageUrl: 'https://via.placeholder.com/150?text=Tesla+Model+3'},
    {id: 7, name: 'Audi A6', type: 'Sedan', color: 'Blue', price: 120000, imageUrl: 'https://via.placeholder.com/150?text=Audi+A6'},
    {id: 8, name: 'Tesla Model X', type: 'SUV', color: 'Black', price: 75000, imageUrl: 'https://via.placeholder.com/150?text=Tesla+Model+X'},
    {id: 9, name: 'Tesla Cyber Truck', type: 'Truck', color: 'Red', price: 130000, imageUrl: 'https://via.placeholder.com/150?text=Tesla+Cyber+Truck'},
    {id: 10, name: 'Toyota Corolla', type: 'Sedan', color: 'White', price: 24000, imageUrl: 'https://via.placeholder.com/150?text=Toyota+Corolla'}, ];
  return carsData;
}

function App() {
  const [cars, setCars] = useState(createCarData());
  const [filters, setFilters] = useState({ type: '', color: '', price: '' });
  const [favorites, setFavorites] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    console.log('Filters:', filters);
  }, [filters]);

  const toggleFavorite = (id) => {
    const car = cars.find(car => car.id === id);
    const alreadyFavorite = favorites.some(favorite => favorite.id === id);

    if (alreadyFavorite) {
      setFavorites(favorites.filter(favorite => favorite.id !== id));
    } else {
      setFavorites([...favorites, car]);
    }
  };

  const filteredCars = cars.filter(
    (car) =>
      (filters.type ? car.type === filters.type : true) &&
      (filters.color ? car.color === filters.color : true) &&
      (filters.price ? car.price <= Number(filters.price) || filters.price === '' : true)
  );

  return (
    <div style={{ display: 'flex',flexDirection: 'row', padding: '20px' }}>
      <div style={{ flex: '1', maxWidth: '200px', marginRight: '20px' }}>
        <h2>Filters</h2>
        {/* Filter Form Here */}
        <div>
          <label>Type:</label>
          <select name="type" onChange={handleFilterChange} value={filters.type}>
            <option value="">All</option>
            <option value="Sedan">Sedan</option>
            <option value="Truck">Truck</option>
            <option value="SUV">SUV</option>
          </select>
        </div>
        <div>
          <label>Color:</label>
          <select name="color" onChange={handleFilterChange} value={filters.color}>
            <option value="">All</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="White">White</option>
            <option value="Grey">Grey</option>
          </select>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" onChange={handleFilterChange} value={filters.price} placeholder="Max Price" />
        </div>
        <h2>Favorites</h2>
        <div>
          {favorites.map((car) => (
            <p key={car.id}>{car.name}</p>
          ))}
        </div>
      </div>
      <div style={{ flex: '3', display: 'flex', flexWrap: 'wrap', justifyContent: 'start', gap: '20px' }}>
      {filteredCars.map((car) => (
  (filters.type === car.type || filters.type === '') &&
  (filters.color === car.color || filters.color === '') &&
  (filters.price === '' || filters.price >= car.price)
    ? <CarCard key={car.id} car={car} toggleFavorite={toggleFavorite} />
    : null
))}
      </div>
    </div>
  );
}

export default App;
