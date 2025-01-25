---
layout: section
---

# Geschichte der Reaktivität

---
title: Timeline
---

# Timeline

> TODO: make beautiful

- 1969: [LANPAR](https://www.historyofinformation.com/detail.php?id=5478)
- 1985: Excel
- 2010: Angular, Barebone, Knockout
- 2013: React
- 2021: SolidJS (Signals)

<!--
Knockout.js (July 2010), Backbone.js (October 2010), Angular.js (October 2010)
Angular's Dirty Checking, Backbone's model-driven re-renders, and Knockout's fine-grained updates
-->

<!--
Knockout hatte schon fine-grained updates, aber es gabe viele foot-gun Probleme.
React hat dann einen anderen Approch genommen und anstatt fine-grained ein "wir renden alles neu" gemacht.
Signals haben es geschafft die fine-grained updates Probleme zu lösen.
-->

---
title: Knockout.js Docu
layout: iframe-unscaled
url: https://learn.knockoutjs.com/#/?tutorial=intro
scale: 1.5
---

---
title: Knockout.js Intro
class: content-center
---

# Knockout Observables

```js
const count = ko.observable(0)
const doubleCount = ko.pureComputed(() => count() * 2)

console.log(doubleCount()) // 2
count(count() + 1)
console.log(doubleCount()) // 4
```

---
title: Heute
---

# Heute

Signals habe eine **massive adoption**

> TODO: use icons

Vue, Svelte, Angular, SolidJS, Preact, Lit, Javascript :o
