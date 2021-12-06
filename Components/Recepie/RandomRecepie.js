import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecepieWrapper from './RecepieWrapper';


const RandomRecepie = () => {
    const [randomDetail, setRandomDetail] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
            const randomCocktail = await axios(cocktailURL);
            setRandomDetail(randomCocktail.data.drinks[0]);
        }
        fetchData();
    }, []);

    if (Object.keys(randomDetail).length) {
        return <RecepieWrapper drinkDetail={randomDetail} />
    } else {
        return '';
    }

}

export default RandomRecepie
