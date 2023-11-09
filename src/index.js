"use strict";
require('./index.scss');
const container = document.querySelector('.container');
const volumeRange = document.getElementById('volumeRange');
let activeAudio = null;
container.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    const activeButton = document.querySelector('.active');
    if (button) {
        if (activeButton) {
            activeButton.classList.remove('active');
            activeButton.querySelector('.icon').classList.remove('hide');
            activeButton.querySelector('.pause').classList.add('hide');
            activeButton.querySelector('audio').pause();
            activeAudio = null;
        }
        if (button !== activeButton) {
            const audio = button.querySelector('audio');
            if (audio.paused) {
                audio.play();
                activeAudio = audio;
            }
            else {
                audio.pause();
            }
            button.classList.add('active');
            button.querySelector('.icon').classList.add('hide');
            button.querySelector('.pause').classList.remove('hide');
        }
        if (e.target.classList.contains('summer')) {
            document.body.style.backgroundImage = 'url("summer-bg.jpg")';
        }
        else if (e.target.classList.contains('rain')) {
            document.body.style.backgroundImage = 'url("rainy-bg.jpg")';
        }
        else if (e.target.classList.contains('winter')) {
            document.body.style.backgroundImage = 'url("winter-bg.jpg")';
        }
    }
});
volumeRange.addEventListener('input', () => {
    if (activeAudio) {
        activeAudio.volume = volumeRange.value / 100;
    }
});
