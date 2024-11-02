import React from 'react';
import { useParams } from 'react-router-dom';

const restaurantData = {
  1: { name: 'Udupi Hotel Akshaya', availability: '10 meals', expiry: '2 hours' },//
  2: { name: 'Madurai Kumar Mess', availability: '5 meals', expiry: '1 hour' },//
  3: { name: 'Geetham Veg Restaurant', availability: '5 meals', expiry: '1 hour' },//
  4: { name: 'Coal Barbecues', availability: '5 meals', expiry: '1 hour' },
  5: { name: 'Grill Box R K Salai', availability: '10 meals', expiry: '2 hours' },//
  6: { name: 'DR Kitchen', availability: '5 meals', expiry: '1 hour' },//
  7: { name: 'Dindigal Thalapakatti Biriyani', availability: '5 meals', expiry: '1 hour' },//
  8: { name: 'Charminar Biriyani Centre', availability: '5 meals', expiry: '1 hour' },
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
