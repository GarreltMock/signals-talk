---
theme: default
drawings:
    persist: false
transition: slide-left
mdc: true
colorSchema: auto

title: Signals in Depth
info: Wie Reaktivität in vielen Frontend-Frameworks funktioniert

layout: cover
---

# Signals in Depth

### [Wie Reaktivität in vielen Frontend-Frameworks funktioniert]{style="background-color:var(--slidev-theme-primary);color:black;padding:0 4px"}

<div class="absolute -bottom-2 right-5 text-3 origin-top-left translate-x-[100%] rotate-270 opacity-50">
<LightOrDark>
  <template #dark>Photo by Timon Reinhard from Pexels</template>
  <template #light>Photo by Magda Ehlers from Pexels</template>
</LightOrDark>
</div>

---
title: problem-stellung
class: flex items-center justify-center
---

<Counter class="scale-[2]" />

<!--
Vielleicht typischer Counter
-->

---
title: Heute
class: flex flex-col h-full
---

<!-- Vue, Svelte, Angular, SolidJS, Preact, Lit, Javascript :o -->

<div class="relative grow-1 flex items-center justify-center">
    <h1 class="text-22! mt-4">Signals</h1>
    <logos-solidjs-icon v-click class="absolute size-34 top-[55%] left-[5%]"  v-motion :enter="{ x: 0, y: 0 }"  :initial="{ x: -80, y: 80 }" />
    <logos-vue          v-after class="absolute size-35 top-[15%] left-[78%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ x: 80 }" />
    <logos-svelte-icon  v-after class="absolute size-35 top-[0%]  left-[54%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: -80 }" />
    <logos-angular-icon v-after class="absolute size-32 top-[70%] left-[55%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: 80 }" />
    <logos-preact       v-after class="absolute size-28 top-[60%] left-[80%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: 80, x: 80 }" />
    <logos-lit-icon     v-after class="absolute size-22 top-[15%] left-[10%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ x: -80, y: -80 }" />
    <logos-qwik-icon    v-after class="absolute size-20 top-[75%] left-[33%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: 80 }" />
    <logos-javascript   v-after class="absolute size-32 top-[4%]  left-[30%]" v-motion :enter="{ x: 0, y: 0 }" :initial="{ y: -80 }" />
</div>

---
title: Key Point
class: content-center
---

<div class="text-8xl font-bold text-center">Signals sind <span class="color-orange">nicht</span> kompliziert</div>

<!--
Frage ans Publikum:
Wer kennt Signals?
Wer weiß wie sie unter der Haube funktionieren?
  Ok. bei euch würde mich am Ende besonders interessieren, ob ihr noch was mitnehmen konntet
-->

---
layout: about-me
---

<!--
Hier könnte ich einen kleinen Witz mit erstem Talk + Dark vs. Light Mode machen
-->

---
title: Inhalt
class: content-center
hide: true
---

# Was euch heute erwartet

1. Einordnung + Historie
2. Blick unter die Haube
3. Common Pitfalls

---
src: ./pages/definition.md
---

---
src: ./pages/history.md
---

---
src: ./pages/observer-pattern.md
---

---
src: ./pages/live-coding.md
---

---
src: ./pages/pitfalls.md
---

---
title: Zusammenfassung
---

<!-- # [Signals sind...]{class=italic}

> TODO

<div class="flex flex-col gap-4 content-center mt-10">
  <div class="text-18 font-bold">nicht <span class="color-orange">neu</span></div>
  <div class="text-18 font-bold">nicht <span class="color-orange">kompliziert</span></div>
  <div class="text-18 font-bold">nicht <span class="color-orange">4-free</span></div>
</div> -->

<span class="text-14">Jetzt wisst ihr</span>

<div class="flex flex-col gap-4 content-center mt-10 text-14 font-bold">
  <div v-click><span class="italic font-normal text-10">1.</span> Woher <span class="color-orange">Signals</span> kommen</div>
  <div v-click><span class="italic font-normal text-10">2.</span> Wie sie <span class="color-orange">implementiert</span> sind</div>
  <div v-click><span class="italic font-normal text-10">3.</span> Worauf ihr <span class="color-orange">achten</span> müsst</div>
</div>

<!--
1. Signals sind nichts neues
    - Sie haben nur auf ihren richtigen Moment gewartet
2. Signals sind nicht kompliziert
    - Abwandlung des Observer Patterns
3. Signals sind nicht for free
    - Es gibt ein paar Pitfalls die wir beachten müssen
-->

---

# Bonus

What's next (for Signals / you)

- [TC39 Javascript Proposal](https://github.com/tc39/proposal-signals?tab=readme-ov-file)
- [Double Linked Lists - Preact](https://preactjs.com/blog/signal-boosting/)
- [Alien Signals](https://github.com/stackblitz/alien-signals)
- [Signals 2.0](https://www.youtube.com/watch?v=xnmvxWEK25I)

---
src: ./pages/js-proposal.md
---

---
title: Quellen
class: flex flex-col
---

# Quellen

- https://preactjs.com/guide/v10/signals/
- https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob
- https://youtu.be/1TSLEzNzGQM
- https://github.com/tesla3327/reactivity-from-scratch
- https://youtu.be/kkUuaqDBSqA

<div class="grow-1"/>

Credits{class=m-0!}

::div{class='font-200 text-xs'}
slides created with sli.dev  
icons from Iconify  
images from Pexels
::

---
class: content-center flex justify-center items-center flex-col
---

# Was habt ihr für Fragen?

<div class="absolute bottom-4 right-4">
  <span>Slides</span>
  <div class="size-40 bg-white" />
</div>

<!--
TODO: slides QR code, vielleicht zu einem Google Forms Link
-->
