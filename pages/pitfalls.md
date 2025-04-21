---
layout: section
class: text-left
---

# Gemeine Fallgruben

<!--
_frei übersetzt von_ common Pitfalls
-->

---
title: Pitfall
---

# Fallgrube #1

Signals auspacken

```js {monaco-run}
import { signal } from "./signals.js"
const foo = signal(false)

console.log(foo)

if (foo) {
    console.log("Hallo EnterJS")
}

const a = foo.value // a ist nicht mehr reaktiv
```

---
title: Pitfall
---

# Fallgrube #2

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

# Fallgrube #3

Asynchrone Subscriber

````md magic-move {at:2}
```ts
const apiCall = () => new Promise((resolve) => setTimeout(() => resolve(), 0))

const toggle = signal(true)
const switchToggle = () => (toggle.value = !toggle.value)

const show = signal(false)
effect(async () => {
    await apiCall()
    show.value = toggle.value
})
```

```ts {all|7,10|1-2,5,7,10|1,3,5,7,10|1,3,5,8|1,4,5,8|4,9}
function effect(fn) {
    activeSubscriber = fn
    fn()
    activeSubscriber = null
}

effect(async () => {
    await apiCall()
    show.value = toggle.value
})
```

```ts
const apiCall = () => new Promise((resolve) => setTimeout(() => resolve(), 0))

const toggle = signal(true)
const switchToggle = () => (toggle.value = !toggle.value)

const show = signal(false)
effect(async () => {
    await apiCall()
    show.value = toggle.value
})
```

```ts
const apiCall = () => new Promise((resolve) => setTimeout(() => resolve(), 0))

const toggle = signal(true)
const switchToggle = () => (toggle.value = !toggle.value)

const show = signal(false)
effect(() => {
    const currentToggle = toggle.value // Jetzt wird `toggle` getrackt!
    apiCall().then(() => (show.value = currentToggle))
})
```
````

<div class="relative mt-2">
  <Pitfall class="absolute" v-click="[1,2]" />
  <PitfallFixed v-click="11" />
</div>

<blockquote v-click="12" class="border-yellow! mt-2">
Achtung: Hier können Race-Conditions entstehen
</blockquote>

---
title: Pitfall
hide: true
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
