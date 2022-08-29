import './style.css';
import {articles} from './articles';
import {home} from './home';
import {bio} from './bio';

let main = document.getElementsByTagName('main');

document.getElementById('menuIcon').addEventListener('click',openNav);
document.getElementById('navIcon').addEventListener('click',openNav);
document.getElementById('sideNav').style.display= 'none';
function openNav(){
    if(document.getElementById('sideNav').style.display == 'none'){
        document.getElementById('sideNav').style.display = 'flex';
    } else {
        document.getElementById('sideNav').style.display = 'none';
    }
}


if(main[0].id == 'main'){
    home();
    articles();
} else if (main[0].id == 'article-sec'){
    articles();
} else if (main[0].id == 'bio'){
    bio();
}

