import img from './images/icon.png';
import vpImg from './images/vpImg.png';

export const bio = () => {
    let bio = document.getElementById('presBio');
    const donatoImg = new Image();
    donatoImg.src = img;

    bio.prepend(donatoImg);

    let vp = document.getElementById('vp');
    const viceImg = new Image();
    viceImg.src = vpImg;

    vp.prepend(viceImg);
}