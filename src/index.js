import './style.css';
import {articles} from './articles';
import {home} from './home';
import {bio} from './bio';

let main = document.getElementsByTagName('main');
console.log(main[0].id);

if(main[0].id == 'main'){
    console.log('running home')
    home();
    articles();
} else if (main[0].id == 'article'){
    articles();
} else if (main[0].id == 'bio'){
    bio();
}
