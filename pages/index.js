import styles from '../styles/Home.module.css'
import {btn} from '../styles/Global.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to EverlastRP</h1>
      <p className={styles.text}>Get ready for your best GTA V Roleplay experience.</p>
      <Link href="https://discord.gg/bDtPpfm3n5">
        <a className={btn}>Join our discord</a>
      </Link>
      <div id="description">
        <h1>Why should you join us?</h1>
        <p>There are Multiple reasons to join ELRP, these include: <br></br></p>
        <ol>
          <li> Proffesional Roleplay</li>
          <li> Fun Community</li>
          <li> Serious Roleplay</li>
          <li> Fast Server</li>
          <p>And much more!</p>
        </ol>
      </div>
    </div>
  )
}
