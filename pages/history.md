---
title: Timeline
---

# Blick in die Vergangenheit

<Timeline />

<!--
- 1969: [LANPAR](https://www.historyofinformation.com/detail.php?id=5478)
- 1985: Excel
- 2010: Angular, Barebone, Knockout
- 2013: React
- 2021: SolidJS v1 (Signals)
-->

<!--
Framework	Reaktivitätsmodell	            Update-Strategie	        Vorteil	                    Nachteil
Knockout.js	Fine-grained Observables	    Direkte DOM-Updates	        Präzise Updates	            Veraltet, bei großen Projekten sperrig
Backbone.js	Event-getrieben (Model-Events)	Manuelle Updates	        Kontrolle über Updates	    Viel Boilerplate
AngularJS	Dirty Checking (Digest Cycle)	Überprüft alle Bindungen	Einfaches Data Binding	    Performance bei vielen Watchern
React	    Virtual DOM + Komplett-Render	VDOM-Diffing + Patches	    Einfache Denkweise	        Overhead bei vielen kleinen Updates
Signals	    Fine-grained Dependencies	    Direkte Ziel-Updates	    Extrem schnell & präzise	Neues Konzept, Lernkurve
-->

<!--
LANPAR = LANguage for Programming Arrays at Random

Knockout.js (July 2010), Backbone.js (October 2010), Angular.js (October 2010)  
Angular's Dirty Checking            = viele unübersichtliche Updates, schlechte Performance  
Backbone's model-driven re-renders  = sehr manuelles Update Handling  
Knockout's fine-grained updates     = unübersichtliche Updates und Zyklen  
Alle waren nicht sehr Entwickler-freundlich. Gerade bei großen Applikationen

React hat dann einen anderen Approch genommen mit VDOM + "wir renden alles neu" und komponentenbasierten Ansatz.
Signals haben es geschafft die fine-grained updates Probleme zu lösen.
-->

---
title: Signals nichts neues
class: flex justify-center flex-col relative
---

<div class="*:text-30 *:leading-[0.8em] *:font-bold">
    <div>Signals</div>
    <div>sind</div>
    <div class="color-orange -mt-4 font-italic">nichts</div>
    <div class="color-orange -mt-6">neues</div>
</div>

<div v-click class="absolute right-40 rotate-20 flex flex-col items-center top-30">
    <logos-knockout class="w-60 h-20 z-10 relative" />
    <div class="text-60 -mt-10">🤯</div>
</div>

---
title: Knockout.js Docu
layout: iframe-unscaled
url: https://learn.knockoutjs.com/#/?tutorial=intro
scale: 1.5
---

<!--
```
ko.computed(() => this.lastName() === "Mock" && this.firstName("Garrelt"), this);
```

Knockout hatte schon fine-grained updates, aber es gabe viele foot-gun Probleme.
Und Render Performance war sehr schlecht.

> mehr Infos warum Knockout nicht geklappt hat ranziehen. Video von Ryan nochmal schauen
aber im Prinzip müssen wir darauf hier auch nicht eingehen
-->

---
title: keypoint
class: content-center
---

<div class="*:text-30 *:leading-[0.8em] *:font-bold">
    <div>Nutz</div>
    <div>die</div>
    <div class="color-orange">Community</div>
</div>

<!--
"Wenn ihr das nächste mal vor einem Problem steht ..."
"Building software is a team sport"
Entwicklung ist ein Team-Sport

Man muss nicht alles neu erfinden
-->
