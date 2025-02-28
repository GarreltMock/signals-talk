<template>
    <div class="slidev-layout my-cover size-full flex flex-col justify-center">
        <slot />
    </div>
</template>

<style>
.my-cover {
    background: url("/img/cover/tower-light.png") no-repeat center center;
    background-size: cover;

    html.dark & {
        /* background: url("/img/cover/satellite.jpg") no-repeat center center; */
        background: url("/img/cover/tower-dark.jpg") no-repeat center center;
        background-size: cover;

        justify-content: start;
        align-items: center;

        padding-top: 80px;
    }

    h1 {
        font-size: 3.75rem;
        line-height: 4rem;
    }
}
</style>
