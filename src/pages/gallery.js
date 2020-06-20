import React from 'react';
import ImageGallery from 'react-image-gallery';

import Brest from "../images/BS001.JPG";
import Minsk from "../images/MS001.JPG";
import Grodna from "../images/GD001.jpeg";
import Hokkaido from "../images/HK001.JPG";
import Fukushima from "../images/FK001.JPG"
import Shizuoka from "../images/SZ001.JPG";
import Nagano from "../images/NG001.JPG";

import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
    const images = [
        {
          original: Brest,
          thumbnail: Brest,
        },
        {
          original: Minsk,
          thumbnail: Minsk,
        },
        {
          original: Grodna,
          thumbnail: Grodna,
        },
        {
          original: Hokkaido,
          thumbnail: Hokkaido,
        },
        {
          original: Fukushima,
          thumbnail: Fukushima,
        },
        {
          original: Shizuoka,
          thumbnail: Shizuoka,
        },
        {
          original: Nagano,
          thumbnail: Nagano,
        },
      ];
    return (
        <section className = "section">
            <div className = "container">
            <h2 className = "title">Recommended Photos</h2>
            <p>These are my favorite pictures.</p>
            </div>
            <br></br>
            <ImageGallery items = {images} disableSwipe = {true} autoPlay = {true} />
        </section>
    )
}
  
export default Gallery