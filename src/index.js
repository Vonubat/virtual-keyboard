'use strict';

/* DOM generator */
const DOM = `<div class="centralizer">
<p class="title">Virtual Keyboard</p>
<textarea
  class="body--textarea textarea"
  id="textarea"
  rows="5"
  cols="50"
  autofocus
></textarea>
<div class="body--keyboard keyboard" id="keyboard">
  <div class="keyboard--row row">
    <div class="keyboard--key key Backquote">
      <span class="rus hidden"
        ><span class="caseDown">ё</span
        ><span class="caseUp hidden">Ё</span
        ><span class="caps hidden">Ё</span
        ><span class="shiftCaps hidden">ё</span></span
      ><span class="eng"
        ><span class="caseDown">\`</span
        ><span class="caseUp hidden">~</span
        ><span class="caps hidden">\`</span
        ><span class="shiftCaps hidden">~</span></span
      >
    </div>
    <div class="keyboard--key key Digit1">
      <span class="rus hidden"
        ><span class="caseDown">1</span
        ><span class="caseUp hidden">!</span
        ><span class="caps hidden">1</span
        ><span class="shiftCaps hidden">!</span></span
      ><span class="eng"
        ><span class="caseDown">1</span
        ><span class="caseUp hidden">!</span
        ><span class="caps hidden">1</span
        ><span class="shiftCaps hidden">!</span></span
      >
    </div>
    <div class="keyboard--key key Digit2">
      <span class="rus hidden"
        ><span class="caseDown">2</span
        ><span class="caseUp hidden">"</span
        ><span class="caps hidden">2</span
        ><span class="shiftCaps hidden">"</span></span
      ><span class="eng"
        ><span class="caseDown">2</span
        ><span class="caseUp hidden">@</span
        ><span class="caps hidden">2</span
        ><span class="shiftCaps hidden">@</span></span
      >
    </div>
    <div class="keyboard--key key Digit3">
      <span class="rus hidden"
        ><span class="caseDown">3</span
        ><span class="caseUp hidden">№</span
        ><span class="caps hidden">3</span
        ><span class="shiftCaps hidden">№</span></span
      ><span class="eng"
        ><span class="caseDown">3</span
        ><span class="caseUp hidden">#</span
        ><span class="caps hidden">3</span
        ><span class="shiftCaps hidden">#</span></span
      >
    </div>
    <div class="keyboard--key key Digit4">
      <span class="rus hidden"
        ><span class="caseDown">4</span
        ><span class="caseUp hidden">;</span
        ><span class="caps hidden">4</span
        ><span class="shiftCaps hidden">;</span></span
      ><span class="eng"
        ><span class="caseDown">4</span
        ><span class="caseUp hidden">$</span
        ><span class="caps hidden">4</span
        ><span class="shiftCaps hidden">$</span></span
      >
    </div>
    <div class="keyboard--key key Digit5">
      <span class="rus hidden"
        ><span class="caseDown">5</span
        ><span class="caseUp hidden">%</span
        ><span class="caps hidden">5</span
        ><span class="shiftCaps hidden">%</span></span
      ><span class="eng"
        ><span class="caseDown">5</span
        ><span class="caseUp hidden">%</span
        ><span class="caps hidden">5</span
        ><span class="shiftCaps hidden">%</span></span
      >
    </div>
    <div class="keyboard--key key Digit6">
      <span class="rus hidden"
        ><span class="caseDown">6</span
        ><span class="caseUp hidden">:</span
        ><span class="caps hidden">6</span
        ><span class="shiftCaps hidden">:</span></span
      ><span class="eng"
        ><span class="caseDown">6</span
        ><span class="caseUp hidden">^</span
        ><span class="caps hidden">6</span
        ><span class="shiftCaps hidden">^</span></span
      >
    </div>
    <div class="keyboard--key key Digit7">
      <span class="rus hidden"
        ><span class="caseDown">7</span
        ><span class="caseUp hidden">?</span
        ><span class="caps hidden">7</span
        ><span class="shiftCaps hidden">?</span></span
      ><span class="eng"
        ><span class="caseDown">7</span
        ><span class="caseUp hidden">&amp;</span
        ><span class="caps hidden">7</span
        ><span class="shiftCaps hidden">&amp;</span></span
      >
    </div>
    <div class="keyboard--key key Digit8">
      <span class="rus hidden"
        ><span class="caseDown">8</span
        ><span class="caseUp hidden">*</span
        ><span class="caps hidden">8</span
        ><span class="shiftCaps hidden">*</span></span
      ><span class="eng"
        ><span class="caseDown">8</span
        ><span class="caseUp hidden">*</span
        ><span class="caps hidden">8</span
        ><span class="shiftCaps hidden">*</span></span
      >
    </div>
    <div class="keyboard--key key Digit9">
      <span class="rus hidden"
        ><span class="caseDown">9</span
        ><span class="caseUp hidden">(</span
        ><span class="caps hidden">9</span
        ><span class="shiftCaps hidden">(</span></span
      ><span class="eng"
        ><span class="caseDown">9</span
        ><span class="caseUp hidden">(</span
        ><span class="caps hidden">9</span
        ><span class="shiftCaps hidden">(</span></span
      >
    </div>
    <div class="keyboard--key key Digit0">
      <span class="rus hidden"
        ><span class="caseDown">0</span
        ><span class="caseUp hidden">)</span
        ><span class="caps hidden">0</span
        ><span class="shiftCaps hidden">)</span></span
      ><span class="eng"
        ><span class="caseDown">0</span
        ><span class="caseUp hidden">)</span
        ><span class="caps hidden">0</span
        ><span class="shiftCaps hidden">)</span></span
      >
    </div>
    <div class="keyboard--key key Minus">
      <span class="rus hidden"
        ><span class="caseDown">-</span
        ><span class="caseUp hidden">_</span
        ><span class="caps hidden">-</span
        ><span class="shiftCaps hidden">_</span></span
      ><span class="eng"
        ><span class="caseDown">-</span
        ><span class="caseUp hidden">_</span
        ><span class="caps hidden">-</span
        ><span class="shiftCaps hidden">_</span></span
      >
    </div>
    <div class="keyboard--key key Equal">
      <span class="rus hidden"
        ><span class="caseDown">=</span
        ><span class="caseUp hidden">+</span
        ><span class="caps hidden">=</span
        ><span class="shiftCaps hidden">+</span></span
      ><span class="eng"
        ><span class="caseDown">=</span
        ><span class="caseUp hidden">+</span
        ><span class="caps hidden">=</span
        ><span class="shiftCaps hidden">+</span></span
      >
    </div>
    <div class="keyboard--key key Backspace">
      <span class="rus hidden"
        ><span class="caseDown">Backspace</span
        ><span class="caseUp hidden">Backspace</span
        ><span class="caps hidden">Backspace</span
        ><span class="shiftCaps hidden">Backspace</span></span
      ><span class="eng"
        ><span class="caseDown">Backspace</span
        ><span class="caseUp hidden">Backspace</span
        ><span class="caps hidden">Backspace</span
        ><span class="shiftCaps hidden">Backspace</span></span
      >
    </div>
  </div>
  <div class="keyboard--row row">
    <div class="keyboard--key key Tab">
      <span class="rus hidden"
        ><span class="caseDown">Tab</span
        ><span class="caseUp hidden">Tab</span
        ><span class="caps hidden">Tab</span
        ><span class="shiftCaps hidden">Tab</span></span
      ><span class="eng"
        ><span class="caseDown">Tab</span
        ><span class="caseUp hidden">Tab</span
        ><span class="caps hidden">Tab</span
        ><span class="shiftCaps hidden">Tab</span></span
      >
    </div>
    <div class="keyboard--key key KeyQ">
      <span class="rus hidden"
        ><span class="caseDown">й</span
        ><span class="caseUp hidden">Й</span
        ><span class="caps hidden">Й</span
        ><span class="shiftCaps hidden">й</span></span
      ><span class="eng"
        ><span class="caseDown">q</span
        ><span class="caseUp hidden">Q</span
        ><span class="caps hidden">Q</span
        ><span class="shiftCaps hidden">q</span></span
      >
    </div>
    <div class="keyboard--key key KeyW">
      <span class="rus hidden"
        ><span class="caseDown">ц</span
        ><span class="caseUp hidden">Ц</span
        ><span class="caps hidden">Ц</span
        ><span class="shiftCaps hidden">ц</span></span
      ><span class="eng"
        ><span class="caseDown">w</span
        ><span class="caseUp hidden">W</span
        ><span class="caps hidden">W</span
        ><span class="shiftCaps hidden">w</span></span
      >
    </div>
    <div class="keyboard--key key KeyE">
      <span class="rus hidden"
        ><span class="caseDown">у</span
        ><span class="caseUp hidden">У</span
        ><span class="caps hidden">У</span
        ><span class="shiftCaps hidden">у</span></span
      ><span class="eng"
        ><span class="caseDown">e</span
        ><span class="caseUp hidden">E</span
        ><span class="caps hidden">E</span
        ><span class="shiftCaps hidden">e</span></span
      >
    </div>
    <div class="keyboard--key key KeyR">
      <span class="rus hidden"
        ><span class="caseDown">к</span
        ><span class="caseUp hidden">К</span
        ><span class="caps hidden">К</span
        ><span class="shiftCaps hidden">к</span></span
      ><span class="eng"
        ><span class="caseDown">r</span
        ><span class="caseUp hidden">R</span
        ><span class="caps hidden">R</span
        ><span class="shiftCaps hidden">r</span></span
      >
    </div>
    <div class="keyboard--key key KeyT">
      <span class="rus hidden"
        ><span class="caseDown">е</span
        ><span class="caseUp hidden">Е</span
        ><span class="caps hidden">Е</span
        ><span class="shiftCaps hidden">е</span></span
      ><span class="eng"
        ><span class="caseDown">t</span
        ><span class="caseUp hidden">T</span
        ><span class="caps hidden">T</span
        ><span class="shiftCaps hidden">t</span></span
      >
    </div>
    <div class="keyboard--key key KeyY">
      <span class="rus hidden"
        ><span class="caseDown">н</span
        ><span class="caseUp hidden">Н</span
        ><span class="caps hidden">Н</span
        ><span class="shiftCaps hidden">н</span></span
      ><span class="eng"
        ><span class="caseDown">y</span
        ><span class="caseUp hidden">Y</span
        ><span class="caps hidden">Y</span
        ><span class="shiftCaps hidden">y</span></span
      >
    </div>
    <div class="keyboard--key key KeyU">
      <span class="rus hidden"
        ><span class="caseDown">г</span
        ><span class="caseUp hidden">Г</span
        ><span class="caps hidden">Г</span
        ><span class="shiftCaps hidden">г</span></span
      ><span class="eng"
        ><span class="caseDown">u</span
        ><span class="caseUp hidden">U</span
        ><span class="caps hidden">U</span
        ><span class="shiftCaps hidden">u</span></span
      >
    </div>
    <div class="keyboard--key key KeyI">
      <span class="rus hidden"
        ><span class="caseDown">ш</span
        ><span class="caseUp hidden">Ш</span
        ><span class="caps hidden">Ш</span
        ><span class="shiftCaps hidden">ш</span></span
      ><span class="eng"
        ><span class="caseDown">i</span
        ><span class="caseUp hidden">I</span
        ><span class="caps hidden">I</span
        ><span class="shiftCaps hidden">i</span></span
      >
    </div>
    <div class="keyboard--key key KeyO">
      <span class="rus hidden"
        ><span class="caseDown">щ</span
        ><span class="caseUp hidden">Щ</span
        ><span class="caps hidden">Щ</span
        ><span class="shiftCaps hidden">щ</span></span
      ><span class="eng"
        ><span class="caseDown">o</span
        ><span class="caseUp hidden">O</span
        ><span class="caps hidden">O</span
        ><span class="shiftCaps hidden">o</span></span
      >
    </div>
    <div class="keyboard--key key KeyP">
      <span class="rus hidden"
        ><span class="caseDown">з</span
        ><span class="caseUp hidden">З</span
        ><span class="caps hidden">З</span
        ><span class="shiftCaps hidden">з</span></span
      ><span class="eng"
        ><span class="caseDown">p</span
        ><span class="caseUp hidden">P</span
        ><span class="caps hidden">P</span
        ><span class="shiftCaps hidden">p</span></span
      >
    </div>
    <div class="keyboard--key key BracketLeft">
      <span class="rus hidden"
        ><span class="caseDown">х</span
        ><span class="caseUp hidden">Х</span
        ><span class="caps hidden">Х</span
        ><span class="shiftCaps hidden">х</span></span
      ><span class="eng"
        ><span class="caseDown">[</span
        ><span class="caseUp hidden">{</span
        ><span class="caps hidden">[</span
        ><span class="shiftCaps hidden">{</span></span
      >
    </div>
    <div class="keyboard--key key BracketRight">
      <span class="rus hidden"
        ><span class="caseDown">ъ</span
        ><span class="caseUp hidden">Ъ</span
        ><span class="caps hidden">Ъ</span
        ><span class="shiftCaps hidden">ъ</span></span
      ><span class="eng"
        ><span class="caseDown">]</span
        ><span class="caseUp hidden">}</span
        ><span class="caps hidden">]</span
        ><span class="shiftCaps hidden">}</span></span
      >
    </div>
    <div class="keyboard--key key Backslash">
      <span class="rus hidden"
        ><span class="caseDown">\</span
        ><span class="caseUp hidden">/</span
        ><span class="caps hidden">\</span
        ><span class="shiftCaps hidden">/</span></span
      ><span class="eng"
        ><span class="caseDown">\</span
        ><span class="caseUp hidden">|</span
        ><span class="caps hidden">\</span
        ><span class="shiftCaps hidden">|</span></span
      >
    </div>
    <div class="keyboard--key key Delete">
      <span class="rus hidden"
        ><span class="caseDown">Del</span
        ><span class="caseUp hidden">Del</span
        ><span class="caps hidden">Del</span
        ><span class="shiftCaps hidden">Del</span></span
      ><span class="eng"
        ><span class="caseDown">Del</span
        ><span class="caseUp hidden">Del</span
        ><span class="caps hidden">Del</span
        ><span class="shiftCaps hidden">Del</span></span
      >
    </div>
  </div>
  <div class="keyboard--row row">
    <div class="keyboard--key key CapsLock">
      <span class="rus hidden"
        ><span class="caseDown">CapsLock</span
        ><span class="caseUp hidden">CapsLock</span
        ><span class="caps hidden">CapsLock</span
        ><span class="shiftCaps hidden">CapsLock</span></span
      ><span class="eng"
        ><span class="caseDown">CapsLock</span
        ><span class="caseUp hidden">CapsLock</span
        ><span class="caps hidden">CapsLock</span
        ><span class="shiftCaps hidden">CapsLock</span></span
      >
    </div>
    <div class="keyboard--key key KeyA">
      <span class="rus hidden"
        ><span class="caseDown">ф</span
        ><span class="caseUp hidden">Ф</span
        ><span class="caps hidden">Ф</span
        ><span class="shiftCaps hidden">ф</span></span
      ><span class="eng"
        ><span class="caseDown">a</span
        ><span class="caseUp hidden">A</span
        ><span class="caps hidden">A</span
        ><span class="shiftCaps hidden">a</span></span
      >
    </div>
    <div class="keyboard--key key KeyS">
      <span class="rus hidden"
        ><span class="caseDown">ы</span
        ><span class="caseUp hidden">Ы</span
        ><span class="caps hidden">Ы</span
        ><span class="shiftCaps hidden">ы</span></span
      ><span class="eng"
        ><span class="caseDown">s</span
        ><span class="caseUp hidden">S</span
        ><span class="caps hidden">S</span
        ><span class="shiftCaps hidden">s</span></span
      >
    </div>
    <div class="keyboard--key key KeyD">
      <span class="rus hidden"
        ><span class="caseDown">в</span
        ><span class="caseUp hidden">В</span
        ><span class="caps hidden">В</span
        ><span class="shiftCaps hidden">в</span></span
      ><span class="eng"
        ><span class="caseDown">d</span
        ><span class="caseUp hidden">D</span
        ><span class="caps hidden">D</span
        ><span class="shiftCaps hidden">d</span></span
      >
    </div>
    <div class="keyboard--key key KeyF">
      <span class="rus hidden"
        ><span class="caseDown">а</span
        ><span class="caseUp hidden">А</span
        ><span class="caps hidden">А</span
        ><span class="shiftCaps hidden">а</span></span
      ><span class="eng"
        ><span class="caseDown">f</span
        ><span class="caseUp hidden">F</span
        ><span class="caps hidden">F</span
        ><span class="shiftCaps hidden">f</span></span
      >
    </div>
    <div class="keyboard--key key KeyG">
      <span class="rus hidden"
        ><span class="caseDown">п</span
        ><span class="caseUp hidden">П</span
        ><span class="caps hidden">П</span
        ><span class="shiftCaps hidden">п</span></span
      ><span class="eng"
        ><span class="caseDown">g</span
        ><span class="caseUp hidden">G</span
        ><span class="caps hidden">G</span
        ><span class="shiftCaps hidden">g</span></span
      >
    </div>
    <div class="keyboard--key key KeyH">
      <span class="rus hidden"
        ><span class="caseDown">р</span
        ><span class="caseUp hidden">Р</span
        ><span class="caps hidden">Р</span
        ><span class="shiftCaps hidden">р</span></span
      ><span class="eng"
        ><span class="caseDown">h</span
        ><span class="caseUp hidden">H</span
        ><span class="caps hidden">H</span
        ><span class="shiftCaps hidden">h</span></span
      >
    </div>
    <div class="keyboard--key key KeyJ">
      <span class="rus hidden"
        ><span class="caseDown">о</span
        ><span class="caseUp hidden">О</span
        ><span class="caps hidden">О</span
        ><span class="shiftCaps hidden">о</span></span
      ><span class="eng"
        ><span class="caseDown">j</span
        ><span class="caseUp hidden">J</span
        ><span class="caps hidden">J</span
        ><span class="shiftCaps hidden">j</span></span
      >
    </div>
    <div class="keyboard--key key KeyK">
      <span class="rus hidden"
        ><span class="caseDown">л</span
        ><span class="caseUp hidden">Л</span
        ><span class="caps hidden">Л</span
        ><span class="shiftCaps hidden">л</span></span
      ><span class="eng"
        ><span class="caseDown">k</span
        ><span class="caseUp hidden">K</span
        ><span class="caps hidden">K</span
        ><span class="shiftCaps hidden">k</span></span
      >
    </div>
    <div class="keyboard--key key KeyL">
      <span class="rus hidden"
        ><span class="caseDown">д</span
        ><span class="caseUp hidden">Д</span
        ><span class="caps hidden">Д</span
        ><span class="shiftCaps hidden">д</span></span
      ><span class="eng"
        ><span class="caseDown">l</span
        ><span class="caseUp hidden">L</span
        ><span class="caps hidden">L</span
        ><span class="shiftCaps hidden">l</span></span
      >
    </div>
    <div class="keyboard--key key Semicolon">
      <span class="rus hidden"
        ><span class="caseDown">ж</span
        ><span class="caseUp hidden">Ж</span
        ><span class="caps hidden">Ж</span
        ><span class="shiftCaps hidden">ж</span></span
      ><span class="eng"
        ><span class="caseDown">;</span
        ><span class="caseUp hidden">:</span
        ><span class="caps hidden">;</span
        ><span class="shiftCaps hidden">:</span></span
      >
    </div>
    <div class="keyboard--key key Quote">
      <span class="rus hidden"
        ><span class="caseDown">э</span
        ><span class="caseUp hidden">Э</span
        ><span class="caps hidden">Э</span
        ><span class="shiftCaps hidden">э</span></span
      ><span class="eng"
        ><span class="caseDown">'</span
        ><span class="caseUp hidden">"</span
        ><span class="caps hidden">'</span
        ><span class="shiftCaps hidden">"</span></span
      >
    </div>
    <div class="keyboard--key key Enter">
      <span class="rus hidden"
        ><span class="caseDown">Enter</span
        ><span class="caseUp hidden">Enter</span
        ><span class="caps hidden">Enter</span
        ><span class="shiftCaps hidden">Enter</span></span
      ><span class="eng"
        ><span class="caseDown">Enter</span
        ><span class="caseUp hidden">Enter</span
        ><span class="caps hidden">Enter</span
        ><span class="shiftCaps hidden">Enter</span></span
      >
    </div>
  </div>
  <div class="keyboard--row row">
    <div class="keyboard--key key ShiftLeft">
      <span class="rus hidden"
        ><span class="caseDown">Shift</span
        ><span class="caseUp hidden">Shift</span
        ><span class="caps hidden">Shift</span
        ><span class="shiftCaps hidden">Shift</span></span
      ><span class="eng"
        ><span class="caseDown">Shift</span
        ><span class="caseUp hidden">Shift</span
        ><span class="caps hidden">Shift</span
        ><span class="shiftCaps hidden">Shift</span></span
      >
    </div>
    <div class="keyboard--key key KeyZ">
      <span class="rus hidden"
        ><span class="caseDown">я</span
        ><span class="caseUp hidden">Я</span
        ><span class="caps hidden">Я</span
        ><span class="shiftCaps hidden">я</span></span
      ><span class="eng"
        ><span class="caseDown">z</span
        ><span class="caseUp hidden">Z</span
        ><span class="caps hidden">Z</span
        ><span class="shiftCaps hidden">z</span></span
      >
    </div>
    <div class="keyboard--key key KeyX">
      <span class="rus hidden"
        ><span class="caseDown">ч</span
        ><span class="caseUp hidden">Ч</span
        ><span class="caps hidden">Ч</span
        ><span class="shiftCaps hidden">ч</span></span
      ><span class="eng"
        ><span class="caseDown">x</span
        ><span class="caseUp hidden">X</span
        ><span class="caps hidden">X</span
        ><span class="shiftCaps hidden">x</span></span
      >
    </div>
    <div class="keyboard--key key KeyC">
      <span class="rus hidden"
        ><span class="caseDown">с</span
        ><span class="caseUp hidden">С</span
        ><span class="caps hidden">С</span
        ><span class="shiftCaps hidden">с</span></span
      ><span class="eng"
        ><span class="caseDown">c</span
        ><span class="caseUp hidden">C</span
        ><span class="caps hidden">C</span
        ><span class="shiftCaps hidden">c</span></span
      >
    </div>
    <div class="keyboard--key key KeyV">
      <span class="rus hidden"
        ><span class="caseDown">м</span
        ><span class="caseUp hidden">М</span
        ><span class="caps hidden">М</span
        ><span class="shiftCaps hidden">м</span></span
      ><span class="eng"
        ><span class="caseDown">v</span
        ><span class="caseUp hidden">V</span
        ><span class="caps hidden">V</span
        ><span class="shiftCaps hidden">v</span></span
      >
    </div>
    <div class="keyboard--key key KeyB">
      <span class="rus hidden"
        ><span class="caseDown">и</span
        ><span class="caseUp hidden">И</span
        ><span class="caps hidden">И</span
        ><span class="shiftCaps hidden">и</span></span
      ><span class="eng"
        ><span class="caseDown">b</span
        ><span class="caseUp hidden">B</span
        ><span class="caps hidden">B</span
        ><span class="shiftCaps hidden">b</span></span
      >
    </div>
    <div class="keyboard--key key KeyN">
      <span class="rus hidden"
        ><span class="caseDown">т</span
        ><span class="caseUp hidden">Т</span
        ><span class="caps hidden">Т</span
        ><span class="shiftCaps hidden">т</span></span
      ><span class="eng"
        ><span class="caseDown">n</span
        ><span class="caseUp hidden">N</span
        ><span class="caps hidden">N</span
        ><span class="shiftCaps hidden">n</span></span
      >
    </div>
    <div class="keyboard--key key KeyM">
      <span class="rus hidden"
        ><span class="caseDown">ь</span
        ><span class="caseUp hidden">Ь</span
        ><span class="caps hidden">Ь</span
        ><span class="shiftCaps hidden">ь</span></span
      ><span class="eng"
        ><span class="caseDown">m</span
        ><span class="caseUp hidden">M</span
        ><span class="caps hidden">M</span
        ><span class="shiftCaps hidden">m</span></span
      >
    </div>
    <div class="keyboard--key key Comma">
      <span class="rus hidden"
        ><span class="caseDown">б</span
        ><span class="caseUp hidden">Б</span
        ><span class="caps hidden">Б</span
        ><span class="shiftCaps hidden">б</span></span
      ><span class="eng"
        ><span class="caseDown">,</span
        ><span class="caseUp hidden">&lt;</span
        ><span class="caps hidden">,</span
        ><span class="shiftCaps hidden">&lt;</span></span
      >
    </div>
    <div class="keyboard--key key Period">
      <span class="rus hidden"
        ><span class="caseDown">ю</span
        ><span class="caseUp hidden">Ю</span
        ><span class="caps hidden">Ю</span
        ><span class="shiftCaps hidden">ю</span></span
      ><span class="eng"
        ><span class="caseDown">.</span
        ><span class="caseUp hidden">&gt;</span
        ><span class="caps hidden">.</span
        ><span class="shiftCaps hidden">&gt;</span></span
      >
    </div>
    <div class="keyboard--key key Slash">
      <span class="rus hidden"
        ><span class="caseDown">.</span
        ><span class="caseUp hidden">,</span
        ><span class="caps hidden">.</span
        ><span class="shiftCaps hidden">,</span></span
      ><span class="eng"
        ><span class="caseDown">/</span
        ><span class="caseUp hidden">?</span
        ><span class="caps hidden">/</span
        ><span class="shiftCaps hidden">?</span></span
      >
    </div>
    <div class="keyboard--key key ArrowUp">
      <span class="rus hidden"
        ><span class="caseDown">▲</span
        ><span class="caseUp hidden">▲</span
        ><span class="caps hidden">▲</span
        ><span class="shiftCaps hidden">▲</span></span
      ><span class="eng"
        ><span class="caseDown">▲</span
        ><span class="caseUp hidden">▲</span
        ><span class="caps hidden">▲</span
        ><span class="shiftCaps hidden">▲</span></span
      >
    </div>
    <div class="keyboard--key key ShiftRight">
      <span class="rus hidden"
        ><span class="caseDown">Shift</span
        ><span class="caseUp hidden">Shift</span
        ><span class="caps hidden">Shift</span
        ><span class="shiftCaps hidden">Shift</span></span
      ><span class="eng"
        ><span class="caseDown">Shift</span
        ><span class="caseUp hidden">Shift</span
        ><span class="caps hidden">Shift</span
        ><span class="shiftCaps hidden">Shift</span></span
      >
    </div>
  </div>
  <div class="keyboard--row row">
    <div class="keyboard--key key ControlLeft">
      <span class="rus hidden"
        ><span class="caseDown">Ctrl</span
        ><span class="caseUp hidden">Ctrl</span
        ><span class="caps hidden">Ctrl</span
        ><span class="shiftCaps hidden">Ctrl</span></span
      ><span class="eng"
        ><span class="caseDown">Ctrl</span
        ><span class="caseUp hidden">Ctrl</span
        ><span class="caps hidden">Ctrl</span
        ><span class="shiftCaps hidden">Ctrl</span></span
      >
    </div>
    <div class="keyboard--key key MetaLeft">
      <span class="rus hidden"
        ><span class="caseDown">Win</span
        ><span class="caseUp hidden">Win</span
        ><span class="caps hidden">Win</span
        ><span class="shiftCaps hidden">Win</span></span
      ><span class="eng"
        ><span class="caseDown">Win</span
        ><span class="caseUp hidden">Win</span
        ><span class="caps hidden">Win</span
        ><span class="shiftCaps hidden">Win</span></span
      >
    </div>
    <div class="keyboard--key key AltLeft">
      <span class="rus hidden"
        ><span class="caseDown">Alt</span
        ><span class="caseUp hidden">Alt</span
        ><span class="caps hidden">Alt</span
        ><span class="shiftCaps hidden">Alt</span></span
      ><span class="eng"
        ><span class="caseDown">Alt</span
        ><span class="caseUp hidden">Alt</span
        ><span class="caps hidden">Alt</span
        ><span class="shiftCaps hidden">Alt</span></span
      >
    </div>
    <div class="keyboard--key key Space">
      <span class="rus hidden"
        ><span class="caseDown"> </span
        ><span class="caseUp hidden"> </span
        ><span class="caps hidden"> </span
        ><span class="shiftCaps hidden"> </span></span
      ><span class="eng"
        ><span class="caseDown"> </span
        ><span class="caseUp hidden"> </span
        ><span class="caps hidden"> </span
        ><span class="shiftCaps hidden"> </span
      ></span>
    </div>
    <div class="keyboard--key key AltRight">
      <span class="rus hidden"
        ><span class="caseDown">Alt</span
        ><span class="caseUp hidden">Alt</span
        ><span class="caps hidden">Alt</span
        ><span class="shiftCaps hidden">Alt</span></span
      ><span class="eng"
        ><span class="caseDown">Alt</span
        ><span class="caseUp hidden">Alt</span
        ><span class="caps hidden">Alt</span
        ><span class="shiftCaps hidden">Alt</span></span
      >
    </div>
    <div class="keyboard--key key ArrowLeft">
      <span class="rus hidden"
        ><span class="caseDown">◄</span
        ><span class="caseUp hidden">◄</span
        ><span class="caps hidden">◄</span
        ><span class="shiftCaps hidden">◄</span></span
      ><span class="eng"
        ><span class="caseDown">◄</span
        ><span class="caseUp hidden">◄</span
        ><span class="caps hidden">◄</span
        ><span class="shiftCaps hidden">◄</span></span
      >
    </div>
    <div class="keyboard--key key ArrowDown">
      <span class="rus hidden"
        ><span class="caseDown">▼</span
        ><span class="caseUp hidden">▼</span
        ><span class="caps hidden">▼</span
        ><span class="shiftCaps hidden">▼</span></span
      ><span class="eng"
        ><span class="caseDown">▼</span
        ><span class="caseUp hidden">▼</span
        ><span class="caps hidden">▼</span
        ><span class="shiftCaps hidden">▼</span></span
      >
    </div>
    <div class="keyboard--key key ArrowRight">
      <span class="rus hidden"
        ><span class="caseDown">►</span
        ><span class="caseUp hidden">►</span
        ><span class="caps hidden">►</span
        ><span class="shiftCaps hidden">►</span></span
      ><span class="eng"
        ><span class="caseDown">►</span
        ><span class="caseUp hidden">►</span
        ><span class="caps hidden">►</span
        ><span class="shiftCaps hidden">►</span></span
      >
    </div>
    <div class="keyboard--key key ControlRight">
      <span class="rus hidden"
        ><span class="caseDown">Ctrl</span
        ><span class="caseUp hidden">Ctrl</span
        ><span class="caps hidden">Ctrl</span
        ><span class="shiftCaps hidden">Ctrl</span></span
      ><span class="eng"
        ><span class="caseDown">Ctrl</span
        ><span class="caseUp hidden">Ctrl</span
        ><span class="caps hidden">Ctrl</span
        ><span class="shiftCaps hidden">Ctrl</span></span
      >
    </div>
  </div>
</div>
<p class="description">
  Клавиатура создана в операционной системе Windows
</p>
<p class="language">
  Для переключения языка комбинация: левые ctrl + alt
</p>
</div>`;

document.body.insertAdjacentHTML('beforeend', DOM);

const BODY = document.querySelector('body');
const TEXT_AREA = document.querySelector('#textarea');
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
  'Shift(0)': SHIFT_RIGHT, // some noncatch Bug
  'Meta(1)': META_LEFT,
  'Alt(1)': ALT_LEFT,
  'Alt(2)': ALT_RIGHT,
  'ArrowUp(0)': ARROW_UP,
  'ArrowDown(0)': ARROW_DOWN,
  'ArrowLeft(0)': ARROW_LEFT,
  'ArrowRight(0)': ARROW_RIGHT,
};

let keysPressedStorage = new Set();

let languageFlag = Number(
  sessionStorage.length === 1 ? 1 : sessionStorage.getItem('languageFlag')
);
// 1 — eng, 0 — rus

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
  event.preventDefault();
  return false;
}

document.addEventListener('keydown', defaultActions);

/* CapsLock Check*/

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

/* Shift Check*/

function shiftCheckDown(event) {
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

  // console.log(languageFlag);
  // console.log(sessionStorage);
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

function mouseDown(event) {
  let eventDown = new KeyboardEvent('keydown', {
    key: `${event.target.textContent}`,
  });

  //Delete case
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
    key: `${event.target.textContent}`,
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
// document.addEventListener('mouseout', mouseUp);

//suppress all JavaScript runtime error

window.onerror = function (message, url, lineNumber) {
  // console.log('test');
  return true; // prevents browser error messages
};
