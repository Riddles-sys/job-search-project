import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/Paradigmo_Logo.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paradigmo</title>
        <meta name="description" content="Job Search App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container__logo}>
        <Image
          unoptimized
          className={styles.logo}
          alt="Paradigmo Logo"
          src={logo}
          width="50"
          height="50"
        />
        <Link href="users">
          <button className={styles.login__button}>Sign In</button>
        </Link>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Find the job you <span className={styles.love}>love</span>
          <br /> with Paradigmo
        </h1>
        <p className={styles.description}>
          Your search begins{' '}
          <strong className={styles.description__link}>
            <Link href="jobs">Here</Link>
          </strong>
        </p>
      </main>
    </div>
  )
}
