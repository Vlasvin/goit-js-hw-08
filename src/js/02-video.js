import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const savedTime = localStorage.getItem('videoplayer-current-time');
const throttleTime = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', throttle(throttleTime, 1000));

player.setCurrentTime(savedTime || 0);
