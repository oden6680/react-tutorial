import React from "react";
import {Link} from 'react-router-dom';

import Japan from "../images/japan.png";
import Belarus from "../images/belarus.png";

const Blog = props => {
    return (
        <section className = "section">
            <div className = "container">
                <h1 className = "title">About</h1>
                <p className = "container is-size-4">
                This is a page of places I've traveled to, with my thoughts on them. I hope my articles will help you with your future travels.<br></br>
                On this page you can read my thoughts about the places I have travelled to. I hope, that my articles will help you to plan future journeys.
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
                                        <u><b><Link to = '/blog/hokkaido'>Hokkaido</Link></b></u>
                                        <Link to = '/blog/aomori'>Aomori</Link>
                                        <Link to = '/blog/akita'>Akita</Link>
                                        <Link to = '/blog/iwate'>Iwate</Link>
                                        <Link to = '/blog/yamagata'>Yamagata</Link>
                                        <Link to = '/blog/miyagi'>Miyagi</Link>
                                        <u><b><Link to = '/blog/fukushima'>Fukushima</Link></b></u>
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
                                        <Link to = '/blog/tochigi'>Tochigi</Link>
                                        <Link to = '/blog/gunma'>Gunma</Link>
                                        <Link to = '/blog/ibaraki'>Ibaraki</Link>
                                        <Link to = '/blog/saitama'>Saitama</Link>
                                        <u><b><Link to = '/blog/tokyo'>Tokyo</Link></b></u>
                                        <Link to = '/blog/chiba'>Chiba</Link>
                                        <Link to = '/blog/kanagawa'>Kanagawa</Link>
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
                                        <Link to = '/blog/nigata'>Nigata</Link>
                                        <u><b><Link to = '/blog/nagano'>Nagano</Link></b></u>
                                        <Link to = '/blog/yamanashi'>Yamanashi</Link>
                                        <u><b><Link to = '/blog/shizuoka'>Shizuoka</Link></b></u>
                                        <Link to = '/blog/toyama'>Toyama</Link>
                                        <Link to = '/blog/ishikawa'>Ishikawa</Link>
                                        <Link to = '/blog/fukui'>Fukui</Link>
                                        <Link to = '/blog/gifu'>Gifu</Link>
                                        <Link to = '/blog/aichi'>Aichi</Link>
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
                                        <Link to = '/blog/osaka'>Osaka</Link>
                                        <Link to = '/blog/kyoto'>Kyoto</Link>
                                        <Link to = '/blog/nara'>Nara</Link>
                                        <Link to = '/blog/mie'>Mie</Link>
                                        <Link to = '/blog/wakayama'>Wakayama</Link>
                                        <Link to = '/blog/shiga'>Shiga</Link>
                                        <Link to = '/blog/hyogo'>Hyogo</Link>
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
                                        <Link to = '/blog/totori'>Totori</Link>
                                        <Link to = '/blog/shimane'>Shimane</Link>
                                        <Link to = '/blog/hiroshima'>Hiroshima</Link>
                                        <Link to = '/blog/okayama'>Okayama</Link>
                                        <Link to = '/blog/yamaguchi'>Yamaguchi</Link>
                                        <Link to = '/blog/kagawa'>Kagawa</Link>
                                        <Link to = '/blog/tokushima'>Tokushima</Link>
                                        <Link to = '/blog/ehime'>Ehime</Link>
                                        <Link to = '/blog/kochi'>Kochi</Link>
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
                                        <Link to = '/blog/fukuoka'>Fukuoka</Link>
                                        <Link to = '/blog/nagasaki'>Nagasaki</Link>
                                        <Link to = '/blog/kagoshima'>Kagoshima</Link>
                                        <Link to = '/blog/kumamoto'>Kumamoto</Link>
                                        <Link to = '/blog/saga'>Saga</Link>
                                        <Link to = '/blog/oita'>Oita</Link>
                                        <Link to = '/blog/miyazaki'>Miyazaki</Link>
                                        <Link to = '/blog/okinawa'>Okinawa</Link>
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
                                        <u><b><Link to = '/blog/minsk'>Minsk</Link></b></u>
                                        <u><b><Link to = '/blog/grodno'>Grodno</Link></b></u>
                                        <u><b><Link to = '/blog/brest'>Brest</Link></b></u>
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
}

export default Blog