import React, { useEffect, useState } from "react";

const Image = ({ data }) => {
    if (data == null) {
        return (
          <div className="content">
            <p></p>
          </div>
        );
    }
    return (
            <img alt = "super cute dog!"
                 src = {data.contents[Math.floor(Math.random()*data.contents.length)].picture.url} 
                 width = "70%" 
                 height = "70%" 
            />
    );
};  


const Notfound = () => {     
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://number-oden.microcms.io/api/v1/404pic",{
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
            <div className = "container has-text-centered is-size-1">
                <h2>404 Not Found</h2>
                <p className = "container is-size-3">
                    Sorry, this page does not exist.<br></br>
                    This can be caused by the following reasons.
                </p>
            </div>
            <br></br>

            <div className = "columns">
                <div className = "column is-half">
                    <div className = "container has-text-left">
                        <Image data = {data} />
                    </div>
                </div>


                <div className = "column is-half">
                    <div className = "container has-text-left is-size-3">
                        <ol>
                            <br></br>
                            <li>The URL of the page may have changed.</li><br></br>
                            <li>The page may have been deleted.</li><br></br>
                            <li>It's possible that you have used the wrong URL.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Notfound