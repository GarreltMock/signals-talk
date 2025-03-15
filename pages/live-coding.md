---
layout: section
hide: true
---

# Let's Code

---
layout: editor
title: Live Coding
---

<div class="flex flex-col justify-center h-full items-center gap-4 rounded bg-gray bg-opacity-10">
  <button id="button1" class="custom-button">Click me</button>
  <p id="text1">Hallo EnterJS</p>
</div>

::right::

```js {monaco-run} {height:'80%',outputHeight:'20%',editorOptions:{fontSize:18,lineNumbers:true}}
const button = document.getElementById("button1")
const text = document.getElementById("text1")
button.addEventListener("click", () => {})
```

<!--
button.addEventListener("click", () => {
    console.log("Hallo")
    text.innerHTML = "Lets go"
})

Vielleicht sollte ich eine Art TDD machen.
Damit man klar von count und double und effect sprechen kann
-->

---
title: Ergebnis
hide: true
---

# Result

<<< @/snippets/signals.js
