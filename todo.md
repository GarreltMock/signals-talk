# Todos

- [x] Animieren
    - [x] Timeline
    - [x] Adoption Logos
- [x] "Signals sind nichts neues" schöner machen
- [x] Observer Probleme
- [x] **Pitfall #3**
- [x] Sollen wir beim Live Coding das Observer Pattern als ausgang nehmen?
    - Oder das Observer Pattern auch selbst entwickeln?
    - > Nein. Es ist glaube ich ganz gut so
- [ ] Signals Comeback - Knockout.js Probleme
- [ ] Beim Live Coding noch auf das Dependency Tracking eingehen
    - [ ] Hier mir Alien Signals anschauen

## Vielleicht

- [ ] Alternative SolidJS Syntax zeigen?
- [x] Observables Diagram besser / anders? Ist das möglich?
- [ ] Menti nutzen? - Wäre bei den Pitfalls sehr nice
- [ ] EnterJS Stand Folie am Ende?

## Zum Schluss

- [ ] Light vs. Dark - Slides vergleichen
- [ ] Whats next
- [ ] Quellen
- [ ] Slides QR Code - use Github tag

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
