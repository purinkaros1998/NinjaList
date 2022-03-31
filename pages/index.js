import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste iure autem quasi debitis delectus! Necessitatibus labore reprehenderit repudiandae sunt laborum quaerat, dignissimos quis illo nisi voluptates quisquam, quam veritatis quo!</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste iure autem quasi debitis delectus! Necessitatibus labore reprehenderit repudiandae sunt laborum quaerat, dignissimos quis illo nisi voluptates quisquam, quam veritatis quo!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
