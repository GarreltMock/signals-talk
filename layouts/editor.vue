<template>
    <div class="slidev-layout p-0 flex flex-row h-full my-editor">
        <div class="flex-basis-[25%] p-6">
            <slot />
        </div>
        <div class="flex-basis-[75%] pr-1">
            <slot name="right" />
        </div>
    </div>
</template>

<style>
.my-editor {
    .slidev-monaco-container {
        height: 98%;
    }

    .slidev-runner-output {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
}
</style>
