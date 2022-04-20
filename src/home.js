import City from './images/city.jpeg';
import Yellow from './images/yellowHouse.jpeg';
import Fam from './images/family.png';

export const home = () => {
        let card1 = document.getElementById('1');
    const cardImg1 = new Image();
    cardImg1.src = City;
    cardImg1.alt = "Urban City Scape";
    card1.prepend(cardImg1);    
     
    let card2 = document.getElementById('2');
    const cardImg2 = new Image();
    cardImg2.src = Yellow;
    cardImg2.alt = "Yellow home";
    card2.prepend(cardImg2);  
    
    let card3 = document.getElementById('3');
    const cardImg3 = new Image();
    cardImg3.src = Fam;
    cardImg3.alt = "Family in kitchen";
    card3.prepend(cardImg3);  
}


