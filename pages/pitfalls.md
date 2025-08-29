---
layout: section
class: text-left
---

# Common Pitfalls

<!--
_freely translated from_ common Pitfalls
-->

---
title: Pitfall
---

# Pitfall #1

Unpacking Signals

```js {monaco-run}
import { signal } from "./signals.js"
const foo = signal(false)

console.log(foo)

if (foo) {
    console.log("Hello ct-webdev")
}

const a = foo.value // a is no longer reactive
```

---
title: Pitfall
---

# Pitfall #2

Recursion Problem

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

# Pitfall #3

Asynchronous Subscribers

````md magic-move {at:2}
```ts
const apiCall = () => new Promise((resolve) => setTimeout(() => resolve(), 5))

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
const apiCall = () => new Promise((resolve) => setTimeout(() => resolve(), 5))

const toggle = signal(true)
const switchToggle = () => (toggle.value = !toggle.value)

const show = signal(false)
effect(async () => {
    await apiCall()
    show.value = toggle.value
})
```

```ts
const apiCall = () => new Promise((resolve) => setTimeout(() => resolve(), 5))

const toggle = signal(true)
const switchToggle = () => (toggle.value = !toggle.value)

const show = signal(false)
effect(() => {
    const currentToggle = toggle.value // Now `toggle` is tracked!
    apiCall().then(() => (show.value = currentToggle))
})
```
````

<div class="relative mt-2">
  <Pitfall class="absolute" v-click="[1,2]" />
  <PitfallFixed v-click="11" />
</div>

<blockquote v-click="12" class="border-yellow! mt-2">
Warning: Race conditions can occur here
</blockquote>

---
title: Pitfall
hide: true
---

# Bonus Pitfall

Typing Issues - <logos-vue/> specific

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
