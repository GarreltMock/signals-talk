<template>
    <div class="slidev-layout p-0 flex flex-row h-full my-editor">
        <div class="flex-basis-[20%] p-2">
            <slot />
        </div>
        <div class="flex-basis-[80%] pr-2">
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
