import React from 'react'
import Link from 'next/link'
import classes from './DrinkItem.module.css';
import Grid from '@material-ui/core/Grid';

const DrinkItem = ({ drink }) => {
    return (
        <Grid item sm={4} className={classes.cocktailItem}>
            <Link href={`/recepie/` + drink.idDrink} passHref>
                <figure>
                    <img src={drink.strDrinkThumb} alt="cocktail" />
                    <figcaption>
                        <h4>{drink.strDrink}</h4>
                    </figcaption>
                </figure>
            </Link>
        </Grid>
    )
}

export default DrinkItem
