<script setup>
import { ref, watchEffect } from "vue"

const apiCall = () => new Promise((resolve) => setTimeout(() => resolve(), 0))
const toggle = ref(true)
const show = ref(false)

const clicked = ref(false)

function click() {
    clicked.value = true
    toggle.value = !toggle.value
}

watchEffect(async () => {
    await apiCall()
    show.value = toggle.value
})
</script>

<template>
    <div class="flex items-center gap-4">
        <button class="custom-button" @click="click">Toggle</button>
        <p class="font-[var(--prism-font-family)] text-6">
            { show:
            <span :class="clicked ? 'color-red' : 'font-bold'">{{ clicked ? show : "?" }}</span>
            , toggle:
            <span class="color-green">{{ toggle }}</span>
            }
        </p>
    </div>
</template>
