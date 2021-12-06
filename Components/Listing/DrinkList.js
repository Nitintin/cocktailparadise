import React from 'react'
import DrinkItem from './DrinkItem'
import Grid from '@material-ui/core/Grid';

const DrinkList = ({ drinks }) => {

    return (
        <Grid container spacing={5}>
            {drinks.map(item => <DrinkItem key={item.idDrink} drink={item} />)}
        </Grid>
    )
}

export default DrinkList
