import React, { useRef } from 'react'
import classess from './DrinkItem.module.css'
import { useRouter } from 'next/router'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ListingBanner = ({ endpoint }) => {
    let bannerText = "";
    const searchRef = useRef("");
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

        default: "Woah!?"

    }

    const handleSearchClick = () => {
        router.push("/search/" + searchRef.current.value.split(" ").join("_"));
    }

    return (
        <div className={classess.bannerWrapper}>
            <img className={classess.bannerImg} src={"/listing_banner.jpg"} alt="banner" />
            <div className={classess.bannerMsg}>
                <h1>{bannerText}</h1>
                <input type="text" placeholder="search your drink" ref={searchRef} /><button onClick={handleSearchClick}>Search</button>
            </div>
            <ExpandMoreIcon className={classess.bannerArrow} />
        </div>
    )
}

export default ListingBanner
