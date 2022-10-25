import Image from "next/image"
import retropc from "../../assets/images/image-retro-pcs.jpg";
import toplaptop from "../../assets/images/image-top-laptops.jpg";
import gaming from "../../assets/images/image-gaming-growth.jpg"
import styles from "./styles.module.css"

const posts = [
    {id : 1, image : retropc, title : "Reviving Retro PCs", body :  "What happens when old PCs are given modern upgrades?"},
    {id : 2, image : toplaptop, title : "Top 10 Laptops of 2022", body :  "Our best picks for various needs and budgets."},
    {id : 3, image : gaming, title : "The Growth of Gaming", body :  "How the pandemic has sparked fresh opportunities."}
]

function Post() {
  return (
    <div className={styles.postsWrapper}>
        {
            posts.map(post => (
            <div key={post.id} className={styles.postsWrapper__item}>
                <Image src={post.image} alt={post.title} objectPosition= "center" objectFit="cover" loading="lazy"
                className={styles.postsWrapper__item__media}
                />
                <div>
                    <span>{post.id < 9 ? "0" + post.id : post.id }</span>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default Post