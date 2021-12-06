import React from 'react'
import DrinkList from './DrinkList'
import classess from './DrinkItem.module.css'
import ListingBanner from './ListingBanner'
const ListingWrapper = ({ drinks }) => {
    return (
        <>
            <ListingBanner />
            <div className={classess.listWrapper}>
                <DrinkList drinks={drinks} />
            </div>
        </>

    )
}

export default ListingWrapper
