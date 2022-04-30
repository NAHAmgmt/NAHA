import './style.css';
import {articles} from './articles';
import {home} from './home';
import {bio} from './bio';

let main = document.getElementsByTagName('main');

if(main[0].id == 'main'){
    home();
    articles();
} else if (main[0].id == 'article'){
    articles();
} else if (main[0].id == 'bio'){
    bio();
}
