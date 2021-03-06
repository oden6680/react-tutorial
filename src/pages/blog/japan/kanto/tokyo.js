import React, { useEffect, useState } from "react";
import ImageGallery from 'react-image-gallery';

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

const setImages = ({ data }) =>{
  var items = []
  if (data == null){
    return items
  }
  for(let i = 0; i < data.contents.length; i++){
    items.push(
      {
        original: data.contents[i].picture.url,
        thumbnail: data.contents[i].picture.url,
      },
    )
  }
  return items 
}

const Tokyo = () => {
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

  const images = setImages({ data })

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