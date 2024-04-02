function CarCard({ car, toggleFavorite }) {
    return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px', textAlign: 'center' }}>
        <img src={car.imageUrl} alt={car.name} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
        <h2 style={{ fontSize: '16px' }}>{car.name}</h2>
        <p>Type: {car.type}</p>
        <p>Color: {car.color}</p>
        <p>Price: ${car.price}</p>
        <button 
            onClick={() => toggleFavorite(car.id)} 
            style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                color: car.isFavorite ? 'red' : 'black' 
            }}
        >
            {car.isFavorite ? '❤️' : '🤍'}
        </button>
    </div>
    );
}

export default CarCard;