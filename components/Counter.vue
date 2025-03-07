<script setup>
import { ref } from "vue"
const count = ref(0)
</script>

<template>
    <div class="flex items-center gap-4">
        <button class="custom-button" @click="count++">Count</button>
        <p class="text-10">{{ count }}</p>
    </div>
</template>
