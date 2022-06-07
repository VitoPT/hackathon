import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
              <h2>Catalog</h2>
              <Carousel>
                  <div>
                    <Image
                     src="/1.jpeg" 
                     alt="Imagem1" 
                     height={696} 
                     width={414} />
                      
  
                  </div>
                  <div>
                  <Image
                     src="/2.jpeg" 
                     alt="Imagem2" 
                     height={696} 
                     width={414} />
                
  
                  </div>
                  <div>
                  <Image
                     src="/3.jpeg" 
                     alt="Imagem3" 
                     height={696} 
                     width={414} />
                     
  
                  </div>
                  <div>
                  <Image
                     src="/4.jpeg" 
                     alt="Imagem4" 
                     height={696} 
                     width={414} />
                      
  
                  </div>
                  <div>
                  <Image
                     src="/5.jpeg" 
                     alt="Imagem5" 
                     height={696} 
                     width={414} />
                     
  
                  </div>
              </Carousel>
            </div>
        );
    }
};