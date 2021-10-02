import React from 'react';
import './Meals.css';

const Meals = (props) => {
    const {strMeal , strInstructions, strMealThumb} = props.meal
    console.log(props.meal);
    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0,200)}</p>
            <button>show details</button>
        </div>
    );
};

export default Meals;