import React from "react";

import Pic1 from "../../images/404_1.png";
import Pic2 from "../../images/404_2.png";
import Pic3 from "../../images/404_3.png";
import Pic4 from "../../images/404_4.png";
import Pic5 from "../../images/404_5.png";
import Pic6 from "../../images/404_7.png";
import Pic7 from "../../images/404_8.png";


const Notfound = props => {   
    var images = [Pic1,Pic2,Pic3,Pic4,Pic5,Pic6,Pic7] ;
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
                        <img src = {images[Math.floor(Math.random()*images.length)]} width = "70%" height = "70%"></img>
                    </div>
                </div>


            <div className = "column is-half">
            <div className = "container has-text-left is-size-3">
            <ol>
                <br></br>
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