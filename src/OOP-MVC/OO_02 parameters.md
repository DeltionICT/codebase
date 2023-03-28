---
title: OOP Parameters in methods
key: 2601
difficulty: basic
date: 2023-03-24
author: rkerssies
technology: ide, html, css, php, functions, csharp, oop
---

# {{ title }}

<img src="{{ '/_assets/api/PHP-logo.png' | url }}" style="width:10%;">
<img src="{{ '/_assets/api/c-sharp.png' | url }}" style="width:10%;">

> #### Voorkennis
> * Classes met methods maken
> * Objecten van classes maken en methods daarop aanroepen

> #### Dit ga je leren
> * De herbruikbaarheid van classes en methods vergroten
> * De leesbaarheid en uitbreidbaarheid vergroten
> * Het vergroten van de controle op gegevens bij in- en uitvoer 


## Opdracht
Houdt de volgende structuur aan in je code:
    * lezen van classes
    * objecten maken en logica uitvoeren en het renderen van gegevens
    * tonen van html-structuur en het weergeven van de gerenderde gegevens.
Werk met een 'single-point of entry' (bijv: index.php)

1. Maak een class met één method. Zorg dat de method een parameter mee krijgt.
    In de method wordt de parameter met één opgehoogd en daarna teruggeven.
    Maak een object van de class, roep de method daarop aan waarin de parameter een waarde meerkrijgt.
    Toon het eindresultaat op het scherm.

2.  Geef de parameter in de class-method een standaard waarde mee.
    Maak een tweede object van de class aan en roep de method aan ZONDER een paramater mee te geven.
    Zorg er optioneel voor dat het datatype van de parameters wordt gecontroleerd. 
    Toon het eindresultaat op het scherm.

3. Pas de class met de werking van een subnet-calculator;
    * Geef de class-method twee parameters; een IP-adres (bijv: 192.168.2.10) en <br>
      het subnet (/8, /16 of /24) mee. Tip: dec-bin functie en AND-functie.
    * Laat de method het netwerk-gedeelte bepalen van het ip-adres op basis van het subnet.
    * Toon het resultaat op het scherm.
    * Breid de werking uit met een formulier waarin verstuurde de waarden als parameters worden ingevoerd. 

## Resultaat
Meerdere objecten van dezelfde class.
Elk object krijgt verschillende parameters mee en geeft correcte resultaten terug. 


## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br>
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd
