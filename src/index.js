const KEYS = document.querySelectorAll('.key');
const KEYS_RUS = document.querySelectorAll('.rus');
const KEYS_ENG = document.querySelectorAll('.eng');

const CASE_DOWN = document.querySelectorAll('.caseDown');
const CASE_UP = document.querySelectorAll('.caseUp');
const CAPS = document.querySelectorAll('.caps');
const SHIFT_CAPS = document.querySelectorAll('.shiftCaps');

const CAPS_LOCK = document.querySelector('.CapsLock');

const TAB = document.querySelector('.Tab');
const ENTER = document.querySelector('.Enter');
const DELETE = document.querySelector('.Delete');
const BACKSPACE = document.querySelector('.Backspace');
const CTRL_LEFT = document.querySelector('.ControlLeft');
const CTRL_RIGHT = document.querySelector('.ControlRight');
const SHIFT_LEFT = document.querySelector('.ShiftLeft');
const SHIFT_RIGHT = document.querySelector('.ShiftRight');
const META_LEFT = document.querySelector('.MetaLeft');
const ALT_LEFT = document.querySelector('.AltLeft');
const ALT_RIGHT = document.querySelector('.AltRight');
const ARROW_UP = document.querySelector('.ArrowUp');
const ARROW_DOWN = document.querySelector('.ArrowDown');
const ARROW_LEFT = document.querySelector('.ArrowLeft');
const ARROW_RIGHT = document.querySelector('.ArrowRight');

let specialKeysStorage = {
  'Tab(0)': TAB,
  'Enter(0)': ENTER,
  'Delete(0)': DELETE,
  'Backspace(0)': BACKSPACE,
  'Control(1)': CTRL_LEFT,
  'Control(2)': CTRL_RIGHT,
  'Shift(1)': SHIFT_LEFT,
  'Shift(2)': SHIFT_RIGHT,
  'Meta(1)': META_LEFT,
  'Alt(1)': ALT_LEFT,
  'Alt(2)': ALT_RIGHT,
  'ArrowUp(0)': ARROW_UP,
  'ArrowDown(0)': ARROW_DOWN,
  'ArrowLeft(0)': ARROW_LEFT,
  'ArrowRight(0)': ARROW_RIGHT,
};

let keysPressedStorage = new Set();
let languageFlag = 1; // 1 — eng, 0 — rus
let capsLockFlag = 0; // 0 — turn off, 1- turn on

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
  let disabledKeysStorage = [
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
    `Tab(0)`,
    `ArrowUp(0)`,
    `ArrowDown(0)`,
    `ArrowLeft(0)`,
    `ArrowRight(0)`,
  ];

  for (const item of disabledKeysStorage) {
    if (item === keyID) {
      event.preventDefault();
      // console.log('event.preventDefault() is run');
    }
  }
}

window.addEventListener('keydown', defaultActions);

/* CapsLock Check*/

function capsLockCheck(event) {
  let modifierState = event.getModifierState('CapsLock');
  if (modifierState) {
    capsLockFlag = 1;
    CAPS_LOCK.classList.add('active');
  } else {
    capsLockFlag = 0;
    CAPS_LOCK.classList.remove('active');
  }
}

window.addEventListener('keydown', capsLockCheck);

/* switch language */

window.addEventListener('keydown', (event) => {
  if (
    keysPressedStorage.has('Control(1)') &&
    keysPressedStorage.has('Alt(1)')
  ) {
    if (languageFlag === 1) {
      languageFlag = 0;
      for (const item of KEYS_RUS) {
        item.classList.toggle('hidden');
      }
      for (const item of KEYS_ENG) {
        item.classList.toggle('hidden');
      }
    } else {
      languageFlag = 1;
      for (const item of KEYS_RUS) {
        item.classList.toggle('hidden');
      }
      for (const item of KEYS_ENG) {
        item.classList.toggle('hidden');
      }
    }
  }

  console.log(event);
  // console.log(languageFlag);
});

/* visualization pressed keys */

function pressedKey(event) {
  // special cases
  let keyID = `${event.key}(${event.location})`;
  for (const item of Object.keys(specialKeysStorage)) {
    if (keyID === item) {
      specialKeysStorage[item].classList.add('active');
    }
  }

  // common cases

  for (let i = 0; i < KEYS_ENG.length; i += 1) {
    for (let j = 0; j < KEYS_ENG[i].children.length; j++) {
      if (
        event.key === KEYS_ENG[i].children[j].textContent &&
        event.key !== 'CapsLock' &&
        !Object.values(specialKeysStorage).some(
          (elem) => KEYS_ENG[i].parentElement === elem
        )
      ) {
        KEYS_ENG[i].parentElement.classList.add('active');
        // console.log(KEYS_ENG[i].parentElement);
      }
    }
  }

  for (let i = 0; i < KEYS_RUS.length; i += 1) {
    for (let j = 0; j < KEYS_RUS[i].children.length; j++) {
      if (
        event.key === KEYS_RUS[i].children[j].textContent &&
        event.key !== 'CapsLock' &&
        !Object.values(specialKeysStorage).some(
          (elem) => KEYS_ENG[i].parentElement === elem
        )
      ) {
        KEYS_RUS[i].parentElement.classList.add('active');
        // console.log(KEYS_RUS[i].parentElement);
      }
    }
  }
}

function unPressedKey(event) {
  // special cases
  let keyID = `${event.key}(${event.location})`;
  for (const item of Object.keys(specialKeysStorage)) {
    if (keyID === item) {
      specialKeysStorage[item].classList.remove('active');
    }
  }

  // common cases

  for (let i = 0; i < KEYS_ENG.length; i += 1) {
    for (let j = 0; j < KEYS_ENG[i].children.length; j++) {
      if (
        event.key === KEYS_ENG[i].children[j].textContent &&
        event.key !== 'CapsLock' &&
        !Object.values(specialKeysStorage).some(
          (elem) => KEYS_ENG[i].parentElement === elem
        )
      ) {
        KEYS_ENG[i].parentElement.classList.remove('active');
        // console.log(KEYS_ENG[i].parentElement);
      }
    }
  }

  for (let i = 0; i < KEYS_RUS.length; i += 1) {
    for (let j = 0; j < KEYS_RUS[i].children.length; j++) {
      if (
        event.key === KEYS_RUS[i].children[j].textContent &&
        event.key !== 'CapsLock' &&
        !Object.values(specialKeysStorage).some(
          (elem) => KEYS_ENG[i].parentElement === elem
        )
      ) {
        KEYS_RUS[i].parentElement.classList.remove('active');
        // console.log(KEYS_RUS[i].parentElement);
      }
    }
  }
}

window.addEventListener('keydown', pressedKey);
window.addEventListener('keyup', unPressedKey);

/* visualization pressed keys */
