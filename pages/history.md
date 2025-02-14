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
class: content-center flex justify-center items-center flex-col
---

> TODO: mach mal schöner

# Signals sind _nichts neues_

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
---

# Heute

Signals habe eine **massive adoption**

> TODO: animieren

<!-- Vue, Svelte, Angular, SolidJS, Preact, Lit, Javascript :o -->

<div class="*:h-[5em] *:w-[5em] flex justify-center mt-30 gap-4">
    <logos-vue />
    <logos-svelte-icon/>
    <logos-angular-icon/>
    <logos-solidjs-icon/>
    <logos-preact/>
    <logos-lit-icon/>
    <logos-javascript/>
</div>

<!--
Performance ist einfach so viel besser mit Signals + Fine-grained Updates
    V-DOM kann da nicht mithalten
    https://www.youtube.com/watch?v=kkUuaqDBSqA&t=5655s
-->
