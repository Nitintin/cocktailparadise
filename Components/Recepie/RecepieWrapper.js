import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import classess from './Recepie.module.css'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const RecepieWrapper = ({ drinkDetail }) => {

    const [ingredientInfo, setIngredientInfo] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (name) => {
        fetchInfo(name);
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };
    const fetchInfo = async (ingredientName) => {
        const result = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=` + ingredientName);
        setIngredientInfo(result.data.ingredients[0].strDescription);
    }

    const ingregientList = item => {
        const ingredientArr = [];
        for (var i = 1; i <= 15; i++) {
            var ingredientVar = "strIngredient" + i
            var measureVar = "strMeasure" + i

            if (item[ingredientVar]) {
                ingredientArr.push(<>
                    <li onClick={() => handleClickOpen(item[ingredientVar].split(' ').join('_'))}>
                        {item[ingredientVar]} ( {item[measureVar]} )
                    </li>
                </>)
            }
        }
        return ingredientArr
    }
    return (
        <main className={classess.recepieWrapper}>
            <Grid container >
                <Grid item sm={5} className={classess.heading}>
                    <h1>{drinkDetail.strDrink}</h1>
                </Grid>
                <Grid item sm={7} className={classess.imgContainer}>
                    <img src={drinkDetail.strDrinkThumb} alt="cocktail" />
                </Grid>
            </Grid>

            <section className={classess.recepieDetails}>
                <Grid container >
                    <Grid item sm={4} xs={12} className={classess.heading}>
                        <h2>INGREDIENTS</h2>
                        <small>( Click on any ingredient for detailed info ) </small>
                    </Grid>
                    <Grid item sm={8} xs={12} className={classess.heading}>
                        <ul className={classess.list}>
                            {ingregientList(drinkDetail)}
                        </ul>
                    </Grid>
                </Grid>
                <hr />
                <Grid container >
                    <Grid item sm={4} xs={12} className={classess.heading}>
                        <h2>INSTRUCTIONS</h2>
                        <small>( To be followed in given order ) </small>
                    </Grid>
                    <Grid item xs={12} sm={8} className={classess.heading}>
                        <ul className={classess.list}>
                            {
                                drinkDetail.strInstructions.split(".").map((item, index) =>
                                    <>
                                        <li key={item}>
                                            <span> {item} </span>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </Grid>

                </Grid>
            </section>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Ingredient Info</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {ingredientInfo}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </main>
    )
}

export default RecepieWrapper
