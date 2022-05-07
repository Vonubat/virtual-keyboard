import DOM from './modules/DOM.js';
import keysPressedStorage from './modules/countPressedkeys.js';
import defaultActions from './modules/disableDefaultAction.js';

/* DOM generator */

document.body.insertAdjacentHTML('beforeend', DOM);

/* disable default action */

document.addEventListener('keydown', defaultActions);

/* variables */
// elements
const CENTRALIZER = document.querySelector('.centralizer');
const KEYBOARD = document.querySelector('#keyboard');
const LANGUAGE_MSG = document.querySelector('.language');
const DESCRIPTION = document.querySelector('.description');
const TITLE = document.querySelector('.title');
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
const specialKeysStorage = {
  'Tab(0)': TAB,
  'Enter(0)': ENTER,
  'Delete(0)': DELETE,
  'Backspace(0)': BACKSPACE,
  'Control(1)': CTRL_LEFT,
  'Control(2)': CTRL_RIGHT,
  'Shift(1)': SHIFT_LEFT,
  'Shift(2)': SHIFT_RIGHT,
  'Shift(0)': SHIFT_RIGHT, // some Uncaught Bug
  'Meta(1)': META_LEFT,
  'Alt(1)': ALT_LEFT,
  'Alt(2)': ALT_RIGHT,
  'ArrowUp(0)': ARROW_UP,
  'ArrowDown(0)': ARROW_DOWN,
  'ArrowLeft(0)': ARROW_LEFT,
  'ArrowRight(0)': ARROW_RIGHT,
};
// arrows strings storage
const arrowsStorage = {
  'ArrowUp(0)': '▲',
  'ArrowDown(0)': '▼',
  'ArrowLeft(0)': '◄',
  'ArrowRight(0)': '►',
};
// language flag (1 — eng, 0 — rus)
let languageFlag = Number(
  sessionStorage.length === 1 ? 1 : sessionStorage.getItem('languageFlag'),
);
// CapsLock flag (0 — turn off, 1- turn on)
let capsLockFlag = 0; //
// Shift flag (0 — turn off, 1- turn on)
let shiftFlag = 0; //
// Audio object
const audioObj = new Audio('./assets/sound.mp3');

/* CapsLock Check */

function capsLockCheck(event) {
  if (event.key === 'CapsLock' && capsLockFlag === 0) {
    capsLockFlag = 1;
    CAPS_LOCK.classList.add('active');

    for (let i = 0; i < CAPS.length; i += 1) {
      CAPS[i].classList.remove('hidden');
    }
    for (let i = 0; i < CASE_DOWN.length; i += 1) {
      CASE_DOWN[i].classList.add('hidden');
    }
  } else if (event.key === 'CapsLock' && capsLockFlag === 1) {
    capsLockFlag = 0;
    CAPS_LOCK.classList.remove('active');

    for (let i = 0; i < CAPS.length; i += 1) {
      CAPS[i].classList.add('hidden');
    }
    for (let i = 0; i < CASE_DOWN.length; i += 1) {
      CASE_DOWN[i].classList.remove('hidden');
    }
  }
}

document.addEventListener('keydown', capsLockCheck);

/* Shift Check */

function shiftCheckDown(event) {
  // console.log(event);
  if (capsLockFlag === 1 && event.shiftKey) {
    shiftFlag = 1;
    for (let i = 0; i < CAPS.length; i += 1) {
      CAPS[i].classList.add('hidden');
    }
    for (let i = 0; i < CASE_DOWN.length; i += 1) {
      CASE_DOWN[i].classList.add('hidden');
    }
    for (let i = 0; i < CASE_UP.length; i += 1) {
      CASE_UP[i].classList.add('hidden');
    }
    for (let i = 0; i < SHIFT_CAPS.length; i += 1) {
      SHIFT_CAPS[i].classList.remove('hidden');
    }
  }

  if (capsLockFlag === 0 && event.shiftKey) {
    shiftFlag = 1;
    for (let i = 0; i < SHIFT_CAPS.length; i += 1) {
      SHIFT_CAPS[i].classList.add('hidden');
    }
    for (let i = 0; i < CASE_DOWN.length; i += 1) {
      CASE_DOWN[i].classList.add('hidden');
    }
    for (let i = 0; i < CAPS.length; i += 1) {
      CAPS[i].classList.add('hidden');
    }
    for (let i = 0; i < CASE_UP.length; i += 1) {
      CASE_UP[i].classList.remove('hidden');
    }
  }
}

function shiftCheckUp(event) {
  // check double Shift
  if (
    SHIFT_LEFT.classList.contains('active')
    && SHIFT_RIGHT.classList.contains('active')
  ) {
    SHIFT_LEFT.classList.remove('active');
    SHIFT_RIGHT.classList.remove('active');
  }

  if (capsLockFlag === 1 && !event.shiftKey) {
    shiftFlag = 0;
    for (let i = 0; i < CAPS.length; i += 1) {
      CAPS[i].classList.remove('hidden');
    }
    for (let i = 0; i < CASE_DOWN.length; i += 1) {
      CASE_DOWN[i].classList.add('hidden');
    }
    for (let i = 0; i < CASE_UP.length; i += 1) {
      CASE_UP[i].classList.add('hidden');
    }
    for (let i = 0; i < SHIFT_CAPS.length; i += 1) {
      SHIFT_CAPS[i].classList.add('hidden');
    }
  }

  if (capsLockFlag === 0 && !event.shiftKey) {
    shiftFlag = 0;
    for (let i = 0; i < CASE_DOWN.length; i += 1) {
      CASE_DOWN[i].classList.remove('hidden');
    }
    for (let i = 0; i < CASE_UP.length; i += 1) {
      CASE_UP[i].classList.add('hidden');
    }
    for (let i = 0; i < SHIFT_CAPS.length; i += 1) {
      SHIFT_CAPS[i].classList.add('hidden');
    }
    for (let i = 0; i < CAPS.length; i += 1) {
      CAPS[i].classList.add('hidden');
    }
  }
}

document.addEventListener('keydown', shiftCheckDown);
document.addEventListener('keyup', shiftCheckUp);

/* switch language */
function switchLanguage() {
  if (languageFlag === 1) {
    for (let i = 0; i < KEYS_RUS.length; i += 1) {
      KEYS_RUS[i].classList.add('hidden');
    }
    for (let i = 0; i < KEYS_ENG.length; i += 1) {
      KEYS_ENG[i].classList.remove('hidden');
    }
  } else {
    for (let i = 0; i < KEYS_RUS.length; i += 1) {
      KEYS_RUS[i].classList.remove('hidden');
    }
    for (let i = 0; i < KEYS_ENG.length; i += 1) {
      KEYS_ENG[i].classList.add('hidden');
    }
  }

  if (
    keysPressedStorage.has('Control(1)')
    && keysPressedStorage.has('Alt(1)')
  ) {
    if (languageFlag === 1) {
      sessionStorage.setItem('languageFlag', 0);
      languageFlag = 0;

      for (let i = 0; i < KEYS_RUS.length; i += 1) {
        KEYS_RUS[i].classList.toggle('hidden');
      }
      for (let i = 0; i < KEYS_ENG.length; i += 1) {
        KEYS_ENG[i].classList.toggle('hidden');
      }
    } else {
      sessionStorage.setItem('languageFlag', 1);
      languageFlag = 1;

      for (let i = 0; i < KEYS_RUS.length; i += 1) {
        KEYS_RUS[i].classList.toggle('hidden');
      }
      for (let i = 0; i < KEYS_ENG.length; i += 1) {
        KEYS_ENG[i].classList.toggle('hidden');
      }
    }
  }
}

switchLanguage(); // for check after loading/reloading page
document.addEventListener('keydown', switchLanguage);

/* visualization pressed keys + typing keys */

function pressedKey(event) {
  audioObj.play();
  // special cases
  const keyID = `${event.key}(${event.location})`;
  // console.log(keyID);
  for (let i = 0; i < Object.keys(specialKeysStorage).length; i += 1) {
    if (keyID === Object.keys(specialKeysStorage)[i]) {
      // visualization
      specialKeysStorage[Object.keys(specialKeysStorage)[i]].classList.add('active');
    }
  }

  if (keyID === 'Tab(0)') {
    // Tab realization
    const cursorPosition = TEXT_AREA.selectionStart;
    TEXT_AREA.value = `${TEXT_AREA.value.slice(
      0,
      TEXT_AREA.selectionStart,
    )}    ${TEXT_AREA.value.slice(TEXT_AREA.selectionStart)}`;
    TEXT_AREA.selectionStart = cursorPosition + 4;
    TEXT_AREA.selectionEnd = cursorPosition + 4;
  }

  if (keyID === 'Backspace(0)') {
    // Backspace realization
    const cursorPosition = TEXT_AREA.selectionStart;
    if (cursorPosition !== 0) {
      TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart - 1)
        + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
    }

    if (TEXT_AREA.selectionStart === 0 && TEXT_AREA.selectionEnd === 0) {
      TEXT_AREA.selectionStart = 0;
      TEXT_AREA.selectionEnd = 0;
    } else {
      TEXT_AREA.selectionStart = cursorPosition - 1;
      TEXT_AREA.selectionEnd = cursorPosition - 1;
    }
  }

  if (keyID === 'Delete(0)') {
    // Delete realization
    const cursorPosition = TEXT_AREA.selectionStart;

    TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart)
      + TEXT_AREA.value.slice(TEXT_AREA.selectionStart + 1);

    TEXT_AREA.selectionStart = cursorPosition;
    TEXT_AREA.selectionEnd = cursorPosition;
  }

  if (keyID === 'Enter(0)') {
    // Enter realization
    const cursorPosition = TEXT_AREA.selectionStart;

    TEXT_AREA.value = `${TEXT_AREA.value.slice(
      0,
      TEXT_AREA.selectionStart,
    )}\n${TEXT_AREA.value.slice(TEXT_AREA.selectionStart)}`;

    TEXT_AREA.selectionStart = TEXT_AREA.value.indexOf('\n', cursorPosition) + 1;
    TEXT_AREA.selectionEnd = TEXT_AREA.value.indexOf('\n', cursorPosition) + 1;
  }

  // Arrows realization
  if (
    keyID === 'ArrowUp(0)'
    || keyID === 'ArrowDown(0)'
    || keyID === 'ArrowLeft(0))'
    || keyID === 'ArrowRight(0)'
  ) {
    const cursorPosition = TEXT_AREA.selectionStart;
    TEXT_AREA.value = `${TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart)}${
      arrowsStorage[keyID]
    }${TEXT_AREA.value.slice(TEXT_AREA.selectionStart)}`;
    TEXT_AREA.selectionStart = cursorPosition + 1;
    TEXT_AREA.selectionEnd = cursorPosition + 1;
  }

  // common cases
  function keyFlag(currentEvent) {
    // check status of Shift and CapsLock
    let key;
    if (
      capsLockFlag === 1
      && shiftFlag === 0
      && currentEvent.key !== 'CapsLock'
    ) {
      key = currentEvent.key.toUpperCase();
    }
    if (
      capsLockFlag === 0
      && shiftFlag === 0
      && currentEvent.key !== 'CapsLock'
    ) {
      key = currentEvent.key.toLowerCase();
    }
    if (
      capsLockFlag === 1
      && shiftFlag === 1
      && currentEvent.key !== 'CapsLock'
    ) {
      key = currentEvent.key.toLowerCase();
    }
    if (
      capsLockFlag === 0
      && shiftFlag === 1
      && currentEvent.key !== 'CapsLock'
    ) {
      key = currentEvent.key.toUpperCase();
    }
    return key;
  }

  function keysEng(inputKey) {
    for (let i = 0; i < KEYS_ENG.length; i += 1) {
      for (let j = 0; j < KEYS_ENG[i].children.length; j += 1) {
        if (
          (inputKey === KEYS_ENG[i].children[j].textContent
            || inputKey === KEYS_RUS[i].children[j].textContent)
          && !inputKey === KEYS_ENG[i].children[j].classList.contains('hidden')
          && !Object.values(specialKeysStorage).some(
            (elem) => KEYS_ENG[i].parentElement === elem,
          )
        ) {
          KEYS_ENG[i].parentElement.classList.add('active'); // visualization

          if (!KEYS_ENG[i].classList.contains('hidden')) {
            // typing;
            const cursorPosition = TEXT_AREA.selectionStart;
            TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart)
              + KEYS_ENG[i].children[j].textContent
              + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
            TEXT_AREA.selectionStart = cursorPosition + 1;
            TEXT_AREA.selectionEnd = cursorPosition + 1;
            return true;
          }
        }
      }
    }

    return true;
  }

  function keysRus(inputKey) {
    for (let i = 0; i < KEYS_RUS.length; i += 1) {
      for (let j = 0; j < KEYS_RUS[i].children.length; j += 1) {
        if (
          (inputKey === KEYS_RUS[i].children[j].textContent
            || inputKey === KEYS_ENG[i].children[j].textContent)
          && !inputKey === KEYS_RUS[i].children[j].classList.contains('hidden')
          && !Object.values(specialKeysStorage).some(
            (elem) => KEYS_ENG[i].parentElement === elem,
          )
        ) {
          KEYS_RUS[i].parentElement.classList.add('active'); // visualization

          if (!KEYS_RUS[i].classList.contains('hidden')) {
            // typing
            const cursorPosition = TEXT_AREA.selectionStart;
            TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart)
              + KEYS_RUS[i].children[j].textContent
              + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
            TEXT_AREA.selectionStart = cursorPosition + 1;
            TEXT_AREA.selectionEnd = cursorPosition + 1;
            return true;
          }
        }
      }
    }
    return true;
  }

  if (languageFlag === 1) {
    keysEng(keyFlag(event));
  } else keysRus(keyFlag(event));

  // console.log(event);
  // console.log(languageFlag);
}

function unPressedKey(event) {
  // special cases
  const keyID = `${event.key}(${event.location})`;
  for (let i = 0; i < Object.keys(specialKeysStorage).length; i += 1) {
    if (keyID === Object.keys(specialKeysStorage)[i]) {
      // visualization
      specialKeysStorage[Object.keys(specialKeysStorage)[i]].classList.remove(
        'active',
      );
    }
  }

  // common cases
  for (let i = 0; i < KEYS_ENG.length; i += 1) {
    for (let j = 0; j < KEYS_ENG[i].children.length; j += 1) {
      if (
        (event.key === KEYS_ENG[i].children[j].textContent
          || event.key === KEYS_RUS[i].children[j].textContent)
        && event.key !== 'CapsLock'
        && !Object.values(specialKeysStorage).some(
          (elem) => KEYS_ENG[i].parentElement === elem,
        )
      ) {
        KEYS_ENG[i].parentElement.classList.remove('active');
      }
    }
  }

  for (let i = 0; i < KEYS_RUS.length; i += 1) {
    for (let j = 0; j < KEYS_RUS[i].children.length; j += 1) {
      if (
        (event.key === KEYS_ENG[i].children[j].textContent
          || event.key === KEYS_RUS[i].children[j].textContent)
        && event.key !== 'CapsLock'
        && !Object.values(specialKeysStorage).some(
          (elem) => KEYS_ENG[i].parentElement === elem,
        )
      ) {
        KEYS_RUS[i].parentElement.classList.remove('active');
      }
    }
  }
}

document.addEventListener('keydown', pressedKey);
document.addEventListener('keyup', unPressedKey);

/* mouse events */

let pressDownEvent; // save event.target.textContent on dawn

function mouseDown(event) {
  // console.log(event.target);
  if (event.target === CENTRALIZER || event.target === KEYBOARD
     || event.target === LANGUAGE_MSG || event.target === DESCRIPTION
     || event.target === TEXT_AREA || event.target === TITLE) {
    return true;
  }

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

  // pair keys cases (Ctrl, Alt, Meta, Shift)
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

  // Arrows keys cases
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
  return true;
}

function mouseUp(event) {
  let eventUp = new KeyboardEvent('keyup', {
    key: `${pressDownEvent}`,
  });

  // Delete case
  if (eventUp.key === 'Del') {
    eventUp = new KeyboardEvent('keyup', {
      key: 'Delete',
    });
  }

  // pair keys cases (Ctrl, Alt, Meta, Shift)
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

  // Arrows keys cases
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

  TEXT_AREA.focus();
  // there is bug(?) with TEXT_AREA.focus();
  // after using focus ShiftRight keyboardEvent always has location = 0
  // (according to specification it should be 2).
  // For this reason I add in specialKeysStorage: 'Shift(0)': SHIFT_RIGHT,
  document.dispatchEvent(eventUp);
  // console.log(event.target.parentElement.parentElement.classList);
  // console.log(eventUp);
}

document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);

/* suppress all JavaScript runtime error */

window.onerror = function stopError(/* message, url, lineNumber */) {
  // console.log('test');
  return true; // prevents browser error messages
};
