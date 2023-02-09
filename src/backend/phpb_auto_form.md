---
title: PHPB Autoformulier
difficulty: basic
date: 2022-11-10
author: jsiewers
---


# {{ title }}

> ##### Voorkennis
> * Basiskennis HTML
> * Programmeertaal: PHP


## Resultaat
Een formulier waarbij je kunt kiezen uit minimaal 5 automerken (of games of tandpasta of ander onderwerp).  
Zodra je je keuze hebt gemaakt en je verstuurt het formulier, dan worden er 2 plaatjes weergegeven van je favoriete automerk (of game of wat dan ook).  
Als dat is gelukt bewaar je de opdracht en maak je een kopie van je werk.

Breidt nu de vorige opdracht uit met de mogelijkheid om meerdere items te selecteren. 
Je kunt nu plaatjes van meerdere automerken, games e.d. tonen op basis van de gemaakte selectie.

<div class="html">
    <form action="https://static.edutorial.nl/php/auto_choice.php" method="post">
        <label style="display:block;" for="auto">Kies een auto</label>
        <select name="auto[]" multiple>
            <option>audi</option>
            <option>mercedes</option>
            <option>ford</option>
        </select><br>
        <input type="submit">
    </form>
</div>