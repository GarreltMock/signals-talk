---
layout: section
---

# Blick unter die Haube

---
title: stichwort
class: content-center
---

<div class="*:text-30 *:leading-[0.9em] *:font-bold">
    <div>Stichwort</div>
    <div class="-mt-3 color-orange">Observer</div>
    <div class="-mt-4 color-orange">Pattern</div>
</div>

---
title: UML
class: flex flex-col
---

# Observer Pattern

<div class="grow-1" />

<v-clicks>

```mermaid
classDiagram

direction RL

note for Observable "*changeValue*
this.value = value
notifySubscriber()"

note for Observable "*notifySubscriber*
for (**s** of subscriber)
**s**.update(value)"

class Observable {
    value: any
    subscriber: Array~Subscriber~
    + subscribe(sub: Subscriber)
    + unsubscribe(sub: Subscriber)
    + changeValue(value: any)
    - notifySubscriber()
}

class Subscriber {
    + update(value: any)
}

Observable *-- Subscriber
```

</v-clicks>

<div class="grow-1" />

---
title: Code Example
---

# Code Beispiel

```js {1,21|2-3|5-11,19|5,12-19|all}{ maxHeight:'90%' }
function observable(value) {
    const subscribers = new Set()
    const notifySubscriber = () => subscribers.forEach((fn) => fn())

    return {
        subscribe(fn) {
            subscribers.add(fn)
        },
        unsubscribe(fn) {
            subscribers.delete(fn)
        },
        set value(updated) {
            value = updated
            notifySubscriber()
        },
        get value() {
            return value
        },
    }
}
```

---
title: Probleme
---

# Was fehlt?

<v-clicks>

> "Automatische Zustandsbindung und Abhängigkeitsverfolgung" - Preact

```js
const count = observable(1)
let double = count.value * 2

count.subscribe(() => {
    double = count.value * 2
})

console.log(double) // 2
countA.value += 1
console.log(double) // 4
```

</v-clicks>

<v-clicks>

1. Manuelle Zustandsbindung
    - Umständlich bei mehreren Abhängigkeiten
2. Abhängigkeiten sind lose gekoppelt
    - Keine 1:1 Beziehung abgebildet
    - Wer kümmert sich um das unsubscriben?

</v-clicks>
