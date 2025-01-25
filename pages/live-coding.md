---
layout: section
---

# The Code

---
layout: editor
title: Live Coding
---

<div class="flex flex-col justify-center h-full items-center gap-4 rounded bg-gray bg-opacity-10">
  <button id="button1" class="custom-button">Click me</button>
  <p id="text1">Hallo EnterJS</p>
</div>

::right::

```ts {monaco-run} {height:'80%',outputHeight:'20%'}
// @ts-nocheck
const button = document.getElementById("button1")
const text = document.getElementById("text1")

button.addEventListener("click", () => {
    console.log("Hallo")
    text.innerHTML = "Lets go"
})
```

---
title: Ergebnis
hide: true
---

```js
let subscriber = null

export function signal(value) {
    const subscriptions = new Set()

    return {
        get value() {
            if (subscriber) {
                subscriptions.add(subscriber)
            }
            return value
        },
        set value(updated) {
            value = updated
            subscriptions.forEach((fn) => fn())
        },
    }
}

export function effect(fn) {
    subscriber = fn
    fn()
    subscriber = null
}

export function computed(fn) {
    const computed = signal()
    effect(() => {
        computed.value = fn()
    })
    return computed
}
```
