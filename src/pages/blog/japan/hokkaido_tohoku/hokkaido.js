import React from "react";
import ImageGallery from 'react-image-gallery';

import Pic1 from "../../../../images/HK001.JPG";
import Pic2 from "../../../../images/HK002.JPG";
import Pic3 from "../../../../images/HK003.JPG";
import Pic4 from "../../../../images/HK004.JPG";
import Pic5 from "../../../../images/HK005.JPG";

import "react-image-gallery/styles/css/image-gallery.css";

const Hokkaido = props => {
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
        {
          original: Pic5,
          thumbnail: Pic5,
        },
    ];
    
    return (
        <section className = "section">
        <div className = "container">
            <h2 className = "title">Hokkaido</h2>
            <br></br>
        </div>
        <ImageGallery items = {images} disableSwipe = {true} />
        </section>
    )
}

export default Hokkaido