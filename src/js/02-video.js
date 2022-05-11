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

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

