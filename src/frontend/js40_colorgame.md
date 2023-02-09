---
title: js40 | colorgame
difficulty: medium #basic | medium | expert
date: 2023-01-31
author: cstegeman
technology: js
---


# {{ title }}

> #### Voorkennis:  
> * JS Functions, loops, arrays, if-statements

> #### Doelen:  
> * leren werken met lokale en globale variabelen
> * leren werken met arrays 
> * leren werken met JS Interval [w3schools](https://www.w3schools.com/jsref/met_win_setinterval.asp)
> * aanroepen van functions vanuit functions 
> * programmastructuur lezen vanuit stroomdiagram

### opdracht
Maak de hieronder weergegeven colorgame met behulp van [deze tutorial](https://std.stegion.nl/codebase/js40_colorgame/game1_0.html).<br>

* Bij starten van de game
    * wisselen de 9 kleuren van het bovenste blok
    * doel is om op het 1 van de 9 blokjes te klikken die dezelfde kleur heeft als het onderste brede blok
    * bij elke juiste hit krijg je punten, bij een gemiste, of te late klik, gaan er punten af 
    * de puntentelling wordt in het rechterblok bijgehouden
* In het linkerblok kun je instellingen wijzigen om de moeilijkheidsgraad te veranderen
    * het aantal kleuren in het bovenste blok van 9
    * aantal keer in 1 beurt dat de kleuren wisselen
    * hoe lang eer tussen het wisselen van de kleuren zit
    * of de basiskleur ook steeds mee wisselt

<img src="{{ '/_assets/frontend/colorgame.png' | url }}" alt="colorgame" style="width:600px">


