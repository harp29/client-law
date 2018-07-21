const scss = require('../scss/style.scss');
import index from '../pug/index.pug';
import favicon from '../images/favicon.png';
import logoSymbol from '../images/logo-symbol.svg';
import danielaImg from '../images/daniela.jpg';
import navjotImg from '../images/navjot.jpg';
import poonamImg from '../images/poonam.jpg';
import IntroAnimations from './module/IntroAnimations';
import Menu from './module/Menu';

//Instaniate
function runOnLoad(){
    new IntroAnimations()
    .animateTimelines();
};

runOnLoad();

new Menu();

console.log('hi.... from index');


// if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ||
//     (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.platform))) {
//     window.location = 'about.html';
// }


