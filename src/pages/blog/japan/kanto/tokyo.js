import React, { useEffect, useState } from "react";
import ImageGallery from 'react-image-gallery';

import Pic1 from "../../../../images/TK001.JPG";
import Pic2 from "../../../../images/TK002.JPG";
import Pic3 from "../../../../images/TK003.JPG";
import Pic4 from "../../../../images/TK004.JPG";
import Pic5 from "../../../../images/TK005.JPG";

import "react-image-gallery/styles/css/image-gallery.css";

const MakeArticle = ({ data }) => {
  if (data == null) {
    return (
      <div className="content">
        <p></p>
      </div>
    );
  }

  var list = []
  for(let i = 0; i < data.contents.length; i++){
      list.push(
        <section className = "section">
          <div className = "title">{data.contents[i].title}</div>
          <div className = "columns">
              <div className = "column is-half">
                <img src = {data.contents[i].picture.url} alt = "myphoto"></img>
              </div>
              <div className = "column is-half">
                <div dangerouslySetInnerHTML = {{ __html: data.contents[i].text}}/>
              </div>
              <hr></hr>
          </div>
        </section>
      );
  }

  return (
    <div>
      {list}
    </div>
  );
}

const Tokyo = () => {
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
    
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch("https://number-oden.microcms.io/api/v1/blog",{
      headers: {
        'X-API-KEY': '5ce57513-daef-47b5-af3e-7436ffb07062'
      },
    })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }, []);

    return (
        <section className = "section">
          <div className = "container">
              <h2 className = "title">Tokyo</h2>
              <br></br>
          </div>
          <ImageGallery items = {images} disableSwipe = {true} />
            <div className = "container">
              <MakeArticle data = {data} />
            </div> 
        </section>
    )
}

export default Tokyo