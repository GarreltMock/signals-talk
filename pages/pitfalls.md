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

eher Vue spezifisch

```ts twoslash
import { ref, reactive } from "vue"

class Test {
    readonly a = ref(false)
}

const foo = new Test()
const bar = reactive(foo)

console.log(foo.a.value)
console.log(bar.a.value)
```

---
title: Pitfall 3
---

# Fallgrube #3
