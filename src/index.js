'use strict';
import DOM from './modules/DOM.js';
import keysPressedStorage from './modules/countPressedkeys.js';
import defaultActions from './modules/disableDefaultAction.js';

/* DOM generator */

document.body.insertAdjacentHTML('beforeend', DOM);

/* disable default action */

document.addEventListener('keydown', defaultActions);

/* variables */
// elements
const TEXT_AREA = document.querySelector('#textarea');
const KEYS_RUS = document.querySelectorAll('.rus');
const KEYS_ENG = document.querySelectorAll('.eng');
// internal elements of KEYS
const CASE_DOWN = document.querySelectorAll('.caseDown');
const CASE_UP = document.querySelectorAll('.caseUp');
const CAPS = document.querySelectorAll('.caps');
const SHIFT_CAPS = document.querySelectorAll('.shiftCaps');
// special keys
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
// special keys storage
let specialKeysStorage = {
  'Tab(0)': TAB,
  'Enter(0)': ENTER,
  'Delete(0)': DELETE,
  'Backspace(0)': BACKSPACE,
  'Control(1)': CTRL_LEFT,
  'Control(2)': CTRL_RIGHT,
  'Shift(1)': SHIFT_LEFT,
  'Shift(2)': SHIFT_RIGHT,
  'Shift(0)': SHIFT_RIGHT, // some noncatch Bug
  'Meta(1)': META_LEFT,
  'Alt(1)': ALT_LEFT,
  'Alt(2)': ALT_RIGHT,
  'ArrowUp(0)': ARROW_UP,
  'ArrowDown(0)': ARROW_DOWN,
  'ArrowLeft(0)': ARROW_LEFT,
  'ArrowRight(0)': ARROW_RIGHT,
};
// language flag (1 — eng, 0 — rus)
let languageFlag = Number(
  sessionStorage.length === 1 ? 1 : sessionStorage.getItem('languageFlag')
);
// CapsLock flag (0 — turn off, 1- turn on)
let capsLockFlag = 0; //

/* CapsLock Check */

function capsLockCheck(event) {
  if (event.key === 'CapsLock' && capsLockFlag === 0) {
    capsLockFlag = 1;
    CAPS_LOCK.classList.add('active');

    for (const item of CAPS) {
      item.classList.remove('hidden');
    }
    for (const item of CASE_DOWN) {
      item.classList.add('hidden');
    }
  } else if (event.key === 'CapsLock' && capsLockFlag === 1) {
    capsLockFlag = 0;
    CAPS_LOCK.classList.remove('active');

    for (const item of CAPS) {
      item.classList.add('hidden');
    }
    for (const item of CASE_DOWN) {
      item.classList.remove('hidden');
    }
  }
}

document.addEventListener('keydown', capsLockCheck);

/* Shift Check */

function shiftCheckDown(event) {
  // console.log(event);
  if (capsLockFlag === 1 && event.shiftKey) {
    for (const item of CAPS) {
      item.classList.add('hidden');
    }
    for (const item of CASE_DOWN) {
      item.classList.add('hidden');
    }
    for (const item of CASE_UP) {
      item.classList.add('hidden');
    }
    for (const item of SHIFT_CAPS) {
      item.classList.remove('hidden');
    }
  }

  if (capsLockFlag === 0 && event.shiftKey) {
    for (const item of SHIFT_CAPS) {
      item.classList.add('hidden');
    }
    for (const item of CASE_DOWN) {
      item.classList.add('hidden');
    }
    for (const item of CASE_UP) {
      item.classList.remove('hidden');
    }
  }
}

function shiftCheckUp(event) {
  // check double Shift
  if (
    SHIFT_LEFT.classList.contains('active') &&
    SHIFT_RIGHT.classList.contains('active')
  ) {
    SHIFT_LEFT.classList.remove('active');
    SHIFT_RIGHT.classList.remove('active');
  }

  if (capsLockFlag === 1 && !event.shiftKey) {
    for (const item of CAPS) {
      item.classList.remove('hidden');
    }
    for (const item of CASE_DOWN) {
      item.classList.add('hidden');
    }
    for (const item of CASE_UP) {
      item.classList.add('hidden');
    }
    for (const item of SHIFT_CAPS) {
      item.classList.add('hidden');
    }
  }

  if (capsLockFlag === 0 && !event.shiftKey) {
    for (const item of CASE_DOWN) {
      item.classList.remove('hidden');
    }
    for (const item of CASE_UP) {
      item.classList.add('hidden');
    }
    for (const item of SHIFT_CAPS) {
      item.classList.add('hidden');
    }
  }
}

document.addEventListener('keydown', shiftCheckDown);
document.addEventListener('keyup', shiftCheckUp);

/* switch language */
function switchLanguage() {
  if (languageFlag === 1) {
    for (const item of KEYS_RUS) {
      item.classList.add('hidden');
    }
    for (const item of KEYS_ENG) {
      item.classList.remove('hidden');
    }
  } else {
    for (const item of KEYS_RUS) {
      item.classList.remove('hidden');
    }
    for (const item of KEYS_ENG) {
      item.classList.add('hidden');
    }
  }

  if (
    keysPressedStorage.has('Control(1)') &&
    keysPressedStorage.has('Alt(1)')
  ) {
    if (languageFlag === 1) {
      sessionStorage.setItem('languageFlag', 0);
      languageFlag = 0;

      for (const item of KEYS_RUS) {
        item.classList.toggle('hidden');
      }
      for (const item of KEYS_ENG) {
        item.classList.toggle('hidden');
      }
    } else {
      sessionStorage.setItem('languageFlag', 1);
      languageFlag = 1;

      for (const item of KEYS_RUS) {
        item.classList.toggle('hidden');
      }
      for (const item of KEYS_ENG) {
        item.classList.toggle('hidden');
      }
    }
  }
}

switchLanguage(); // for check after loading/reloading page
document.addEventListener('keydown', switchLanguage);

/* visualization pressed keys + typing keys */

function pressedKey(event) {
  // special cases
  let keyID = `${event.key}(${event.location})`;
  // console.log(keyID);
  for (const item of Object.keys(specialKeysStorage)) {
    if (keyID === item) {
      // visualization
      specialKeysStorage[item].classList.add('active');
    }
  }

  if (keyID === 'Tab(0)') {
    // Tab realization
    let cursorPosition = TEXT_AREA.selectionStart;
    TEXT_AREA.value =
      TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) +
      '    ' +
      TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
    TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd = cursorPosition + 4;
  }

  if (keyID === 'Backspace(0)') {
    // Backspace realization
    let cursorPosition = TEXT_AREA.selectionStart;
    if (cursorPosition === 0) {
      TEXT_AREA.value = TEXT_AREA.value;
    } else {
      TEXT_AREA.value =
        TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart - 1) +
        TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
    }

    if (TEXT_AREA.selectionStart === 0 && TEXT_AREA.selectionEnd === 0) {
      TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd = 0;
    } else {
      TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd = cursorPosition - 1;
    }
  }

  if (keyID === 'Delete(0)') {
    // Delete realization
    let cursorPosition = TEXT_AREA.selectionStart;

    TEXT_AREA.value =
      TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) +
      TEXT_AREA.value.slice(TEXT_AREA.selectionStart + 1);

    TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd = cursorPosition;
  }

  if (keyID === 'Enter(0)') {
    // Enter realization
    let cursorPosition = TEXT_AREA.selectionStart;

    TEXT_AREA.value =
      TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) +
      '\n' +
      TEXT_AREA.value.slice(TEXT_AREA.selectionStart);

    TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd =
      TEXT_AREA.value.indexOf('\n', cursorPosition) + 1;
  }

  // Arrows realization
  switch (keyID) {
    case 'ArrowUp(0)':
      {
        let cursorPosition = TEXT_AREA.selectionStart;
        TEXT_AREA.value =
          TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) +
          '▲' +
          TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
        TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd = cursorPosition + 1;
      }
      break;
    case 'ArrowDown(0)':
      {
        let cursorPosition = TEXT_AREA.selectionStart;
        TEXT_AREA.value =
          TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) +
          '▼' +
          TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
        TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd = cursorPosition + 1;
      }
      break;
    case 'ArrowLeft(0)':
      {
        let cursorPosition = TEXT_AREA.selectionStart;
        TEXT_AREA.value =
          TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) +
          '◄' +
          TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
        TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd = cursorPosition + 1;
      }
      break;
    case 'ArrowRight(0)':
      {
        let cursorPosition = TEXT_AREA.selectionStart;
        TEXT_AREA.value =
          TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) +
          '►' +
          TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
        TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd = cursorPosition + 1;
      }
      break;

    default:
      break;
  }

  // common cases
  for (let i = 0; i < KEYS_ENG.length; i += 1) {
    for (let j = 0; j < KEYS_ENG[i].children.length; j++) {
      if (
        (event.key === KEYS_ENG[i].children[j].textContent ||
          event.key === KEYS_RUS[i].children[j].textContent) &&
        !event.key === KEYS_ENG[i].children[j].classList.contains('hidden') &&
        event.key !== 'CapsLock' &&
        !Object.values(specialKeysStorage).some(
          (elem) => KEYS_ENG[i].parentElement === elem
        )
      ) {
        KEYS_ENG[i].parentElement.classList.add('active'); // visualization

        if (!KEYS_ENG[i].classList.contains('hidden')) {
          // typing
          let cursorPosition = TEXT_AREA.selectionStart;
          TEXT_AREA.value =
            TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) +
            KEYS_ENG[i].children[j].textContent +
            TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
          TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd =
            cursorPosition + 1;
        }
        // console.log(KEYS_ENG[i].parentElement);
      }
    }
  }

  for (let i = 0; i < KEYS_RUS.length; i += 1) {
    for (let j = 0; j < KEYS_RUS[i].children.length; j++) {
      if (
        (event.key === KEYS_ENG[i].children[j].textContent ||
          event.key === KEYS_RUS[i].children[j].textContent) &&
        !event.key === KEYS_RUS[i].children[j].classList.contains('hidden') &&
        event.key !== 'CapsLock' &&
        !Object.values(specialKeysStorage).some(
          (elem) => KEYS_ENG[i].parentElement === elem
        )
      ) {
        KEYS_RUS[i].parentElement.classList.add('active'); // visualization

        if (!KEYS_RUS[i].classList.contains('hidden')) {
          // typing
          let cursorPosition = TEXT_AREA.selectionStart;
          TEXT_AREA.value =
            TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) +
            KEYS_RUS[i].children[j].textContent +
            TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
          TEXT_AREA.selectionStart = TEXT_AREA.selectionEnd = ++cursorPosition;
        }
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
        (event.key === KEYS_ENG[i].children[j].textContent ||
          event.key === KEYS_RUS[i].children[j].textContent) &&
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
        (event.key === KEYS_ENG[i].children[j].textContent ||
          event.key === KEYS_RUS[i].children[j].textContent) &&
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
  // console.log(event);
}

document.addEventListener('keydown', pressedKey);
document.addEventListener('keyup', unPressedKey);

/* mouse events */

let pressDownEvent; // save event.target.textContent on dawn

function mouseDown(event) {
  let eventDown = new KeyboardEvent('keydown', {
    key: `${event.target.textContent}`,
  });

  pressDownEvent = event.target.textContent;
  // Delete case
  if (eventDown.key === 'Del') {
    eventDown = new KeyboardEvent('keydown', {
      key: 'Delete',
    });
  }

  //pair keys cases (Ctrl, Alt, Meta, Shift)
  if (
    event.target.parentElement.parentElement.classList.contains('ControlLeft')
  ) {
    eventDown = new KeyboardEvent('keydown', {
      key: 'Control',
      location: '1',
    });
  } else if (
    event.target.parentElement.parentElement.classList.contains('ControlRight')
  ) {
    eventDown = new KeyboardEvent('keydown', {
      key: 'Control',
      location: '2',
    });
  } else if (eventDown.key === 'Win') {
    eventDown = new KeyboardEvent('keydown', {
      key: 'Meta',
      location: '1',
    });
  } else if (
    event.target.parentElement.parentElement.classList.contains('AltLeft')
  ) {
    eventDown = new KeyboardEvent('keydown', {
      key: 'Alt',
      location: '1',
    });
  } else if (
    event.target.parentElement.parentElement.classList.contains('AltRight')
  ) {
    eventDown = new KeyboardEvent('keydown', {
      key: 'Alt',
      location: '2',
    });
  } else if (
    event.target.parentElement.parentElement.classList.contains('ShiftLeft')
  ) {
    eventDown = new KeyboardEvent('keydown', {
      key: 'Shift',
      location: '1',
      shiftKey: true,
    });
  } else if (
    event.target.parentElement.parentElement.classList.contains('ShiftRight')
  ) {
    eventDown = new KeyboardEvent('keydown', {
      key: 'Shift',
      location: '2',
      shiftKey: true,
    });
  }

  //Arrows keys cases
  if (eventDown.key === '◄') {
    eventDown = new KeyboardEvent('keydown', {
      key: 'ArrowLeft',
    });
  } else if (eventDown.key === '►') {
    eventDown = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
    });
  } else if (eventDown.key === '▲') {
    eventDown = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
    });
  } else if (eventDown.key === '▼') {
    eventDown = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
    });
  }

  document.dispatchEvent(eventDown);
  // console.log(event.target.parentElement.parentElement.classList);
  // console.log(eventDown);
}

function mouseUp(event) {
  let eventUp = new KeyboardEvent('keyup', {
    key: `${pressDownEvent}`,
  });

  //Delete case
  if (eventUp.key === 'Del') {
    eventUp = new KeyboardEvent('keyup', {
      key: 'Delete',
    });
  }

  //pair keys cases (Ctrl, Alt, Meta, Shift)
  if (
    event.target.parentElement.parentElement.classList.contains('ControlLeft')
  ) {
    eventUp = new KeyboardEvent('keyup', {
      key: 'Control',
      location: '1',
    });
  } else if (
    event.target.parentElement.parentElement.classList.contains('ControlRight')
  ) {
    eventUp = new KeyboardEvent('keyup', {
      key: 'Control',
      location: '2',
    });
  } else if (eventUp.key === 'Win') {
    eventUp = new KeyboardEvent('keyup', {
      key: 'Meta',
      location: '1',
    });
  } else if (
    event.target.parentElement.parentElement.classList.contains('AltLeft')
  ) {
    eventUp = new KeyboardEvent('keyup', {
      key: 'Alt',
      location: '1',
    });
  } else if (
    event.target.parentElement.parentElement.classList.contains('AltRight')
  ) {
    eventUp = new KeyboardEvent('keyup', {
      key: 'Alt',
      location: '2',
    });
  } else if (
    event.target.parentElement.parentElement.classList.contains('ShiftLeft')
  ) {
    eventUp = new KeyboardEvent('keyup', {
      key: 'Shift',
      location: '1',
    });
  } else if (
    event.target.parentElement.parentElement.classList.contains('ShiftRight')
  ) {
    eventUp = new KeyboardEvent('keyup', {
      key: 'Shift',
      location: '2',
    });
  }

  //Arrows keys cases
  if (eventUp.key === '◄') {
    eventUp = new KeyboardEvent('keyup', {
      key: 'ArrowLeft',
    });
  } else if (eventUp.key === '►') {
    eventUp = new KeyboardEvent('keyup', {
      key: 'ArrowRight',
    });
  } else if (eventUp.key === '▲') {
    eventUp = new KeyboardEvent('keyup', {
      key: 'ArrowUp',
    });
  } else if (eventUp.key === '▼') {
    eventUp = new KeyboardEvent('keyup', {
      key: 'ArrowDown',
    });
  }

  TEXT_AREA.focus(); // there is bug(?), after using focus ShiftRight keyboardEvent always has location = 0 (according to specification it should be 2). For this reason I add in specialKeysStorage: 'Shift(0)': SHIFT_RIGHT,
  document.dispatchEvent(eventUp);
  // console.log(event.target.parentElement.parentElement.classList);
  // console.log(eventUp);
}

document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);

/* suppress all JavaScript runtime error */

window.onerror = function (message, url, lineNumber) {
  // console.log('test');
  return true; // prevents browser error messages
};
