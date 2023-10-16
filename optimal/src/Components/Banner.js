import React from 'react';
import BannerImage from "../Assets/OptimalHandymanBanner.png";
import "../App.css"


function Banner() {
  return (
    <div className='banner'>
        <img src={BannerImage} alt='Banner Background'/>
    </div>
  )
}

export default Banner