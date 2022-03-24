import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Shop.css'

const Shop = () => {
    const [cart,setCart] = useState([])
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFood(data.meals));
            
    }, []);
    const clickPass = () => {
        
        let newCart = parseInt (cart + 1);
        setCart(newCart)
    }
  
    console.log(food.length);
    return (
        <div className='shop-container'>
            <div className='meal-container'>
            {
                food.map(meals=><Meal key={meals.idMeal} meals={meals} clickPass={clickPass}></Meal>)
            }
            </div>
            <div>
                <h1>Cart section</h1>
                <p>Items: {cart}</p>
            </div>
     </div>
    );
};

export default Shop;