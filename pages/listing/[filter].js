import ListingWrapper from '../../Components/Listing/ListingWrapper'
import axios from 'axios'

const listing = ({ drinks, endpoint }) => {
    return <ListingWrapper drinks={drinks} endpoint={endpoint} />
}

export async function getStaticProps({ params }) {
    if (params.filter === "Party") {
        params.filter = "Punch_/_Party_Drink";
    }
    const fetchedDrinks = await axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=` + params.filter);
    return {
        props: {
            drinks: fetchedDrinks.data.drinks,
            endpoint: params.filter,
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { filter: "Cocktail" } },
            { params: { filter: "Punch_/_Party_Drink" } },
            { params: { filter: "Ordinary_Drink" } },
            { params: { filter: "Shot" } },
            { params: { filter: "Beer" } },
        ],
        fallback: "blocking",
    }
}


export default listing

