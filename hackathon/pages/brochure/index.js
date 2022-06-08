import React, { Component } from 'react';
import styles from '../../styles/brochure.module.css'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { useRouter } from "next/router"



export default function NextJsCarousel() {

   const router = useRouter()

   return (
      <div className={styles.geral}>
         <div className={styles.logoVoltar}>
         <div className={styles.logoCarro}><img  width="280px" height="90px" src="../logoOficial.png" /></div>
         <div className={styles.voltar} onClick={() => router.push("/homepage")}>X</div>
      </div>
      <div>
         
         <Carousel  showArrows className={styles.carrossel}>
            <div>
               <Image
                  src="/1.png"
                  alt="Imagem1"
                  height={700}
                  width={414} />


            </div>
            <div>
               <Image
                  src="/2.png"
                  alt="Imagem2"
                  height={700}
                  width={414} />


            </div>
            <div>
               <Image
                  src="/3.png"
                  alt="Imagem3"
                  height={700}
                  width={414} />


            </div>
            <div>
               <Image
                  src="/4.png"
                  alt="Imagem4"
                  height={700}
                  width={414} />


            </div>
         </Carousel>
      </div>
   </div>
   );

};