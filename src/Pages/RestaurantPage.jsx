import React from 'react';
import { useParams } from 'react-router-dom';

const restaurantData = {
  1: { name: 'Restaurant A', availability: '10 meals', expiry: '2 hours' },
  2: { name: 'Restaurant B', availability: '5 meals', expiry: '1 hour' },
};

const RestaurantPage = () => {
  const { id } = useParams();
  const restaurant = restaurantData[id];

  if (!restaurant) {
    return <div>Restaurant not found.</div>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Food Availability: {restaurant.availability}</p>
      <p>Expiry Time: {restaurant.expiry}</p>
    </div>
  );
};

export default RestaurantPage;
