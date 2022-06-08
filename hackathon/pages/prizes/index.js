import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/prize.module.css'
import { useRouter } from "next/router"
import { useState, useEffect } from 'react'



export default function Prize() {
    const router = useRouter()
    const [answers, setAnswers] = useState([])
    const [hasPlayed, setHasPlayed] = useState(false)

    useEffect(() => {
        console.log(window)
        if (window !== "undefined") {
            setHasPlayed(window.localStorage.getItem("hasPlayed"))
        }
    }, [])

    useEffect(() => {
        async function CallBack() {
            const res = await fetch(
                `../api/answersApi?minute=${new Date().getMinutes()
                }`, {
                method: "GET"
            })
            console.log("FRONTEND", res)
            const json = await res.json()
            setAnswers(json.a)
            console.log("Fim do UseEffect")
        }
        CallBack()
    }, [])

    async function checkAnswer(e) {
        
        const res = await fetch(
            `../api/checkAnswer?answer=${e}`,
            {
                method: "GET"
            })
        console.log("FRONTEND", res)
        const json = await res.json()
        console.log("TESTE", json.a)
        console.log("Fim do UseEffect")
        
        if (json.a) {
            router.push("/prizes/award")
            localStorage.setItem("hasPlayed", true)
            
        } else {
            router.push("/prizes/tryagain")
            localStorage.setItem("hasPlayed", true)
        }

        // e == json.a ? 
    }

    console.log(hasPlayed, "basbasnna")
    if (hasPlayed !== "true") {
        return (
            <div className={styles.mains}>
                <Head>
                    <title>Mercearia da Bianca</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                
         <div className={styles.logoVoltar}>
         <div className={styles.logoCarro}><img  width="280px" height="90px" src="../logoOficial.png" /></div>
         <div className={styles.voltar} onClick={() => router.push("/homepage")}>X</div>
      </div>
                <hr className={styles.hr}></hr>
                <div className={styles.divMae}>

                    <div className={styles.pergunta}>
                        ADIVINHA O SOM
                        <div className={styles.explicacao}>
                            Que som é este? Ouve a música da loja e adivinha quem a canta!
                            Aventura-te a ganhar prémios!
                        </div>

                    </div>



                    {answers.map(e => (<div onClick={() => checkAnswer(e)}
                        className={styles.opcoes}
                        key={e}
                    > {e}
                    </div>))}
                    


                </div>

            </div>
        )
    } else {
        return (
            <div className={styles.mains}>
                <Head>
                    <title>Mercearia da Bianca</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.logoVoltar}>
        <div className={styles.logoCarro}><img width="280px" height="90px" src="../logoOficial.png" /></div>
        <div className={styles.voltar} onClick={() => router.push("/homepage")}>X</div>
      </div>
      <hr className={styles.hr}></hr>
                <div className={styles.divMae}>

                    <div className={styles.pergunta}>
                        ADIVINHA O SOM
                        <div className={styles.explicacao}>
                            Podes voltar a tentar amanhã!
                        </div>

                    </div>

                </div>

            </div>
        )

    }


}
