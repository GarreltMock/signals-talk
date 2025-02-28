---
layout: section
class: text-left
---

# Common Pitfalls

_a.k.a._ gemeine Fallgruben

<!--
_a.k.a._ gemeinsame Fallgruben
-->

---
title: Pitfall
---

# Fallgrube #1

Signals auspacken

```js
const foo = signal(1)

console.log(foo) // logs: { value: (...) }

const a = foo.value // a is not reactive anymore
```

---
title: Pitfall
---

# Fallgrube #2

Asynchrone Subscriber

````md magic-move {at: 2}
```ts
const apiCall = () => new Promise((resolve) => setTimeout(() => resolve(), 0))

const toggle = signal(true)
const show = signal(false)
const switchToggle = () => (toggle.value = !toggle.value)

effect(async () => {
    await apiCall()
    show.value = toggle.value
})
```

```ts
const apiCall = () => new Promise((resolve) => setTimeout(() => resolve(), 0))

const toggle = signal(true)
const show = signal(false)
const switchToggle = () => (toggle.value = !toggle.value)

effect(() => {
    const currentToggle = toggle.value // Jetzt wird `toggle` getrackt!
    apiCall().then(() => (show.value = currentToggle))
})
```
````

<div class="relative mt-2">
  <Pitfall class="absolute" v-click="[1,2]" />
  <PitfallFixed v-click="'+3'" />
</div>

<blockquote v-click="'+1'" class="border-red! mt-2">
Achtung: Hier können Race-Conditions entstehen
</blockquote>

---
title: Pitfall
---

# Fallgrube #3

Rekursions Problem

```ts
const count = signal(0)

effect(() => {
    count.value = count.value + 1
})
```

<v-clicks>

> Uncaught RangeError: Maximum call stack size exceeded

</v-clicks>

<style>
blockquote {
    --uno: 'border-red border-l-4 color-red';
    font-family: var(--prism-font-family);
}
</style>

---
title: Pitfall
---

# Bonus Fallgrube

Typing Probleme - <logos-vue/> spezifisch

```ts twoslash
import { ref, reactive } from "vue"

class Test {
    a = ref(false)
}

const foo = new Test()
console.log(foo.a.value)

const bar = reactive(foo)
console.log(bar.a.value)
```
