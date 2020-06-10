import React from "react";
import Japan from "../images/japan.png";
import Belarus from "../images/belarus.png";

const Blog = props => (
    <section className = "section">
        <div className = "container">
        <h1 className = "title">About</h1>
        <p>
            This is a page of places I've traveled to, with my thoughts on them. I hope my articles will help you with your future travels.
        </p>
        <br></br>
        </div>

        <div className = "container">
        <h3 className = "title">Japan</h3>
            <div className = "columns">
                <div className = "column is-2">
                    <div className = "menu">
                        <ul className = "menu-list">
                            <li>Hokkaido/Tohoku
                                <ul>
                                    <li><a>Hokkaido</a></li>
                                    <li><a>Aomori</a></li>
                                    <li><a>Akita</a></li>
                                    <li><a>Iwate</a></li>
                                    <li><a>Yamagata</a></li>
                                    <li><a>Miyagi</a></li>
                                    <li><a>Fukushima</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className = "column is-2">
                    <div className = "menu">
                        <ul className = "menu-list">
                            <li>Kanto
                                <ul>
                                    <li><a>Tochigi</a></li>
                                    <li><a>Gunma</a></li>
                                    <li><a>Ibaraki</a></li>
                                    <li><a>Saitama</a></li>
                                    <li><a>Tokyo</a></li>
                                    <li><a>Chiba</a></li>
                                    <li><a>Kanagawa</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className = "column is-2">
                    <div className = "menu">
                        <ul className = "menu-list">
                            <li>Tyubu
                                <ul>
                                    <li><a>Nigata</a></li>
                                    <li><a>Nagano</a></li>
                                    <li><a>Yamanashi</a></li>
                                    <li><a>Shizuoka</a></li>
                                    <li><a>Toyama</a></li>
                                    <li><a>Ishikawa</a></li>
                                    <li><a>Fukui</a></li>
                                    <li><a>Gifu</a></li>
                                    <li><a>Aichi</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className = "column is-2">
                    <div className = "menu">
                        <ul className = "menu-list">
                            <li>Kansai
                                <ul>
                                    <li><a>Osaka</a></li>
                                    <li><a>Kyoto</a></li>
                                    <li><a>Nara</a></li>
                                    <li><a>Mie</a></li>
                                    <li><a>Wakayama</a></li>
                                    <li><a>Shiga</a></li>
                                    <li><a>Hyogo</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className = "column is-2">
                    <div className = "menu">
                        <ul className = "menu-list">
                            <li>Tyugoku/Shikoku
                                <ul>
                                    <li><a>Totori</a></li>
                                    <li><a>Shimane</a></li>
                                    <li><a>Hiroshima</a></li>
                                    <li><a>Okayama</a></li>
                                    <li><a>Yamaguchi</a></li>
                                    <li><a>Kagawa</a></li>
                                    <li><a>Tokushima</a></li>
                                    <li><a>Ehime</a></li>
                                    <li><a>Kochi</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className = "column is-2">
                    <div className = "menu">
                        <ul className = "menu-list">
                            <li>Kyushu/Okinawa
                                <ul>
                                    <li><a>Fukuoka</a></li>
                                    <li><a>Nagasaki</a></li>
                                    <li><a>Kagoshima</a></li>
                                    <li><a>Kumamoto</a></li>
                                    <li><a>Saga</a></li>
                                    <li><a>Oita</a></li>
                                    <li><a>Miyazaki</a></li>
                                    <li><a>Okinawa</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3 className = "title">Abroad</h3>
            <div className = "columns">
                <div className = "column is-2">
                    <div className = "menu">
                        <ul className = "menu-list">
                            <li>Belarus
                                <ul>
                                    <li><a>Minsk</a></li>
                                    <li><a>Grodna</a></li>
                                    <li><a>Brest</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className = "content has-text-centered">
                <h1 className = "title">MAP</h1>
                <h2 className = "subtitle has-text-danger-dark">Visited areas are painted in green</h2>
                <img src = {Japan} width = "50%" height = "50%" alt = "Japan"></img>
                <img src = {Belarus} width = "50%" height = "50%" alt = "Belarus"></img>
            </div>
        </div>
    </section>
)

export default Blog