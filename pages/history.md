---
layout: section
---

# Blick in die Vergangenheit

Die Geschichte der Reaktivität

---
title: Timeline
---

# Was ist passiert

<Timeline />

<!--
- 1969: [LANPAR](https://www.historyofinformation.com/detail.php?id=5478)
- 1985: Excel
- 2010: Angular, Barebone, Knockout
- 2013: React
- 2021: SolidJS v1 (Signals)
-->

<!--
Framework	Reaktivitätsmodell	            Update-Strategie	        Vorteil	                    Nachteil
Knockout.js	Fine-grained Observables	    Direkte DOM-Updates	        Präzise Updates	            Veraltet, bei großen Projekten sperrig
Backbone.js	Event-getrieben (Model-Events)	Manuelle Updates	        Kontrolle über Updates	    Viel Boilerplate
AngularJS	Dirty Checking (Digest Cycle)	Überprüft alle Bindungen	Einfaches Data Binding	    Performance bei vielen Watchern
React	    Virtual DOM + Komplett-Render	VDOM-Diffing + Patches	    Einfache Denkweise	        Overhead bei vielen kleinen Updates
Signals	    Fine-grained Dependencies	    Direkte Ziel-Updates	    Extrem schnell & präzise	Neues Konzept, Lernkurve
-->

<!--
LANPAR = LANguage for Programming Arrays at Random

Knockout.js (July 2010), Backbone.js (October 2010), Angular.js (October 2010)  
Angular's Dirty Checking            = viele unübersichtliche Updates, schlechte Performance  
Backbone's model-driven re-renders  = sehr manuelles Update Handling  
Knockout's fine-grained updates     = unübersichtliche Updates und Zyklen  
Alle waren nicht sehr Entwickler-freundlich. Gerade bei großen Applikationen

React hat dann einen anderen Approch genommen mit VDOM + "wir renden alles neu".
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

<div v-click class="absolute right-40 rotate-20 flex flex-col items-center top-30">
    <logos-knockout class="w-60 h-20 z-10 relative" />
    <div class="text-60 -mt-10">🤯</div>
</div>

---
title: Knockout Observables
class: flex justify-center items-center gap-8
hide: true
---

<!-- Knockout Observables = Solid Signals -->

<div class="flex flex-col items-center">
    <logos-knockout class="w-80 h-30" />
    <span class="text-15 font-bold color-orange -mt-6">Observables</span>
</div>

<span class="text-30 font-bold">=</span>

<div class="flex flex-col items-center">
    <logos-solidjs-icon class="w-full h-24" />
    <span class="text-15 font-bold color-orange">Signals</span>
</div>

<!--
TODO: Kann ich das so überhaupt sagen? Vieleicht lieber in die Folie davor mit einbringen
-->

---
title: Knockout.js Docu
layout: iframe-unscaled
url: https://learn.knockoutjs.com/#/?tutorial=intro
scale: 1.5
---

<!--
```
ko.computed(() => this.lastName() === "Mock" && this.firstName("Garrelt"), this);
```


Knockout hatte schon fine-grained updates, aber es gabe viele foot-gun Probleme.
Und Render Performance war sehr schlecht.

> mehr Infos warum Knockout nicht geklappt hat ranziehen. Video von Ryan nochmal schauen
aber im Prinzip müssen wir darauf hier auch nicht eingehen
-->

---
title: Knockout.js Intro
class: content-center
hide: true
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

---
title: comeback
---

# Signals Comeback. Aber warum?

> TODO

- Fine-Grained Updates haben unglaublich gute Performance
- Knockout.js Probleme gelöst

<!--
TODO
wollen wir hier Benchmarks zeigen?
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
    <logos-svelte-icon  v-click class="absolute size-35 -top-[5%] left-[54%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: -80 }" />
    <logos-angular-icon v-click class="absolute size-18 top-[70%] left-[75%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: 80, x: 80 }" />
    <logos-solidjs-icon v-click class="absolute size-45 top-[10%] left-[75%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ x: 80 }" />
    <logos-preact       v-click class="absolute size-32 top-[50%] left-[52%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: 80 }" />
    <logos-lit-icon     v-click class="absolute size-22 top-[55%] left-[12%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ x: -80, y: 80 }" />
    <logos-qwik-icon    v-click class="absolute size-20 top-[75%] left-[33%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: 80 }" />
    <logos-javascript   v-click class="absolute size-40 top-[22%] left-[27%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: -80 }" />
</div>

<!--
Performance ist einfach so viel besser mit Signals + Fine-grained Updates
    V-DOM kann da nicht mithalten
    https://www.youtube.com/watch?v=kkUuaqDBSqA&t=5655s
-->
