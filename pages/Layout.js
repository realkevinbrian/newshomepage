import Link from "next/link"
import Navbar from "../components/Navbar"
import styles from '../styles/Home.module.css'

function Layout({children}) {
  return (
    <div className={styles.main}>
        <Navbar/>
        {children}
        <div class="attribution">
    Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank"><a>Frontend Mentor</a></Link>. 
    Coded by <a href="https://www.linkedin.com/in/realkevinbrian">Kevin Brian</a>.
  </div>
    </div>
  )
}

export default Layout