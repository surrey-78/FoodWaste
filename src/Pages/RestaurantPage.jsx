import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RestaurantPage.css'

const restaurantData = {
  1: { 
    name: 'Udupi Hotel Akshaya', 
    foods: [
      { foodName: 'Masala Dosa', availability: 10, expiry: 2, imageUrl: '/images/masalaDosa.jpeg' },
      { foodName: 'Idli Vada', availability: 8, expiry: 2, imageUrl: '/images/idliVada.jpeg' }
    ]
  },
  2: { 
    name: 'Madurai Kumar Mess', 
    foods: [
      { foodName: 'Chicken Biryani', availability: 5, expiry: 1, imageUrl: '/images/ChickenBiriyani.jpeg' },
      { foodName: 'Mutton Curry', availability: 3, expiry: 1, imageUrl: '/images/MuttonCurry.jpeg' }
    ]
  },
  3: { 
    name: 'Geetham Veg Restaurant', 
    foods: [
      { foodName: 'Paneer Butter Masala', availability: 5, expiry: 1, imageUrl: '/images/PBM.jpeg' },
      { foodName: 'Aloo Gobi', availability: 7, expiry: 1, imageUrl: '/images/AlooGobi.jpeg' }
    ]
  },
  4: { 
    name: 'Coal Barbecues', 
    foods: [
      { foodName: 'Grilled Chicken', availability: 5, expiry: 1, imageUrl: '/images/GrillChik.jpeg' },
      { foodName: 'BBQ Prawns', availability: 3, expiry: 1, imageUrl: '/images/BBQprawn.jpeg' }
    ]
  },
  5: { 
    name: 'Grill Box R K Salai', 
    foods: [
      { foodName: 'Shawarma', availability: 10, expiry: 2, imageUrl: '/images/Shawarma.jpeg' },
      { foodName: 'Grilled Fish', availability: 4, expiry: 2, imageUrl: '/images/GrillFish.jpeg' }
    ]
  },
  6: { 
    name: 'DR Kitchen', 
    foods: [
      { foodName: 'Veg Pulao', availability: 5, expiry: 1, imageUrl: '/images/VegPulao.jpeg' },
      { foodName: 'Dal Tadka', availability: 6, expiry: 1, imageUrl: '/images/DalTadka.jpeg' }
    ]
  },
  7: { 
    name: 'Dindigal Thalapakatti Biriyani', 
    foods: [
      { foodName: 'Mutton Biryani', availability: 5, expiry: 1, imageUrl: '/images/MuttonBiri.jpeg' },
      { foodName: 'Chicken 65', availability: 3, expiry: 1, imageUrl: '/images/65.jpeg' }
    ]
  },
  8: { 
    name: 'Charminar Biriyani Centre', 
    foods: [
      { foodName: 'Hyderabadi Biryani', availability: 5, expiry: 1, imageUrl: '/images/HydBiri.jpeg' },
      { foodName: 'Double Ka Meetha', availability: 4, expiry: 1, imageUrl: '/images/DkaMeetha.jpeg' }
    ]
  }
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
      {restaurant.foods.map((food, index) => (
        <FoodItem key={index} food={food} />
      ))}
    </div>
  );
};

const FoodItem = ({ food }) => {
  const [quantity, setQuantity] = useState(1);
  const [imageExpired, setImageExpired] = useState(false);

  // Check for image expiration
  useEffect(() => {
    const timer = setTimeout(() => setImageExpired(true), food.expiry * 60 * 60 * 1000); // Expiry in ms
    return () => clearTimeout(timer); // Clear on unmount
  }, [food.expiry]);

  const incrementQuantity = () => {
    if (quantity < food.availability) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOrder = () => {
    alert(`You have ordered ${quantity} ${food.foodName}`);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <h2>{food.foodName}</h2>
      {imageExpired ? (
        <p>Food image has expired.</p>
      ) : (
        <img src={food.imageUrl} alt={food.foodName} style={{ width: '300px', height: '200px' }} />
      )}
      <p>Availability: {food.availability}</p>
      <p>Expiry Time: {food.expiry} hour(s)</p>

      {/* Centering buttons using flexbox */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button onClick={decrementQuantity} disabled={quantity === 1}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity} disabled={quantity === food.availability}>+</button>
        </div>
        <button onClick={handleOrder} style={{ marginTop: '10px' }}>Order Now</button>
      </div>
    </div>
  );
};

export default RestaurantPage;