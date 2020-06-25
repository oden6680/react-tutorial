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
          <div>
            <h2 className = "title">
                {data.contents[i].title}
            </h2>
            <h3 className = "subtitle">
                {data.contents[i].createdAt.substr(0,10)}
            </h3>
            <p>
                <div dangerouslySetInnerHTML = {{ __html: data.contents[i].text}}/>
            </p>
            <hr></hr>
          </div>
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
                <div className = "content">
                    <h1 className = "title">About</h1>
                        <div>
                            <h2 className = "title">номер одeнとは？</h2>
                            <p>このWEBサイトの名前である"номер одeн"はロシア語の単語からの造語です。
                                英語の"number one"が語源になっており、これはロシア語で"номер один"と表します。<br></br>
                                そこへ"один"の部分を、僕のあだ名である"おでん"をロシア語で表記した"одeн"と入れ替えて作られた名前です。</p>
                        </div>
                </div>
                <div className = "content">
                    <h1 className = "title">Update Information</h1>
                    <MakeArticle data = { data } />
                </div>
            </div>
        </section>
    )
}

export default Top