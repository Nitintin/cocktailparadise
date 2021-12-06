import ListingWrapper from '../../Components/Listing/ListingWrapper'
import axios from 'axios'

const listing = ({ drinks }) => {
    return <ListingWrapper drinks={drinks} />
}

export async function getStaticProps() {
    const fetchedDrinks = await axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`);
    return {
        props: {
            drinks: fetchedDrinks.data.drinks,
        },
    }
}

export default listing

