import React from "react";
import ImageGallery from 'react-image-gallery';

import Pic1 from "../../../images/MS001.JPG";
import Pic2 from "../../../images/MS002.JPG";
import Pic3 from "../../../images/MS003.JPG";
import Pic4 from "../../../images/MS004.JPG";

import "react-image-gallery/styles/css/image-gallery.css";

const Minsk = props => {
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
            <h2 className = "title">Minsk</h2>
            <br></br>
        </div>
        <ImageGallery items = {images} disableSwipe = {true} autoPlay = {true}/>
        </section>
    )
}

export default Minsk