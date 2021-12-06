import RecepieWrapper from '../../Components/Recepie/RecepieWrapper'
import axios from 'axios';

const Recepie = ({ drinkDetail }) => {
    return <RecepieWrapper drinkDetail={drinkDetail} />
}

const fetchData = async (url) => {
    const drinkRecepie = await axios(url);
    return drinkRecepie.data.drinks;
}

export async function getStaticProps({ params }) {
    const itemURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + params.drinkId;
    const drinkRecepie = await fetchData(itemURL);

    return {
        props: {
            drinkDetail: drinkRecepie[0],
        },
    }
}

// pre rendering all the dynamic pages
export async function getStaticPaths() {
    const cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
    const fetchedDrinks = await fetchData(cocktailURL);

    const pathsArray = fetchedDrinks.map(item => {
        return (
            { params: { drinkId: item.idDrink } }
        )
    });

    return {
        paths: pathsArray,
        fallback: "blocking"
    }
}

export default Recepie