import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('iframe'));

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem('time', JSON.stringify(data.seconds))
}, 1000));
    

const pageInit = () => {
     try {
        player.setCurrentTime(Number(JSON.parse(localStorage.getItem('time'))))
     } catch (error) {
        console.log('Error parse') 
     }    
}

addEventListener('DOMContentLoaded', () => {
    pageInit();
})



