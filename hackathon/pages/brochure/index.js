import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../../styles/brochure.module.css'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { useRouter } from "next/router"



export default function NextJsCarousel() {

   const router = useRouter()

   return (
      <div>
         <h2>Catalog</h2>
         <div className={styles.voltar} onClick={() => router.push("/homepage")}>VOLTAR</div>
         <Carousel>
            <div>
               <Image
                  src="/1.png"
                  alt="Imagem1"
                  height={696}
                  width={414} />


            </div>
            <div>
               <Image
                  src="/2.png"
                  alt="Imagem2"
                  height={696}
                  width={414} />


            </div>
            <div>
               <Image
                  src="/3.png"
                  alt="Imagem3"
                  height={696}
                  width={414} />


            </div>
            <div>
               <Image
                  src="/4.png"
                  alt="Imagem4"
                  height={696}
                  width={414} />


            </div>
         </Carousel>
      </div>
   );

};