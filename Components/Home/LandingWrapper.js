import React from 'react'
import Link from 'next/link'
import classes from './Home.module.css'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const LandingPage = () => {
    return (
        <main className={classes.homePage}>
            <section className={classes.textWrapper}>
                <h1>The Cocktail Paradise</h1>
                <Link href="/listing" passHref>
                    <Button variant="contained" color="primary">View all cocktails</Button>
                </Link>
                <Link href="/recepie/" passHref>
                    <Button variant="contained" color="secondary">Todays Cocktail Suggestion</Button>
                </Link>
            </section>
        </main>
    )
}

export default LandingPage
