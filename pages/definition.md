---
layout: section
---

# Was sind Signals?

---
title: Definition
layout: quote
---

<span class="text-gray">Preact</span>

# Signals are <span v-mark.underline.orange>reactive primitives</span> for managing application state

<div v-click class="text-6" :class="$clicks > 2 && 'text-gray'">
    What makes Signals unique is that state changes automatically update components and UI in the most efficient way possible.<br/>
    <span class="text-white">Automatic state binding and dependency tracking</span>
    allows Signals to provide excellent ergonomics and productivity while eliminating the most common state management footguns.
</div>
<span v-click></span>

<!--
Quelle: https://preactjs.com/guide/v10/signals/

What makes Signals unique is that state changes automatically update components and UI in the most efficient way possible.
Signals are effective in applications of any size, with ergonomics that speed up the development of small apps, and performance characteristics that ensure apps of any size are fast by default.
-->

---
title: Beispiel
class: content-center
---

# Code Beispiel

Preact

```js
import { signal } from "@preact/signals"

const count = useSignal(1)
const double = useComputed(() => count.value * 2)

console.log(double.value) // 2
count.value += 1
console.log(double.value) // 4
```

> TODO: hier vielleicht nochmal den Code von der Definition vergleichen

---
title: Key Components
class: content-center text-center
---

# Key Components

<div class="key-components flex gap-8 justify-center">
    <div class="bg-red">signal</div>
    <div class="bg-yellow text-black">computed</div>
    <div class="bg-blue">effect</div>
</div>

<style>
.key-components > div {
    @apply px-6 py-2 rounded-xl text-10;
}
</style>
