import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('iframe'));

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem('time', JSON.stringify(data.seconds))
}, 1000));
    

const pageInit = () => {
    let seconds=0;
     try {
         seconds = Number(JSON.parse(localStorage.getItem('time')))
     
     } catch (error) {
         console.log('Error parse'); 
         seconds = 0
    }; 

    player.setCurrentTime(seconds).then(function() {
        player.play().then(function() {
            console.log('the video was played');
        }).catch(function(error) {
            console.log(error);
        });
    });
}

addEventListener('DOMContentLoaded', () => {
    pageInit();
})



