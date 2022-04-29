import img from './images/icon.png';

export const bio = () => {
    let bio = document.getElementById('bios');
    const donatoImg = new Image();
    donatoImg.src = img;

    bio.prepend(donatoImg);
}