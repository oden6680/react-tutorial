import React from "react";
import ImageGallery from 'react-image-gallery';

import Pic1 from "../../../images/BS001.JPG";
import Pic2 from "../../../images/BS002.JPG";
import Pic3 from "../../../images/BS003.JPG";

import "react-image-gallery/styles/css/image-gallery.css";

const Brest = props => {
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
    ];
    
    return (
        <section className = "section">
        <div className = "container">
            <h2 className = "title">Brest</h2>
            <br></br>
        </div>
        <ImageGallery items = {images} disableSwipe = {true} autoPlay = {true} />
        </section>
    )
}

export default Brest