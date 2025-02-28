<script setup lang="ts">
type Entry = {
    year: number
    title: string
    description: string
}
const items: Entry[] = [
    { year: 1969, title: "LANPAR", description: "Erstes digitales Spreadsheet" },
    { year: 1985, title: "Excel", description: "Reaktive Daten ermöglichen flexible Anwendungs-Entwicklung" },
    {
        year: 2010,
        title: "Angular, Barebone, Knockout",
        description: "Frontend Frameworks mit 3 verschiedenen Reaktivitäts-Modellen",
    },
    { year: 2013, title: "React", description: "Gute DX durch Konsistenz und Nachvollziehbarkeit" },
    { year: 2021, title: "SolidJS", description: "Signals wurde als Begriff geprägt" },
]

const tlColors = mixColors("#FFCF4A", "#6940B5", items.length)

function mixColors(start: string, end: string, steps: number) {
    steps -= 1
    let colors: string[] = []
    for (let i = 0; i <= steps; i++) {
        let percent = (i / steps) * 100
        colors.push(`color-mix(in oklch, ${start}, ${end} ${percent}%)`)
    }
    return colors
}
</script>

<template>
    <div class="timeline flex h-90 mt-10">
        <div
            v-for="(val, i) in items"
            class="entry flex flex-col items-center grow-1 shrink-0 basis-none"
            :class="[i % 2 === 0 ? 'flex-col-reverse *:flex-col-reverse even' : '', `index-${i}`]"
            :style="{ color: tlColors[i] }"
            v-click="i === 0 ? 2 : i === 1 ? 1 : i + 1"
        >
            <div class="year-container flex flex-col items-center grow-1 shrink-0 basis-none z-2">
                <div
                    class="year shadow-md w-[70px] h-[70px] b-5 text-5 rounded-full flex justify-center items-center border-color-current"
                >
                    {{ val.year }}
                </div>
                <div class="connector w-[2px] grow-1 bg-current"></div>
            </div>
            <div
                class="timeline-bar w-full h-4 relative bg-current z-1"
                :class="[i % 2 === 0 && 'reverse', i === 0 && 'first', i === items.length - 1 && 'last']"
            ></div>
            <div class="information grow-1 shrink-0 basis-none *:text-center">
                <div class="title my-6 text-5 line-height-6 relative">
                    <div class="w-[120%] relative left-1/2 -transform-translate-x-1/2 text-initial">
                        {{ val.title }}
                    </div>
                </div>
                <div class="text opacity-70 text-4 line-height-5 font-thin text-initial">{{ val.description }}</div>
            </div>
        </div>
    </div>
</template>

<style>
.year {
    background-color: white;
}

.dark .year {
    background-color: #040018;
}
</style>

<style scoped>
.timeline-bar::after {
    content: "";
    display: block;
    position: relative;
    width: 14px;
    height: 14px;
    top: calc(100% - 7px);
    left: calc(50% - 7px);
    rotate: 45deg;
    background: currentColor;
}

.timeline-bar.reverse::after {
    top: calc(0% - 7px);
}

.timeline-bar.first {
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
}

.timeline-bar.last {
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}

.title::after {
    content: "";
    display: block;
    position: relative;
    width: 40px;
    height: 2px;
    bottom: -0.7rem;
    left: 50%;
    transform: translateX(-50%);
    background: currentColor;
}

/* Animation */

.entry .year-container {
    transition: transform 500ms 500ms;
}

.entry .connector {
    transition: transform 200ms 0.8s;
    transform-origin: center top;
}

.entry.even .connector {
    transform-origin: center bottom;
}

.entry .timeline-bar {
    transition:
        transform 500ms,
        opacity 0s 1s;
    transform-origin: left center;
}

.entry.index-0 .timeline-bar {
    transform-origin: right center;
}

.entry.index-1 .timeline-bar {
    transform-origin: center center;
}

.entry .timeline-bar::after {
    transition: opacity 0.2s 1.1s;
}

.entry .information {
    transition: opacity 0.2s 1.2s;
}

.entry.slidev-vclick-hidden {
    .year-container {
        transform: translateY(calc(100% - 28px));
    }

    .connector {
        transform: scaleY(0%);
    }

    .timeline-bar {
        transform: scaleX(0%);
    }

    .information {
        opacity: 0;
    }

    .timeline-bar::after {
        opacity: 0;
    }
}

.entry.even.slidev-vclick-hidden {
    .year-container {
        transform: translateY(calc(-100% + 28px));
    }
}
</style>
