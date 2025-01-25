<template>
    <div class="slidev-layout about-me">
        <div class="flex items-center h-full">
            <div class="flex flex-col gap-4 w-1/2">
                <h1 class="text-6xl">Garrelt Mock</h1>
                <span class="mt-4">Spiele Entwickler</span>
                <ul>
                    <li>5+ Jahre Frontend Erfahrung</li>
                    <li>
                        Fokus auf Vue.js
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-[1em]" viewBox="0 0 256 221">
                            <path fill="#41b883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z" />
                            <path fill="#41b883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z" />
                            <path fill="#35495e" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z" />
                        </svg>
                    </li>
                    <li>Bad Nauheim, Deutschland 🇩🇪</li>
                    <li>
                        <a href="https://programmier.bar">programmier.bar</a>
                        <img class="ml-2 inline-block h-[1em]" src="/img/pb.png" />
                    </li>
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
                </ul>

                <span class="text-14 flex gap-4 mt-8">
                    <img src="/img/games/wb.png" class="inline-block h-[1em] w-[1em]" />
                    <img src="/img/games/qp.png" class="inline-block h-[1em] w-[1em]" />
                    <img src="/img/games/4pics.png" class="inline-block h-[1em] w-[1em]" />
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
