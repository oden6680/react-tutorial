import React from "react";
import pro from "../images/profile.jpeg";

const Profile = props => (
    <section className = "section">
        <div className = "container">
            <div className = "columns">

                <div className = "column is-3">
                <h2 className = "title">織田尚哉</h2>
                <h3 className = "subtitle"><i>NAOYA ODA</i></h3>
                    <img src = {pro} alt = "myface" ></img>
                
                <p className = 'menu-label'>SNS</p>
                <ul className = 'menu-list'>
                    <li><a href="/basicinformation">Basic Information</a></li>
                </ul>
                </div>

                <div className = 'column is-three-fifths'>
                    <h2 id = "basicinformation">Basic Information</h2>
                    <hr></hr>
                </div>

                <div className = 'column is-3'>
                    <div className = 'content'>
                    <h2>Links</h2>
                    </div>
                    <aside className = 'menu'>

                    <p className = 'menu-label'>SNS</p>
                    <ul className = 'menu-list'>
                        <li>
                            <a href='https://twitter.com/Oden612' target = "_blank" rel = "noopener noreferrer">Twitter</a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/oden6680' target = "_blank" rel = "noopener noreferrer">Facebook</a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/oden0612/' target = "_blank" rel = "noopener noreferrer">Instagram</a>
                        </li>
                        <li>
                            <a href='https://vk.com/oden6680' target = "_blank" rel = "noopener noreferrer">VK</a>
                        </li>
                    </ul>

                    <p className = 'menu-label'>Institution</p>
                    <ul className = 'menu-list'>
                        <li>
                            <a href ='http://www.nihon-u.ac.jp/' target = "_blank" rel = "noopener noreferrer">Nihon University</a>
                        </li>
                        <li>
                            <a href ='https://www.chs.nihon-u.ac.jp/' target = "_blank" rel = "noopener noreferrer">CHS</a>
                        </li>
                        <li>
                            <a href ='http://www.is.chs.nihon-u.ac.jp/' target = "_blank" rel = "noopener noreferrer">Information Science</a>
                        </li>
                        <li>
                            <a href ='https://vdslab.jp/' target = "_blank" rel = "noopener noreferrer">vdslab</a>
                        </li>
                    </ul>

                    <p className = 'menu-label'>Other</p>
                    <ul className = 'menu-list'>
                        <li>
                            <a href ='https://atcoder.jp/users/oden6680' target = "_blank" rel = "noopener noreferrer">AtCoder</a>
                        </li>
                        <li>
                            <a href ='https://github.com/oden6680' target = "_blank" rel = "noopener noreferrer">GitHub</a>
                        </li>
                    </ul>
                    </aside>
                </div>
            </div>
        </div>
    </section>
)

export default Profile