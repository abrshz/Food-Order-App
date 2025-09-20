import React from 'react';
import { useEffect, useState } from 'react';

function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMeals() {
            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:3000/meals');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const meals = await response.json();
                setLoadedMeals(meals);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching meals:', error);
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchMeals();
    }, []);

    if (isLoading) {
        return <div>Loading meals...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <ul id='meals'>
            {loadedMeals.map(meal => (
                <li key={meal.id}>{meal.name}</li> // Use meal.id instead of meal.key
            ))}
        </ul>
    );
}

export default Meals;