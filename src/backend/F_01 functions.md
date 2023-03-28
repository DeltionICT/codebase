---
title: Bais (gallery) functie
key: 2550
difficulty: basic
date: 2023-03-24
author: rkerssies
technology: ide, html, css
---

# {{ title }}

<img src="{{ '/_assets/basis/functions.png' | url }}" style="width:10%;">

> #### Voorkennis
> * Je hebt je docentenopleiding afgerond
> * Je kunt werken met een computer

> #### Dit ga je leren
> * Functies maken en gebruiken
> * Parameters meegeven aan een functie
> * Altijd een 'return' geven in een functie.
> * Per functie - één file

## Opdracht
1. Maak een map 'images' met daarin meerdere afbeeldingen (jpg, png, gif, etc).
2. Maak een functie waarin de paden van alle afbeeldingen in de map worden verzameld in een array (glob ?)
3. Loop door de array met image-paden en creeer één lange string met daarin:
    * image-tags
    * een attribute 'class' die verwijst naar een css-class voor de opmaak
    * een attribute 'src' met het pad naar de afbeelding
4. Return de één string met de gehele gallery met alle afbeeldingen 
5. Roep de functie aan en toon het resultaat in de html-structuur daaronder.

<hr>

6. Geeft de functie twee parameters mee, waarmee het pad en de extensies bij het aanroepen van de functie worden meegegeven.
7. Toon de afbeeldingen gebaseerd op het opgegeven pad en de extenties.


## Resultaat
* Een gallery waarvan de afbeeldingen wordt bepaald door de eerste parameter die de folder aanwijst
* Een gallery waarvan de afbeeldingen wordt bepaald door de tweede parameter die de extensies van de afbeeldingen bepaald


## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br>
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd
