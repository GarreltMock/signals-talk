---
layout: section
---

# Blick in die Vergangenheit

Die Geschichte der Reaktivität

---
title: Timeline
---

# Timeline

> TODO: animieren

<Timeline />

<!--
- 1969: [LANPAR](https://www.historyofinformation.com/detail.php?id=5478)
- 1985: Excel
- 2010: Angular, Barebone, Knockout
- 2013: React
- 2021: SolidJS v1 (Signals)
-->

<!--
Knockout.js (July 2010), Backbone.js (October 2010), Angular.js (October 2010)
Angular's Dirty Checking, Backbone's model-driven re-renders, and Knockout's fine-grained updates
-->

<!--
Knockout hatte schon fine-grained updates, aber es gabe viele foot-gun Probleme.
React hat dann einen anderen Approch genommen und anstatt fine-grained ein "wir renden alles neu" gemacht.
Signals haben es geschafft die fine-grained updates Probleme zu lösen.
-->

---
title: Signals nichts neues
class: flex justify-center flex-col relative
---

<div class="*:text-30 *:leading-[0.8em] *:font-bold">
    <div v-click>Signals</div>
    <div v-click>sind</div>
    <div v-click class="color-orange -mt-4 font-italic">nichts</div>
    <div v-click class="color-orange -mt-6">neues</div>
</div>

<div v-click class="absolute text-60 right-40 rotate-20">🤯</div>

---
title: Knockout.js Docu
layout: iframe-unscaled
url: https://learn.knockoutjs.com/#/?tutorial=intro
scale: 1.5
---

---
title: Knockout.js Intro
class: content-center
---

# Knockout Observables

````md magic-move
```js
const count = ko.observable(1)
const double = ko.pureComputed(() => count() * 2)
ko.computed(() => console.log("Effect: " + double()))

console.log(double()) // 2
count(count() + 1) // Effect: 4
console.log(double()) // 4
```

```js
const count = signal(1)
const double = computed(() => count.value * 2)
effect(() => console.log("Effect: " + double.value))

console.log(double.value) // 2
count.value += 1 // Effect: 4
console.log(double.value) // 4
```
````

<!--
Wollen wir hier wirlich den Vergleich ziehen?
-->

---
title: Heute
class: flex flex-col h-full
---

# Heute

Signals habe eine **massive adoption**

<!-- Vue, Svelte, Angular, SolidJS, Preact, Lit, Javascript :o -->

<div class="relative grow-1">
    <logos-vue          v-click class="absolute size-35 top-[5%]  left-[5%]"  v-motion :enter="{ x: 0, y: 0 }"  :initial="{ x: -80, y: -80 }" />
    <logos-svelte-icon  v-click class="absolute size-35 -top-[5%]  left-[52%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: -80 }" />
    <logos-angular-icon v-click class="absolute size-18 top-[70%] left-[70%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: 80, x: 80 }" />
    <logos-solidjs-icon v-click class="absolute size-45 top-[10%] left-[75%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ x: 80 }" />
    <logos-preact       v-click class="absolute size-28 top-[55%] left-[50%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: 80 }" />
    <logos-lit-icon     v-click class="absolute size-22 top-[55%] left-[12%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ x: -80, y: 80 }" />
    <logos-javascript   v-click class="absolute size-40 top-[22%] left-[27%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: -80 }" />
</div>

<!--
Performance ist einfach so viel besser mit Signals + Fine-grained Updates
    V-DOM kann da nicht mithalten
    https://www.youtube.com/watch?v=kkUuaqDBSqA&t=5655s
-->
