import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.svg"
import styles from "./Navbar.module.css"
import closeButton from "../../assets/images/icon-menu-close.svg";
import openButton from "../../assets/images/icon-menu.svg";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return ( 
        <nav className={styles.navbar}>

            <div className={styles.navbar__logo}>
                <Image src={logo} alt="logomedia" objectFit="cover" loading="lazy"/>
            </div>

            <div className={styles.navbar__list + " " + `${!open ? styles.navbar__list__closeMenu : styles.navbar__list__openMenu}`}>

                <div className={styles.navbar__list__wrapper}>
                
                <div className={styles.navbar__action}>
                    <Image src={closeButton} alt="closeButton"
                    onClick={()=>setOpen(prev => prev ? false : true)}
                    />
                </div>
                
                <Link href={"/"}>
                    <a>Home</a>
                </Link>

                <Link href={"/home"}>
                    <a>New</a>
                </Link>

                <Link href={"/popular"}>
                    <a>Popular</a>
                </Link>

                <Link href={"/trending"}>
                    <a>Trending</a>
                </Link>

                <Link href={"/categories"}>
                    <a>Categories</a>
                </Link>

                </div>

            </div>

            {
            !open &&
            <div className={styles.navbar__action}>
                    <Image src={openButton} alt="openButton" 
                    onClick={()=>setOpen(prev => prev ? false : true)}
                    />
            </div>
            }
        </nav>
     );
}
 
export default Navbar;