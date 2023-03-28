---
title: OOP Use een classe en namespaces
key: 2605
difficulty: basic
date: 2023-03-24
author: rkerssies
technology: ide, html, css, php, functions, csharp, oop
---

# {{ title }}

<img src="{{ '/_assets/api/PHP-logo.png' | url }}" style="width:10%;">

> #### Voorkennis
> * Classes met methods maken
> * Objecten van classes maken en methods daarop aanroepen
> * Het gebruik van public/private properies en methods
> * classes elkaars methodes laten overerven

> #### Dit ga je leren
> * classes met dezelfde naam uniek maken met namespaces

## Opdracht
Houdt de volgende structuur aan in je code:
* lezen van classes
* objecten maken en logica uitvoeren en het renderen van gegevens
* tonen van html-structuur en het weergeven van de gerenderde gegevens.
Werk met een 'single-point of entry' (bijv: index.php)

1. Maak een index-file en twee folders in jouw projectmap. De mappen hebben de naam 'lib' en 'vendor'.
Maak ik één van de twee een class-file aan met een class met daarin een method om te testen.<br> 
Kopieer de file 1-op-1 naar de andere map. Je hebt nu twee classes met dezelfde naam. 
Dit simuleert een eigen gemaakte class met een naam die overeenkomt met een class die jij via een package (externe partij / venor)
hebt geïmporteerd.<br> 
Probeer van beide classes een object aan te maken. Achterhaal wat hier het probleem is.

2. Geef beide classes een eigen unieke namespace. 'Use' deze namespaces in de index-file en geef deze een alias mee.
Maak objecten van de 'alias-namen' die de classes hebben gekregen.<br>
Achterhaal hoe het eerdere probleem is opgelost.

3. Verander de namespaces 1-op-1 naar de mappenstructuur waar de class-file staat.
Maak objecten van de 'alias-namen' die de classes hebben gekregen.<br>
Zoek uit waarom deze manier van namespaces gebruiken als 'best-practice' wordt gezien.

## Resultaat
Kennis van namespaces en het gebruik hiervan (kunnen toepassen)

## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br>
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd
