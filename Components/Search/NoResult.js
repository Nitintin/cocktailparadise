import React from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import classes from './Search.module.css'

const NoResult = () => {
    return (
        <div className={classes.errorWrapper}>
            <section>
                <h1>OOPS!</h1>
                <h3>We dont know about this drink</h3>
                <br />
                <Link href="/recepie" passHref>
                    <Button variant="contained" color="secondary">Try some suggestions instead?</Button>
                </Link>
            </section>
        </div>
    )
}

export default NoResult
