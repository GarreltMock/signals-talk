<script setup>
import { ref, watchEffect } from "vue"

const apiCall = () => new Promise((resolve) => setTimeout(() => resolve(), 0))
const toggle = ref(true)
const show = ref(false)
watchEffect(() => {
    const currentToggle = toggle.value

    ;(async () => {
        await apiCall()
        show.value = currentToggle
    })()
})
</script>

<template>
    <div class="flex items-center gap-4">
        <button class="custom-button" @click="toggle = !toggle">Toggle</button>
        <p class="font-[var(--prism-font-family)] text-6">
            { show:
            <span class="color-green">{{ show }}</span>
            , toggle:
            <span class="color-green">{{ toggle }}</span>
            }
        </p>
    </div>
</template>
