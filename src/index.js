const KEYS = document.querySelectorAll('.keys');
const SPACE_KEY = document.querySelector('.space_key');
const SHIFT_LEFT = document.querySelector('.shift_left');
const SHIFT_RIGHT = document.querySelector('.shift_right');
const CAPS_LOCK_KEY = document.querySelector('.caps_lock_key');

for (let i = 0; i < KEYS.length; i += 1) {
  KEYS[i].setAttribute('keyname', KEYS[i].innerText);
  KEYS[i].setAttribute('lowerCaseName', KEYS[i].innerText.toLowerCase());
}

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < KEYS.length; i += 1) {
    if (
      e.key === KEYS[i].getAttribute('keyname') ||
      e.key === KEYS[i].getAttribute('lowerCaseName')
    ) {
      KEYS[i].classList.add('active');
    }
    if (e.code === 'Space') {
      SPACE_KEY.classList.add('active');
    }
    if (e.code === 'ShiftLeft') {
      SHIFT_RIGHT.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      SHIFT_LEFT.classList.remove('active');
    }
    if (e.code === 'CapsLock') {
      CAPS_LOCK_KEY.classList.toggle('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < KEYS.length; i += 1) {
    if (
      e.key === KEYS[i].getAttribute('keyname') ||
      e.key === KEYS[i].getAttribute('lowerCaseName')
    ) {
      KEYS[i].classList.remove('active');
      KEYS[i].classList.add('remove');
    }
    if (e.code === 'Space') {
      SPACE_KEY.classList.remove('active');
      SPACE_KEY.classList.add('remove');
    }
    if (e.code === 'ShiftLeft') {
      SHIFT_RIGHT.classList.remove('active');
      SHIFT_RIGHT.classList.remove('remove');
    }
    if (e.code === 'ShiftRight') {
      SHIFT_LEFT.classList.remove('active');
      SHIFT_LEFT.classList.remove('remove');
    }
    setTimeout(() => {
      KEYS[i].classList.remove('remove');
    }, 200);
  }
});
