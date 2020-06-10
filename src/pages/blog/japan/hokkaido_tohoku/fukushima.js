import React from "react";
import ImageGallery from 'react-image-gallery';

import Pic1 from "../../../../images/FK001.JPG";
import Pic2 from "../../../../images/FK002.JPG";
import Pic3 from "../../../../images/FK003.JPG";

import "react-image-gallery/styles/css/image-gallery.css";

const Fukushima = props => {
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
            <h2 className = "title">Fukushima</h2>
            <br></br>
        </div>
        <ImageGallery items = {images} disableSwipe = {true} autoPlay = {true}/>
        </section>
    )
}

export default Fukushima