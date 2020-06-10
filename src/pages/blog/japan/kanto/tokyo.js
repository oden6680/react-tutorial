import React from "react";
import ImageGallery from 'react-image-gallery';

import Pic1 from "../../../../images/TK001.JPG";
import Pic2 from "../../../../images/TK002.JPG";
import Pic3 from "../../../../images/TK003.JPG";
import Pic4 from "../../../../images/TK004.JPG";
import Pic5 from "../../../../images/TK005.JPG";

import "react-image-gallery/styles/css/image-gallery.css";

const Tokyo = props => {
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
            <h2 className = "title">Tokyo</h2>
            <br></br>
        </div>
        <ImageGallery items = {images} disableSwipe = {true} autoPlay = {true}/>
        </section>
    )
}

export default Tokyo