import React, { useEffect, useState } from "react";
import pro from "../images/profile.jpeg";

const BasicInfomation = () =>{
    return (
        <div className = "content">
            <div className ="columns">
                <div className = "column is-half">
                    <img src = {pro} alt = "myface"></img>
                </div>
                <div className = "column is-half">
                    <ul>
                        <li>Name:織田尚哉(Naoya Oda)</li>
                        <li>Birthday:1999.06.12</li>
                        <li>age:21</li>
                        <li>From:福島(Fukushima)</li>
                        <li>Hoby:旅行(Trip)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const Skill = ({ data }) =>{
    if (data == null) {
        return (
          <div className="content">
            <p></p>
          </div>
        );
    }

    var list = []
    for(let i = 0; i < data.contents.length; i++){
        if (i%2 === 1){
            list.push(
                <section className = "section">
                    <div className = "columns">
                            <div className = "column is-half">
                                <div className = "title">{data.contents[i-1].name}</div>
                                <div className ="subtitle">
                                    Level:{"★".repeat(data.contents[i-1].level)}
                                    {"☆".repeat(5-data.contents[i-1].level)}
                                </div>
                                <div className = "has-text-centered">
                                    <img src = {data.contents[i-1].image.url} alt = "languagelogo"></img>
                                </div>
                                <p>{data.contents[i-1].explain}</p>
                            </div>

                            <div className = "column is-half">
                            <div className = "title">{data.contents[i].name}</div>
                                <div className ="subtitle">
                                    Level:{"★".repeat(data.contents[i].level)}
                                    {"☆".repeat(5-data.contents[i].level)}
                                </div>
                                <div className = "has-text-centered">
                                    <img src = {data.contents[i].image.url} alt = "languagelogo"></img>
                                </div>
                                <p>{data.contents[i].explain}</p>
                            </div>
                    </div>
                </section>
            );
        } else if (i === data.contents.length-1){
            list.push(
                <section className = "section">
                    <div className = "columns">
                        <div className = "column is-half">  
                            <div className = "title">{data.contents[i].name}</div>
                                <div className ="subtitle">
                                    Level:{"★".repeat(data.contents[i].level)}
                                    {"☆".repeat(5-data.contents[i].level)}
                                </div>
                            <div className = "has-text-centered">
                                <img src = {data.contents[i].image.url} alt = "languagelogo"></img>
                            </div>
                            <p>{data.contents[i].explain}</p>
                        </div>
                    </div>
                </section>
            );
        }
    }

    return (
        <div>
          {list}
        </div>
    );
}

const Profile = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://number-oden.microcms.io/api/v1/language",{
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
                <div className = "columns">

                    <div className = "column is-2">
                        <p className = 'menu-label'>menu</p>
                        <ul className = 'menu-list'>
                            <li><a href="#profile#basicinformation">Basic Information</a></li>
                            <li><a href="#profile#skills">Skills</a></li>
                        </ul>
                    </div>

                    <div className = 'column is-8'>
                        <h2 className = "title" id = "profile#basicinformation">Basic Information</h2>
                            <BasicInfomation />
                        <hr></hr>

                        <h2 className = "title" id = "profile#skills">Skills</h2>
                            <Skill data = { data }/>
                        <hr></hr>
                    </div>

                    <div className = 'column is-2'>
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
    );
}

export default Profile