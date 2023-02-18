import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

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
        <div className={styles.hero}>
          <Image className={styles.hero_image}
            src="/my-photo.jpg"
            alt="A photo of Arian"
            width={1920}
            height={1280}
          />
        </div>
      </main>
    </>
  )
}
