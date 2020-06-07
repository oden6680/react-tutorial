import React from "react";
import Japan from "../images/japan.png";
import Belarus from "../images/belarus.png";

const Blog = props => (
    <section className = "section">
        <div className = "container">
        <h1 className = "title">Japan</h1>
            <div className = "columns">
                <div className = "column is-2">
                    <div className = "menu">
                        <ul className = "menu-list">
                            <li><a>Hokkaido/Tohoku</a>
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
                            <li><a>Kanto</a>
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
                            <li><a>Tyubu</a>
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
                            <li><a>Kansai</a>
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
                            <li><a>Tyugoku/Shikoku</a>
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
                            <li><a>Kyushu/Okinawa</a>
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

            <h1 className = "title">Abroad</h1>
            <div className = "columns">
                <div className = "column is-2">
                    <div className = "menu">
                        <ul className = "menu-list">
                            <li><a>Belarus</a>
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
            <div className = 'content has-text-centered'>
                <img src = {Japan} width = "50%" height = "50%" alt = "Japan"></img>
                <img src = {Belarus} width = "50%" height = "50%" alt = "Belarus"></img>
            </div>
        </div>
    </section>
)

export default Blog