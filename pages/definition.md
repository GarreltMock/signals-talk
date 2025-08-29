---
layout: section
---

# What are Signals?

---
title: Definition
layout: quote
clicks: 3
---

<span class="text-gray">Preact <logos-preact/></span>

<h1 class="!bg-transparent">Signals are <span class="inline-block" :class="$clicks > 0 && 'text-orange bump'">reactive primitives</span> for managing application state</h1>

<div v-click="2" class="text-6" :class="$clicks > 2 && 'text-gray/60'">
    <span class="text-initial">Automatic state binding and dependency tracking</span> allows Signals to provide excellent ergonomics and productivity while eliminating the most common state management footguns.
</div>

<style>
.bump {
    animation: bump-anim 0.3s ease-in-out;

    @keyframes bump-anim {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
}
</style>

<!--
Quelle: https://preactjs.com/guide/v10/signals/

Signals are reactive primitives for managing application state.
What makes Signals unique is that state changes automatically update components and UI in the most efficient way possible. Automatic state binding and dependency tracking allows Signals to provide excellent ergonomics and productivity while eliminating the most common state management footguns.
Signals are effective in applications of any size, with ergonomics that speed up the development of small apps, and performance characteristics that ensure apps of any size are fast by default.
-->

<!--
Automatic state binding: Wir binden den state eines Signals automatisch an einen oder sogar mehrere andere: es muss kein aktives Subscribe gemacht werden
Dependency Tracking: Das Observable hat einen besseren Überblick über die Subscriber
-->

<!--
Ein “Primitive” ist eine einfache, aber leistungsstarke Einheit, auf der komplexere Mechanismen aufgebaut werden können.
Signals sind die elementarste Form eines reaktiven Zustands, ähnlich wie Variablen in einer Programmiersprache, aber mit eingebauter Reaktivität.
zb. Promises sind primitive Bausteine für asynchrone Abläufe.
-->

---
title: Example
---

# How does it look?

```js {all|3|4|5|7-9|all} { fontSize: $slidev.configs.myEditorFontSize }
import { signal, computed, effect } from "@preact/signals"

const count = signal(1)
const double = computed(() => count.value * 2)
effect(() => console.log("Effect: " + double.value))

console.log(double.value) // 2
count.value += 1 // Effect: 4
console.log(double.value) // 4
```

<div class="key-components flex gap-8 mt-8">
    <div v-click="1">signal</div>
    <div v-click="2">computed</div>
    <div v-click="3">effect</div>
</div>

<style>
.key-components > div {
    @apply px-6 py-2 rounded-xl text-7 b-2;
}
</style>

<!--
Alternative Syntax kurz erwähnen
-->

---
title: Solid Syntax
class: content-center
hide: true
---

# Alternative Syntax <logos-solidjs-icon />

```js {all|3|4|8|all} { fontSize: $slidev.configs.myEditorFontSize }
import { createSignal, createEffect } from "solid-js"

const [count, setCount] = createSignal(0)
const double = () => count() * 2
createEffect(() => console.log("Effect: " + double()))

console.log(double()) // 2
setCount(count() + 1) // Effect: 4
console.log(double()) // 4
```

<!--
TODO: Wollen wir das wirklich zeigen?
Ist so glaube ich kein valider SolidJS Code, weil er nicht im Kontext einer Komponente aufgerufen wird
-->
