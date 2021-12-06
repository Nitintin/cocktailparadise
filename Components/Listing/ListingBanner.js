import React from 'react'
import classess from './DrinkItem.module.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ListingBanner = () => {
    return (
        <div className={classess.bannerWrapper}>
            <img className={classess.bannerImg} src={"/listing_banner.jpg"} alt="banner" />
            <h1 className={classess.bannerMsg}>100+ Cocktails To Explore</h1>
            <ExpandMoreIcon className={classess.bannerArrow} />
        </div>
    )
}

export default ListingBanner
