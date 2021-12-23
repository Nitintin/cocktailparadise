import ListingWrapper from '../../../Components/Listing/ListingWrapper'
import axios from 'axios'

const listing = ({ drinks, endpoint }) => {
    return <ListingWrapper drinks={drinks} endpoint={endpoint} />
}

export async function getStaticProps({ params }) {
    if (params.ingredientName === "Party") {
        params.ingredientName = "Punch_/_Party_Drink";
    }
    const fetchedDrinks = await axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=` + params.ingredientName);
    return {
        props: {
            drinks: fetchedDrinks.data.drinks,
            endpoint: params.ingredientName,
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { ingredientName: "vodka" } },
            { params: { ingredientName: "jagermeister" } },
            { params: { ingredientName: "gin" } },
            { params: { ingredientName: "whiskey" } },
            { params: { ingredientName: "tequila" } },
        ],
        fallback: "blocking",
    }
}


export default listing

