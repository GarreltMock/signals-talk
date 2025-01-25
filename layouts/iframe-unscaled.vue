<script setup lang="ts">
const props = defineProps<{
    url: string
    scale?: number
}>()

const unscaledSize = `calc(100% * ${props.scale ?? "var(--slidev-slide-scale)"})`
const unscaledTransform = `scale(calc(1 / ${props.scale ?? "var(--slidev-slide-scale)"})`
</script>

<template>
    <div class="slidev-layout h-full w-full flex p-4">
        <div class="rounded-lg overflow-hidden flex-1">
            <div relative :style="{ width: unscaledSize, height: unscaledSize }">
                <iframe
                    id="frame"
                    class="w-full h-full"
                    :src="url"
                    :style="{
                        transform: unscaledTransform,
                        transformOrigin: 'top left',
                    }"
                />
            </div>
        </div>
    </div>
</template>
