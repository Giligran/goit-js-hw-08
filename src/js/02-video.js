import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(STORAGE_KEY);

if (currentTime) {
  player.setCurrentTime(currentTime);
}

function onTimeUpdate({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}


player.on('timeupdate', throttle(onTimeUpdate, 1000));