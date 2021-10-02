import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Rest.css';


const Restaurent = () => {
    const [search , setSearch] = useState('');
    const [meals , setMeals] = useState([]);
    useEffect(() => {
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    } ,)
    const handleInput = m =>{
        const searchtextValue = m.target.value;
        setSearch(searchtextValue);
    }
    return (
        <div>
             <div style={{textAlign: 'center'}}>
           <input onChange={handleInput} style={{width: '40%' ,padding:'10px 20px',margin:'40px 0' , background:'#959595' , color: '#fff' , borderRadius: '10px' , border: 'none' , fontWeight:'bold'}} placeholder="search our food by name" type="text" />
         
          </div>
          <div  style={{textAlign:'center', display:'flex' , justifyContent:'space-around' , flexWrap:'wrap'}} className="card">
             
              {
                  meals.map(meal => <Meals
                  key ={meal.idMeal}
                  meal={meal}
                  ></Meals>)
              }
          </div>
        </div>
    );
};

export default Restaurent;