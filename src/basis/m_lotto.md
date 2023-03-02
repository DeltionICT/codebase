---
title: Lotto
key: 1014
difficulty: medium #basic | medium | expert
date: 2023-01-02
author: jheuvelman
technology: all
---





> ### Voorkennis
> Programmeertaal: naar keuze

### Resultaat

1.  Vraag de gebruiker zijn 6 lotto getallen (getal tussen 1 en 42) in te geven. Het programma controleert de ingevoerde getallen op juistheid en geeft een melding wanneer de getallen niet tussen de 1 en 42 zijn. Sla de ingevoerde lotto getallen op in een array.
2.  Simuleer een trekking, dit doe je door 6 willekeurig getallen te genereren (Random). Ook deze getallen sla je op in een array.
3.  Doe een validatie van de getallen, de volgende opties geven een prijs:
    - 3 juiste cijfers 10 euro
    - 4 juiste cijfers 1000 euro
    - 5 juiste cijfers 100.000 euro
    - 6 juiste cijfers 10.000.000 euro  
  
Let op dat bij het tonen van de getallen deze van laag naar hoog getoond
worden.

#### Voorbeeld
```shell
Geef je lotto getallen (getallen moeten tussen 1 en 42 liggen):
Geef lotto nummer 1:
9
Geef lotto nummer 2:
11
Geef lotto nummer 3:
22
Geef lotto nummer 4:
23
Geef lotto nummer 5:
33
Geef lotto nummer 6:
34

Je gekozen cijfers zijn: 9 11 22 23 33 34
de trekking cijfers zijn: 7 8 12 21 34 35 
Je hebt 0 euro gewonnen
```