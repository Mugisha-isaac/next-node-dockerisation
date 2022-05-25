import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div> home page </div>

       <Link href='/otherpage' style={{}}>
         <button style={{padding:'1rem', marginTop:'3rem'}}> go to other page</button>
         </Link>
    </div>
  )
}
