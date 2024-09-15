import { LitElement, html, css } from 'lit';

   export class SliderComponent extends LitElement {
     static properties = {
       slides: { type: Array },
       currentIndex: { type: Number }
     };

     static styles = css`
       .slider {
         position: relative;
         width: 100%;
         overflow: hidden;
       }
       .slides {
         display: flex;
         transition: transform 0.5s ease;
       }
       .slide {
         min-width: 100%;
         box-sizing: border-box;
         height: 300px;
         width: 60px;

       }
       .controls {
         position: absolute;
         top: 50%;
         width: 100%;
         display: flex;
         justify-content: space-between;
         transform: translateY(-50%);
       }
       .control {
         background-color: rgba(0, 0, 0, 0.5);
         color: white;
         border: none;
         padding: 10px;
         cursor: pointer;
       }
     `;

     constructor() {
       super();
       this.slides = [
        '/manufacture_nastil.png',
        '/manufacture_products.png',
        '/manufacture_products2.jpg',
        '/manufacture_nastilDop.jpeg',
        '/manufacture_fastnerDop.jpeg',
        '/manufacture_nastil2Dop.jpeg',
        '/ourWork.jpg',
        '/ourWork1.jpg',
        '/ourWork2.jpg',
        '/ourWork3.jpeg',
        '/ourWork4.jpeg'


       ];
       this.currentIndex = 0;
     }

     render() {
       return html`
         <div class="slider">
           <div class="slides" style="transform: translateX(-${this.currentIndex * 100}%);">
             ${this.slides.map(slide =>
               html`
               <img class="slide" src="${slide}">`
             )}
           </div>
           <div class="controls">
             <button class="control" @click="${this.prevSlide}">←</button>
             <button class="control" @click="${this.nextSlide}">→</button>
           </div>
         </div>
       `;
     }

     prevSlide() {
       this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
     }

     nextSlide() {
       this.currentIndex = (this.currentIndex + 1) % this.slides.length;
     }
   }

   customElements.define('slider-component', SliderComponent);