import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Meals() {

    const [loadedMeals , setLoadedMeals] = useState([])
    useEffect(() =>{
        async function fetchMeals(params) {
        
            const response = await fetch('http://localhost:3000/meals')  
            
            if (!response.ok) {

            }

            const meals = await response.json();
        } 
        fetchMeals();
    }, [])
   
  return (

    <ul id='meals'>
        {loadedMeals.map(meal => <li key={meal.key}>{meal.name}</li>)}
    </ul>
    
  )
}

export default Meals