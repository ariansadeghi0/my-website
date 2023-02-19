import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar/NavBar'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Arian Sadeghi</title>
        <meta name="description" content="Arian Sadeghi's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <main className={styles.main}>
        <NavBar/>
        <Hero/>
        <About/>
      </main>
    </>
  )
}
