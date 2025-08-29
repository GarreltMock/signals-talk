---
layout: section
hide: true
---

# Let's Code

---
layout: editor
title: Live Coding
hide: false
---

<div class="flex flex-col justify-center h-full items-center gap-4 rounded bg-gray bg-opacity-10">
  <button id="button1" class="custom-button">Click me</button>
  <p class="text-6" id="text1">Hallo {{ $slidev.configs.conferenceName }}</p>
</div>

::right::

```javascript {monaco-run} {height:'85%',outputHeight:'15%',editorOptions:{fontSize:18,lineNumbers:true}}
const button = document.getElementById("button1")
const text = document.getElementById("text1")
button.addEventListener("click", () => {})
```

---
title: Ergebnis
hide: true
---

# Live Coding Result

```js {all}{ maxHeight:'90%' }
let subscriber = null
let depsMap = new Map()

function signal(value) {
    const notify = () => depsMap.get(obj)?.forEach((fn) => fn())

    const obj = {
        get value() {
            if (subscriber) {
                if (!depsMap.get(obj)) {
                    depsMap.set(obj, new Set())
                }
                depsMap.get(obj).add(subscriber)
            }
            return value
        },
        set value(updated) {
            value = updated
            notify()
        },
    }

    return obj
}

function unsubscribe(fn) {
    depsMap.forEach((subscriber) => {
        if (subscriber.has(fn)) {
            subscriber.delete(fn)
        }
    })
}

function effect(fn) {
    subscriber = fn
    fn()
    subscriber = null

    return () => unsubscribe(fn)
}

function derived(fn) {
    const derived = signal()
    effect(() => {
        derived.value = fn()
    })
    return derived
}
```
