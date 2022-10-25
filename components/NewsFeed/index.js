import React from 'react'
import styles from "./styles.module.css"

const feeds = [
    {id : 1, title : "Hydrogen VS Electric Cars", body : "Will hydrogen-fueled cars ever catch up to EVs?"},
    {id : 2, title : "The Downsides of AI Artistry", body : "What are the possible adverse effects of on-demand AI image generation?"},
    {id : 3, title : "Is VC Funding Drying Up?", body : "Private funding by VC firms is down 50% YOY. We take a look at what that means."}
]

function NewsFeed() {
  return (
    <div className={styles.newsFeeds}>

        <div>
            <h1>News</h1>

            <div className={styles.newsFeeds__content}>
                {
                    feeds.map(feed => (
                        <div key={feed.id}  className={styles.newsFeeds__item}>
                        <h3>{feed.title}</h3>
                        <span>{feed.body}</span>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default NewsFeed