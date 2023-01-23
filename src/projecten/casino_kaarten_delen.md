---
title: Casino kaarten delen
difficulty: basic
date: 2022-02-10
---

#### {{ course-title }}
# {{ title }}


## Casus
Dit is het begin van een online casino. De croupier is degene die kaarten deelt bij bijvoorbeeld 'black jack'. Jij gaat een programma maken dat de rol van croupier kan overnemen. Het programma kan kaarten tonen en je kunt kaarten delen.

## Backlog
Als bezoeker wil ik in kunnen loggen op de site zodat ik mijn rol kan uitvoeren.
Als croupier wil ik een spel kaarten kunnen weergeven, zodat het publiek kan zien dat alle kaarten aanwezig zijn.
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
Maak een functie waarmee een random set kaarten uit een deck op het scherm worden getoond.
De signatuur van de functie is als volgt:

```javascript
/*
* toonKaarten
* Deze functie toont een random set kaarten.
* Als je het aantal 'alle' meegeeft, dan worden alle kaarten getoond
* 
* @param aantal
*/
function toonKaarten(aantal) {
    // --- body van de functie (jouw code) komt hier ---
}
