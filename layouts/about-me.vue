<template>
    <div class="slidev-layout about-me">
        <div class="flex items-center h-full">
            <div class="flex flex-col gap-4 w-1/2">
                <h1 class="text-6xl">Garrelt Mock</h1>
                <span class="mt-4">Spiele Entwickler</span>
                <ul>
                    <li>
                        <a href="https://lotum.de">Lotum</a>
                        <LightOrDark>
                            <template #dark>
                                <img class="ml-2 inline-block h-[1em]" src="/img/lotum-dark.png" />
                            </template>
                            <template #light>
                                <img class="ml-2 inline-block h-[1em]" src="/img/lotum-light.png" />
                            </template>
                        </LightOrDark>
                    </li>
                    <li>
                        <a href="https://programmier.bar">programmier.bar</a>
                        <img class="ml-2 inline-block h-[1em]" src="/img/pb.png" />
                    </li>
                    <li>5+ Jahre Frontend Erfahrung</li>
                    <li>
                        Fokus auf Vue
                        <logos-vue class="inline-block h-[1em]" />
                    </li>
                </ul>

                <span class="text-14 flex gap-4 mt-8">
                    <img src="/img/games/wb.png" class="inline-block h-[1em] w-[1em]" />
                    <img src="/img/games/qp.png" class="inline-block h-[1em] w-[1em]" />
                    <img src="/img/games/4pics.png" class="inline-block h-[1em] w-[1em]" />
                    <img src="/img/games/classics.png" class="inline-block h-[1em] w-[1em]" />
                </span>
            </div>
            <figure class="flex justify-center w-1/2">
                <img
                    src="/img/me.jpg"
                    class="bg-gray-400 rounded-full object-cover h-80 w-80 border border-8 border-[var(--slidev-theme-primary)] z-10"
                />
            </figure>
        </div>
    </div>
</template>
