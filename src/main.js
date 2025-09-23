import './style.css'



//-----------------------SLIDER JS START----------------------------
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';
import slider5 from '../assets/slider5.jpg';
import slider6 from '../assets/slider6.jpg';

let images = [slider1, slider2, slider3, slider4, slider5, slider6];

let imgSlider; 
let count = 0;

function increase() {
  count++;
  if(count >= images.length) {
    count = 0;
  }
  imgSlider.src = images[count];
}

window.onload = function() {
  imgSlider = document.querySelector('.imgSlider'); // fixed
  setInterval(increase, 3000);
}
//----------------------SLIDER JS END------------------------------
/******************************HAMBURGER JS START************************* */


