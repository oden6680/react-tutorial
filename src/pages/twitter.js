import React from "react";
import { TwitterTimelineEmbed, TwitterFollowButton, TwitterMentionButton } from 'react-twitter-embed';

const Twitter = props => (
    <section className = "section ">
        <div className = "container">
            <h2 className = "title">Twitter</h2>
        </div>

        <nav className = "level">
            <div className = "level-item has-text-centered">
                <div>
                    <span className = "tag is-rounded is-success is-medium">
                        <p className = "heading">Tweets</p>
                    </span>
                        <p className = "title">27K</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <span className = "tag is-rounded is-success is-medium">
                        <p className = "heading">Following</p>
                    </span>
                        <p className = "title">680</p>
                </div>
            </div>
            <div className = "level-item has-text-centered">
                <div>
                    <span className = "tag is-rounded is-success is-medium">
                        <p className = "heading">Followers</p>
                    </span>
                        <p className = "title">791</p>
                </div>
            </div>
            <div className = "level-item has-text-centered">
                <div>
                    <span className = "tag is-rounded is-success is-medium">
                        <p className = "heading">Likes</p>
                    </span>
                        <p className = "title">18K</p>
                </div>
            </div>
        </nav>

        <div className = "tile is-ancestor">
            <div className = "tile is-4 is-vertical is-parent">
                <div className = "tile is-child box">
                    <p className = "title">Brank</p>
                </div>
                <div className = "tile is-child box">
                    <p className = "title">Brank</p>
                </div>
            </div>
            <div className = "tile is-parent">
                <div className = "tile is-child box">
                    <p className = "title">TimeLine</p>
                        <TwitterFollowButton screenName　=　{'Oden612'}/>
                        <TwitterMentionButton screenName = {'Oden612'}/>
                        <TwitterTimelineEmbed
                            sourceType　=　"profile"
                            screenName　=　"Oden612"
                            theme　=　"dark"
                            options　=　{{ width: 900, height: 1000 }}
                        />
                </div>
            </div>
        </div>
    </section>
)

export default Twitter