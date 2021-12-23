import SearchWrapper from '../../Components/Search/SearchWrapper'
import axios from 'axios'

const search = ({ drinkDetails }) => {
    return <SearchWrapper drinkDetails={drinkDetails} />
}

export async function getServerSideProps({ params }) {
    const result = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + params.searchName);
    return {
        props: {
            drinkDetails: result.data.drinks,
        }
    }
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { searchName: "margarita" } },
//         ],
//         fallback: true,
//     }
// }

export default search