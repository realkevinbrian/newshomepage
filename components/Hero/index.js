import Image from "next/image"
import Link from "next/link"
import styles from "./style.module.css"
import DeskBanner from "../../assets/images/image-web-3-desktop.jpg"
import NewsFeed from "../NewsFeed"

function Hero() {
  return (
    <div className={styles.heroWrapper}>
        <div className={styles.heroWrapper__content}>
          <div className={styles.heroWrapper__banner}>
            <Image src={DeskBanner} alt="media" objectFit="cover" loading="lazy"/>
          </div>
          <div className={styles.heroWrapper__text}>
            <h2>The Bright Future of Web 3.0</h2>
            <div>
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                </p>

                <Link href={"/readmore"}>
                    <a>READ MORE</a>
                </Link>
            </div>
          </div>
        </div>
        <NewsFeed/>
    </div>
  )
}

export default Hero