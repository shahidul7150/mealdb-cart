import React from 'react';
import './Meal.css'
const Meal = (props) => {
    console.log(props);
    console.log(props.meals.strMeal);
    const { strMealThumb, strMeal,idMeal } = props.meals
    return (
        <div className='meal-component'>
            <img src={strMealThumb} alt="" />
            <h4>Name:{strMeal}</h4>
            <button onClick={()=>props.clickPass(idMeal)}>Add To Cart</button>
        </div>
    );
};

export default Meal;