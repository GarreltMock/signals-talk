---
layout: section
---

# Under the Hood 🕵️👀

<v-click>Observer Pattern</v-click>

---
title: Code Example
---

# Code Example

> TODO: was genau will ich hier zeigen?

```js
export function observable(value) {
    const subscribers = new Set()

    return {
        increment() {
            value++
            this.update(value)
        },
        subscribe(fn) {
            subscribers.add(fn)
            return () => subscribers.delete(fn)
        },
        update(value) {
            subscribers.forEach((fn) => fn(value))
        },
    }
}
```

---
title: Probleme
---

# Probleme

1. Manuelles Dependency Tracking
