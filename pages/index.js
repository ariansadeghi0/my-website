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
      </Head>
      <main className={styles.main}>
        <NavBar/>
        <Hero/>
        <About/>
      </main>
    </>
  )
}
