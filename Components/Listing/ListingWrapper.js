import React from 'react'
import DrinkList from './DrinkList'
import classess from './DrinkItem.module.css'
import ListingBanner from './ListingBanner'
const ListingWrapper = ({ drinks, endpoint, fetchError }) => {
    return (
        <>
            {console.log(fetchError)}
            <ListingBanner endpoint={endpoint} />
            <div className={classess.listWrapper}>
                <DrinkList drinks={drinks} />
            </div>
        </>

    )
}

export default ListingWrapper
