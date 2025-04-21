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
  <p class="text-6" id="text1">Hallo EnterJS</p>
</div>

::right::

```javascript {monaco-run} {height:'85%',outputHeight:'15%',editorOptions:{fontSize:18,lineNumbers:true}}
const button = document.getElementById("button1")
const text = document.getElementById("text1")
button.addEventListener("click", () => {})
```

---
title: Ergebnis
hide: true
---

# Result

<<< @/snippets/signals.js
