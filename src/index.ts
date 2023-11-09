require('./index.scss')

type Btn = HTMLButtonElement
type Audio = HTMLAudioElement

const container = document.querySelector('.container') as HTMLElement
const volumeRange = document.getElementById('volumeRange') as HTMLInputElement

let activeAudio: unknown = null

container.addEventListener('click', (e: MouseEvent): void => {

  const button = (e.target as Btn).closest('button')
  const activeButton = document.querySelector('.active') as Btn

  if (button) {
    if (activeButton) {
      activeButton.classList.remove('active')
      activeButton.querySelector('.icon').classList.remove('hide')
      activeButton.querySelector('.pause').classList.add('hide')
      activeButton.querySelector('audio').pause()
      activeAudio = null
    }

    if (button !== activeButton) {
      const audio = button.querySelector('audio') as Audio

      if (audio.paused) {
        audio.play()
        activeAudio = audio
      } else {
        audio.pause()
      }

      button.classList.add('active')
      button.querySelector('.icon').classList.add('hide')
      button.querySelector('.pause').classList.remove('hide')
    }

    if ((e.target as Btn).classList.contains('summer')) {
      document.body.style.backgroundImage = 'url("summer-bg.jpg")'
    } else if ((e.target as Btn).classList.contains('rain')) {
      document.body.style.backgroundImage = 'url("rainy-bg.jpg")'
    } else if ((e.target as Btn).classList.contains('winter')) {
      document.body.style.backgroundImage = 'url("winter-bg.jpg")'
    }
  }
})

volumeRange.addEventListener('input', (): void => {
  if (activeAudio) {
    activeAudio.volume = volumeRange.value / 100
  }
})