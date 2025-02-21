---
layout: section
class: text-left
---

# Common Pitfalls

_a.k.a._ gemeinsame Fallgruben

---
title: Pitfall 1
---

# Fallgrube #1

````md magic-move {at: 2}
```vue
<script setup>
import { ref, nextTick, watchEffect } from "vue"

const toggle = ref(true)
const show = ref(false)
watchEffect(() => nextTick(() => (show.value = toggle.value)))
</script>

<template>
    <button class="custom-button" @click="toggle = !toggle">Toggle</button>
    <h1>{{ show }}</h1>
</template>
```

```vue
<script setup>
import { ref, nextTick, watch } from "vue"

const toggle = ref(true)
const show = ref(false)
watch(toggle, () => nextTick(() => (show.value = toggle.value)))
</script>

<template>
    <button class="custom-button" @click="toggle = !toggle">Toggle</button>
    <h1>{{ show }}</h1>
</template>
```
````

<div class="relative mt-6">
  <Pitfall class="absolute" v-click="[1,2]" />
  <PitfallFixed class="absolute" v-click="'+2'" />
</div>

---
title: Pitfall 2
---

# Fallgrube #2

eher <logos-vue/> spezifisch

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

---
title: Pitfall 3
---

# Fallgrube #3

Sideeffects in Computed

```ts
import { computed, ref } from "vue"

const count = ref(0)

function getNextCount() {
    count.value += 1
    return count.value
}

const double = computed(() => getNextCount() * 2)
```

<v-clicks>

> Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.

</v-clicks>

<style>
blockquote {
    --uno: 'border-red border-l-4 color-red';
    font-family: var(--prism-font-family);
}
</style>

<!--
1. Recursive computed maybe?
2. Vielleicht auf Framwork Ebene
    - Unsubscribe handling. Zumindest könnte man da den Bogen zum Observer Pattern spannen
3. Oder was simples wie: Reactivity geht kaputt bei Objekten
    - Was aber von den Frameworks für uns gelöst wird
    - Da hätte man den einen Übergang zu Frameworks
4. Vielleicht steckt was im Signals 2.0 Stream drin?
-->
