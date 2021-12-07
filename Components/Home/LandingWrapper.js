import React from 'react'
import Link from 'next/link'
import classes from './Home.module.css'
import Button from '@material-ui/core/Button';

const LandingPage = () => {
    return (
        <main className={classes.homePage}>
            <section className={classes.textWrapper}>
                <h1 className={classes.heading}>The Cocktail Paradise</h1>
                <div className="cta">
                    <Link href="/listing/Cocktail" passHref>
                        <Button variant="contained" color="primary" className={classes.categoryBtn}>Top 100 Cocktails</Button>
                    </Link>
                    <Link href="/listing/Party" passHref>
                        <Button variant="contained" color="primary" className={classes.categoryBtn}>Party famous drinks</Button>
                    </Link>
                    <Link href="/listing/Ordinary_Drink" passHref>
                        <Button variant="contained" color="primary" className={classes.categoryBtn}>Popular among youth</Button>
                    </Link>
                    <Link href="/listing/Shot" passHref>
                        <Button variant="contained" color="primary" className={classes.categoryBtn}>Cocktail Shots</Button>
                    </Link>
                    <Link href="/listing/Beer" passHref>
                        <Button variant="contained" color="primary" className={classes.categoryBtn}>Beer Cocktails</Button>
                    </Link>
                </div>
                <Link href="/recepie/" passHref>
                    <Button variant="contained" color="secondary">Todays Cocktail Suggestion</Button>
                </Link>
            </section>
        </main>
    )
}

export default LandingPage
