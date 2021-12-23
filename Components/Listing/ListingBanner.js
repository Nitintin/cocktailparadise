import React, { useRef } from 'react'
import classess from './DrinkItem.module.css'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ListingBanner = ({ endpoint }) => {
    let bannerText = "";
    const searchRef = useRef("");
    const ingredientRef = useRef("");
    const router = useRouter();

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
            {/* <img className={classess.bannerImg} src={"/listing_banner.jpg"} alt="banner" /> */}
            <div className={classess.bannerMsg}>
                <h1>{bannerText}</h1>
                <Grid container>
                    <Grid className={classess.searchContainer} item md={6} xs={12}>
                        <input type="text" placeholder="search your drink" ref={searchRef} />
                        <button onClick={handleSearchClick}>Search</button>
                    </Grid>
                    <Grid className={classess.searchContainer} item md={6} xs={12}>
                        <input type="text" placeholder="search via ingredient" ref={ingredientRef} />
                        <button onClick={handleIngredientSearch}>Search</button>
                    </Grid>

                </Grid>
            </div>
            {/* <ExpandMoreIcon className={classess.bannerArrow} /> */}
        </div>
    )
}

export default ListingBanner
