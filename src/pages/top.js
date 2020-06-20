import React, { useEffect, useState } from "react";

const MakeArticle = ({ data }) => {
    if (data == null) {
      return (
        <div className="content">
          <p>loading</p>
        </div>
      );
    }
  
    var list = []
    for(let i = 0; i < data.contents.length; i++){
        list.push(
          <section className = "section">
            <div className = "title">
                {data.contents[i].title}
            </div>
            <div className = "subtitle">
                {data.contents[i].createdAt.substr(0,10)}
            </div>
            <p>
                <div dangerouslySetInnerHTML = {{ __html: data.contents[i].text}}/>
            </p>
            <hr></hr>
          </section>
        );
    }
  
    return (
      <div>
        {list}
      </div>
    );
  }

const Top = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://number-oden.microcms.io/api/v1/update",{
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
                <h1 className = "title">Updare Information</h1>
                <MakeArticle data = { data } />
            </div>
        </section>
    )
}

export default Top