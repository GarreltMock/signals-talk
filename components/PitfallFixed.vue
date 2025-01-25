<script setup>
import { ref, nextTick, watch } from "vue"

const toggle = ref(true)
const show = ref(false)
watch(toggle, () => nextTick(() => (show.value = toggle.value)))
</script>

<template>
    <div class="flex gap-4">
        <button class="custom-button" @click="toggle = !toggle">Toggle</button>
        <h2>{{ show }}</h2>
    </div>
</template>
