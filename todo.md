# Todos

- [x] Animieren
    - [x] Timeline
    - [x] Adoption Logos
- [x] "Signals sind nichts neues" schöner machen
- [x] Observer Probleme
- [x] **Pitfall #3**
- [x] Sollen wir beim Live Coding das Observer Pattern als Ausgang nehmen?
    - Oder das Observer Pattern auch selbst entwickeln?
      -> Nein. Es ist glaube ich ganz gut so
- [x] Beim Live Coding noch auf das Dependency Tracking eingehen
    - Hier mir Michael Thiessens Reactivity from Scratch anschauen
    - Subs rausziehen und eine removeEffect Funktion bauen
- [x] Keypunkte in Folien fassen
- [x] Signals Comeback - Knockout.js Probleme
- [x] Preact Zitat auf Deusch übersetzen
- [x] Pitfall #3 mit Nummer anstatt Boolean?
- [x] Ist die Historie wichtiges Wissen oder Fun Fact?
    - Folie dafür erstellen
    - Vielleicht hier explizit erwähnen, dass ich mich gefragt habe, was man hier rausziehen kann oder ob es Fun Fact ist
- [x] Deps Tracking beim Coding besser erklären
    - hier muss ich halt üben
- [x] Den Anfang nochmal neu konzipieren
    - Problemstellung formulieren
    - Features von Signals klarer abgrenzen
- [x] Was passiert mit der "Signals sind überall" Folie?
- [x] Beim Live Coding: linker Text größer?
- [x] Live Coding Bug (Zähler geht immernoch hoch obwohl es nicht mehr als effect gekoppelt ist. Warum?)
    - Da wird irgendeine Dependency nicht richtig aufgeräumt
- [x] Programmier.bar Schriftart am Ende - ist custom made
- [x] JS Proposal als Backup noch etwas mehr beleuchten
- [x] Deps Tracking Live Coding üben
- [x] Reaktive Grundbausteine nicht unterstreichen, sondern Orange färben mit einer kleinen Pop Animation
- [x] Social Media / Kontakt möglichkeiten
- [ ] Vielleicht beim Live Coding anzeigen, welche Funktion wir gerade entwickeln
    - Sowas wie ein Inhaltsverzeichnis

## Vielleicht

- [x] Alternative SolidJS Syntax zeigen? - nein. Erwähnen reicht
- [x] Observables Diagram besser / anders? Ist das möglich?
- [x] Menti nutzen? - Wäre bei den Pitfalls sehr nice
      -> Ich denke wir lassen es weg
    - vielleicht nochmal Jules fragen
- [x] Timeline anpassen
    - Farbunterschiede raus?
    - andere Zeitpunkte andeuten
    - Sven meint auf der Tonspur reicht
- [ ] Fix my Code buttons

## Zum Schluss

- [ ] Light vs. Dark - Slides vergleichen
- [x] _Whats Next & Quellen_ checken
- [x] Slides QR Code - use Github tags / pages
- [ ] Check presenter Setup with an external monitor
    - switching between the modes

# Feedback zuhause

- Vor den Fragen Quellen erwähnen
- Double Beispiel besser erklären
- Mehr ins Publikum gucken
- Gestik mehr machen
- andere Profilbild
- Komplex vs. Kompliziert
- JS auch anfangs schon stärker betonen

# Zeiten beim Probelauf

14min bis zum Livecoding
30min bis nach Livecoding
38min nach Pitfalls
46min bis zu Fragen

# Pitfall Ideen

1. Recursive computed maybe?
    - Diese Endlosschleife gibt es zumindest auch in SolidJS
    ```
    const [count, setCount] = createSignal(1);
    createEffect(() => {
        setCount(count() + 1); // Endlosschleife!
    });
    ```
2. Das simple auspacken Problem?

    - Ist im Prinzip auch ein Problem bei SolidJS - ruft man die Funktion auf oder nicht?

3. Vielleicht auf Framwork Ebene
    - Unsubscribe handling. Zumindest könnte man da den Bogen zum Observer Pattern spannen
4. Oder was simples wie: Reactivity geht kaputt bei Objekten bei unserer Implementierung

    - Was aber von den Frameworks für uns gelöst wird
    - Da hätte man den einen Übergang zu Frameworks

5. Vielleicht steckt was im Signals 2.0 Stream drin?
