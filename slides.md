---
theme: default
drawings:
    persist: false
transition: slide-left
mdc: true
colorSchema: auto

title: Signals in Depth
info: How reactivity works in many frontend frameworks
conferenceName: EnterJS

layout: cover

monacoRunAdditionalDeps:
    - ./signals.js
---

# Signals in Depth

### [How reactivity works in many frontend frameworks]{style="background-color:var(--slidev-theme-primary);color:black;padding:0 4px"}

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

---
title: Today
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
layout: about-me
---

---
title: Raise Hand
class: content-center
---

<div class="text-50 text-center">✋</div>

---
title: Key Point
class: content-center
---

<div class="*:text-30 *:leading-[0.7em] *:font-bold">
    <div>Signals</div>
    <div class="mt-4">are</div>
    <div class="color-orange font-italic ml-[7px]">not</div>
    <div class="color-orange">complicated</div>
</div>

<!--
Frage ans Publikum:
Wer kennt Signals?
Wer weiß wie sie unter der Haube funktionieren?
  Ok. bei euch würde mich am Ende besonders interessieren, ob ihr noch was mitnehmen konntet
-->

---
src: ./pages/definition.md
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
title: Summary
class: content-center
---

<div class="*:text-30 *:leading-[0.7em] *:font-bold">
    <div>Signals</div>
    <div class="mt-4">are</div>
    <div class="color-orange font-italic ml-[7px]">not</div>
    <div class="color-orange">complicated</div>
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
src: ./pages/history.md
---

---
layout: section
---

# What questions do you have?

<div class="absolute bottom-6 left-6 text-initial opacity-80 text-4 text-left">
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            class="inline-block h-[1em] mx-[2px]"
        >
            <path
                fill="currentColor"
                d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"
            ></path>
        </svg>
        mock@lotum.de
    </div>
    <div>
        <svg class="inline-block h-[1em] -mt-1" viewBox="0 0 256 250" width="1.24em" height="1.2em">
            <path
                fill="currentColor"
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403"
            ></path>
        </svg>
        GarreltMock
    </div>
    <div>
        <logos-linkedin-icon class="inline-block h-[1em] ml-[1px]" />
        garrelt-mock-92a934192
    </div>
</div>

<div class="absolute bottom-8 right-8">
  <span>Slides</span>
  <img class="size-35" src="/img/slides-qr.svg" />
</div>

---
title: Sources
class: flex flex-col
---

# What's next

for Signals / you

<v-clicks>

- [TC39 Javascript Proposal](https://github.com/tc39/proposal-signals?tab=readme-ov-file)
- [Double Linked Lists - Preact](https://preactjs.com/blog/signal-boosting/)
- [Alien Signals](https://github.com/stackblitz/alien-signals)
- [Signals 2.0](https://www.youtube.com/watch?v=WLvAJYHQ9m0)

</v-clicks>

<v-click>

## Sources

- https://preactjs.com/guide/v10/signals/
- https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob
- https://github.com/tesla3327/reactivity-from-scratch
- https://youtu.be/1TSLEzNzGQM
- https://youtu.be/kkUuaqDBSqA

</v-click>

::div{class="opacity-50 mt-3"}
**Credits**: slides created with sli.dev, icons from Iconify, images from Pexels
::

<div class="absolute bottom-8 right-8 text-center">
  <span>Slides</span>
  <img class="size-50" src="/img/slides-qr.svg" />
</div>

<!-- <div class="absolute top-22 right-8" v-click>
    <div class="relative flex items-center justify-center gap-6">
        <img class="size-18 -scale-x-full absolute -top-8 -left-2 -rotate-18" src="/img/onboarding_girl.svg" />
        <img class="size-18 absolute -top-6 -right-2 rotate-18" src="/img/onboarding_men.svg" />
        <img class="-rotate-12 size-28 relative -mx-5" src="/img/pb.png" />
        <img class="rotate-12 size-28 relative -mx-5" src="/img/lotum-light.png" />
    </div>
    <div class="text-9 leading-10 font-bold text-center mt-2 color-primary">Kommt vorbei</div>
</div> -->

<!-- <div class="absolute top-20 right-40 flex flex-col items-center" v-click>
    <div class="flex">
        <img class="size-14 -scale-x-full relative -mx-1" src="/img/onboarding_girl.svg" />
        <img class="size-14 relative -mx-1" src="/img/onboarding_men.svg" />
    </div>
    <div class="flex -mt-2 mb-2">
        <img class="-rotate-12 size-28 relative" src="/img/lotum-dark.png" />
        <img class="rotate-12 size-28 relative -ml-4" src="/img/pb.png" />
    </div>
    <div class="text-7 leading-10 font-bold text-end">Kommt vorbei</div>
</div> -->

<!--
TODO: slides QR code, vielleicht zu einem Google Forms Link
-->
