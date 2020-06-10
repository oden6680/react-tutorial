import React from "react";
import ImageGallery from 'react-image-gallery';

import Pic1 from "../../../../images/SZ001.JPG";
import Pic2 from "../../../../images/SZ002.JPG";
import Pic3 from "../../../../images/SZ003.JPG";
import Pic4 from "../../../../images/SZ004.JPG";

import "react-image-gallery/styles/css/image-gallery.css";

const Shizuoka = props => {
    const images = [
        {
          original: Pic1,
          thumbnail: Pic1,
        },
        {
          original: Pic2,
          thumbnail: Pic2,
        },
        {
          original: Pic3,
          thumbnail: Pic3,
        },
        {
          original: Pic4,
          thumbnail: Pic4,
        },
    ];
    
    return (
        <section className = "section">
        <div className = "container">
            <h2 className = "title">Shizuoka</h2>
            <br></br>
        </div>
        <ImageGallery items = {images} disableSwipe = {true} autoPlay = {true}/>
        </section>
    )
}

export default Shizuoka