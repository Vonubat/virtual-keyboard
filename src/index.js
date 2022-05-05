const KEYS = document.querySelectorAll('.key');
const KEYS_RUS = document.querySelectorAll('.rus');
const KEYS_ENG = document.querySelectorAll('.eng');
const CASE_DOWN = document.querySelectorAll('.caseDown');
const CASE_UP = document.querySelectorAll('.caseUp');
const CAPS = document.querySelectorAll('.caps');
const SHIFT_CAPS = document.querySelectorAll('.shiftCaps');
let keysPressedStorage = new Set();
let languageFlag = 1; // 1 — eng, 0 — rus

/* count pressed keys */

document.addEventListener('keydown', (event) => {
  keysPressedStorage.add(`${event.key}(${event.location})`);
  // console.log(keysPressed);
});

document.addEventListener('keyup', (event) => {
  keysPressedStorage.delete(`${event.key}(${event.location})`);
  // console.log(keysPressed);
});

/* disable default action */

function defaultActions(event) {
  // console.log(event);
  let keyID = `${event.key}(${event.location})`;
  let specialKeys = [
    `F1(0)`,
    `F2(0)`,
    `F3(0)`,
    `F4(0)`,
    `F5(0)`,
    `F6(0)`,
    `F7(0)`,
    `F8(0)`,
    `F9(0)`,
    `F10(0)`,
    `F11(0)`,
    `F12(0)`,
    `Control(1)`,
    `Control(2)`,
    `Alt(1)`,
    `Alt(2)`,
  ];

  for (const item of specialKeys) {
    if (item === keyID) {
      event.preventDefault();
      // console.log('event.preventDefault() is run');
    }
  }
}

window.addEventListener('keydown', defaultActions);

/* switch language */

window.addEventListener('keydown', (event) => {
  if (keysPressed.has('Control(1)') && keysPressed.has('Alt(1)')) {
    if (languageFlag === 1) {
      languageFlag = 0;
    } else {
      languageFlag = 1;
    }
  }

  console.log(event);
  // console.log(languageFlag);
});

/* visualization pressed keys */

function pressedKey(event) {
  if (languageFlag === 1) {
    for (let i = 0; i < KEYS_ENG.length; i += 1) {
      for (let j = 0; j < KEYS_ENG[i].children.length; j++) {
        if (event.key === KEYS_ENG[i].children[j].textContent) {
          KEYS_ENG[i].parentElement.classList.add('active');
          // console.log(KEYS_ENG[i].parentElement);
        }
      }
    }
  } else {
    for (let i = 0; i < KEYS_RUS.length; i += 1) {
      for (let j = 0; j < KEYS_RUS[i].children.length; j++) {
        if (event.key === KEYS_RUS[i].children[j].textContent) {
          KEYS_RUS[i].parentElement.classList.add('active');
          // console.log(KEYS_RUS[i].parentElement);
        }
      }
    }
  }
}

function unPressedKey(event) {
  if (languageFlag === 1) {
    for (let i = 0; i < KEYS_ENG.length; i += 1) {
      for (let j = 0; j < KEYS_ENG[i].children.length; j++) {
        if (event.key === KEYS_ENG[i].children[j].textContent) {
          KEYS_ENG[i].parentElement.classList.remove('active');
          // console.log(KEYS_ENG[i].parentElement);
        }
      }
    }
  } else {
    for (let i = 0; i < KEYS_RUS.length; i += 1) {
      for (let j = 0; j < KEYS_RUS[i].children.length; j++) {
        if (event.key === KEYS_RUS[i].children[j].textContent) {
          KEYS_RUS[i].parentElement.classList.remove('active');
          // console.log(KEYS_RUS[i].parentElement);
        }
      }
    }
  }
}

window.addEventListener('keydown', pressedKey);
window.addEventListener('keyup', unPressedKey);
