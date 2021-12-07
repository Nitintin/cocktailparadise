import React from 'react'
import RecepieWrapper from '../Recepie/RecepieWrapper'
import NoResult from './NoResult'

const SearchWrapper = ({ drinkDetails }) => {
    if (drinkDetails) {
        return <RecepieWrapper drinkDetail={drinkDetails[0]} />
    } else {
        return <NoResult />
    }
}

export default SearchWrapper
