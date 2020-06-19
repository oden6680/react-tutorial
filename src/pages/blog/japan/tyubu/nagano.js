import React from "react";
import ImageGallery from 'react-image-gallery';

import Pic1 from "../../../../images/NG001.JPG";
import Pic2 from "../../../../images/NG002.JPG";

import "react-image-gallery/styles/css/image-gallery.css";

const Nagano = props => {
    const images = [
        {
          original: Pic1,
          thumbnail: Pic1,
        },
        {
          original: Pic2,
          thumbnail: Pic2,
        },
    ];
    
    return (
        <section className = "section">
        <div className = "container">
            <h2 className = "title">Nagano</h2>
            <br></br>
        </div>
        <ImageGallery items = {images} disableSwipe = {true} />
        </section>
    )
}

export default Nagano