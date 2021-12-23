import React, { useRef, useEffect, useState } from 'react'
import classess from './DrinkItem.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

const ListingBanner = ({ endpoint }) => {
    const [ingredientList, setIngredientList] = useState([]);
    let bannerText = "";
    const searchRef = useRef("");
    const ingredientRef = useRef("");
    const router = useRouter();

    useEffect(() => {
        const fetchIngredients = async () => {
            const result = await axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
            setIngredientList(result.data.drinks.sort(sortMethod))
        }
        fetchIngredients();
    }, []);

    const sortMethod = (a, b) => {
        if (a.strIngredient1 > b.strIngredient1) {
            return 1
        } else {
            return -1;
        }
        return 0
    }

    switch (endpoint) {
        case "Cocktail":
            bannerText = "100+ Cocktails to Explore !"
            break;
        case "Punch_/_Party_Drink":
            bannerText = "Must Have Cocktails for Parties"
            break;
        case "Ordinary_Drink":
            bannerText = "The Fan Favourite Drinks are here"
            break;
        case "Shot":
            bannerText = "Shot Cocktail - Now are we talking"
            break;
        case "Beer":
            bannerText = "You would love these Beer Cocktails"
            break;

        default:
            bannerText = "Cocktails that go with your choice"

    }

    const handleSearchClick = () => {
        router.push("/search/" + searchRef.current.value.split(" ").join("_"));
    }

    const handleIngredientSearch = () => {
        router.push("/listing/ingredient/" + ingredientRef.current.value);
    }

    return (
        <div className={classess.bannerWrapper}>
            <div className={classess.bannerMsg}>
                <h1>{bannerText}</h1>
                <Grid container>
                    <Grid className={classess.searchContainer} item md={6} xs={12}>
                        <input type="text" placeholder="search your drink" ref={searchRef} />
                        <button onClick={handleSearchClick}>Search</button>
                    </Grid>
                    <Grid className={classess.searchContainer} item md={6} xs={12}>
                        {/* <input type="text" placeholder="search via ingredient" ref={ingredientRef} /> */}
                        <select name="ingredients" ref={ingredientRef}>
                            {ingredientList.map(item =>
                                <option
                                    key={item.strIngredient1}
                                    value={item.strIngredient1}
                                >
                                    {item.strIngredient1}
                                </option>)
                            }
                        </select>
                        <button onClick={handleIngredientSearch}>Search</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ListingBanner
