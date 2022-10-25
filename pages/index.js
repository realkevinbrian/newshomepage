import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero";
import Posts from "../components/Posts"

export default function Home() {
  return (
    <div>
      <Hero/>
      <Posts/>
    </div>
  )
}
