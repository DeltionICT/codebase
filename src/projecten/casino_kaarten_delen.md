---
title: Casino kaarten delen
difficulty: basic
date: 2022-02-10
---

#### {{ course-title }}
# {{ title }}


## Casus
Dit project bestaat uit een aantal opdrachten. Als alle opdrachten die starten met de naam 'Casino' zijn uitgevoerd, dan heb je een online kaartspel gemaakt. In dit deel van het Casino ga je er voor zorgen dat je een kaartspel kunt tonen en kaarten kunt schudden.
In dit eerste deel werk je de rol van de croupier uit (= degene die de kaarten uitdeelt).

## Backlog
Als bezoeker wil ik in kunnen loggen op de site zodat ik mijn rol kan uitvoeren.
Als croupier wil ik een spel kaarten kunnen weergeven, zodat het publiek kan zien dat alle kaarten aanwezig zijn.
Als croupier wil ik bepalen welke kaarten ik weer wil geven op basis van kleur en waarde
Als croupier wil ik een spel kaarten kunnen schudden, zodat het publiek kan zien dat kaarten random zijn gesorteerd.

## Technische eisen
De speelkaarten is een set met afbeeldingen en die kun je [hier dowloaden](https://static.edutorial.nl/php/cards.zip)  
Maak een functie waarmee alle kaarten worden opgenomen in een deck kaarten.
Dit is de signatuur van de functie:

```javascript
/*
* maakDeck
* Deze functie maakt van een directory bestanden een array met kaarten
* De bestandsnaam van iedere kaart wordt opgeslagen in de array.
* 
* @param path = pad naar de map met kaarten
* @return deck = array met alle bestandsnamen van alle speelkaarten
*/

function maakDeck() {
    // --- body van de functie (jouw code) komt hier ---
    return deck;
}
```
Maak een functie waarmee  kaarten uit een deck op het scherm worden getoond.
De signatuur van de functie is als volgt:

```javascript
/*
* toonKaarten
* Deze functie toont de kaarten met een bepaalde kleur en/of waarde
* Als je de kleur 'alle' meegeeft, dan worden alle kaarten getoond ongeacht de kleur
* Als je de aarde 'alle' meegeeft, dan worden alle kaarten getoond ongeacht de waarde
* 
* @param $kleur = alle, harten, schoppen, ruiten of klaver
* @param $waarde = alle, 2, 3, 4, ... boer, vrouw, heer, aas
*/
function toonKaarten(kleur, waarde) {
    // --- body van de functie (jouw code) komt hier ---
}
