import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/noawards.module.css'
import { useRouter } from "next/router"
export default function tryAgain() {
    const router = useRouter()


  return (
    
    <div className={styles.divGrande}>
      <Head>
        <title>Mercearia da Bianca</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.logoCarro}><img  width="280px" height="90px" src="../logoOficial.png" alt='logo' /></div>
      <hr className={styles.hr}></hr>
        <div className={styles.titulos}>Não foi desta!</div>
        <div>
        <Image
                  src="/sad.png"
                  alt="Imagem1"
                  height={450}
                  width={300} />
        </div>
        <div className={styles.desc}>Podes voltar a tentar na próxima música.</div>
        <div></div>
        <div className={styles.voltar} onClick={() => router.push("/homepage")}>
        VOLTAR
        </div>
    </div>


  )
}