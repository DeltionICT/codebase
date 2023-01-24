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
* Als croupier wil ik een spel kaarten kunnen weergeven, zodat het publiek kan zien dat alle kaarten aanwezig zijn.
* Als croupier wil ik een spel kaarten kunnen schudden, zodat het publiek kan zien dat kaarten random zijn gesorteerd.

## Technische eisen
De speelkaarten is een set met afbeeldingen en die kun je [hier dowloaden](https://static.edutorial.nl/php/cards.zip)  
* Maak een functie waarmee alle kaarten worden opgenomen in een deck kaarten.
* Maak een functie waarmee kaarten worden geschud en gedeeld.
* Maak een functie waarmee je de kaarten per speler op het scherm kunt tonen.
Hieronder zie je de signatuur van de functies. Gebruik deze functies bij het bouwen van de applicatie.

```javascript
/*
* maakDeck
* 
* Deze functie maakt van een directory bestanden een array met kaarten
* De bestandsnaam van iedere kaart wordt opgeslagen in de array.
* 
* @param path = pad naar de map met kaarten
* @return deck = array met alle bestandsnamen van alle speelkaarten
*/

```
```javascript
function maakDeck() {
    // --- body van de functie (jouw code) komt hier ---
    return deck;
}
```
Maak een functie waarmee de kaarten die de spelers krijgen worden verzameld.
De signatuur van de functie is als volgt:

```javascript
/*
* deelKaarten
*
* Deze functie toont een random set kaarten.
* @param kaarten -> Aantal kaarten dat je per persoon krijgt
* @param personen -> Aantal personen dat een set kaarten krijgt
* @return sets -> Associatieve array met de kaarten per persoon
*/
function deelKaarten (kaarten, personen) {
    // --- body van de functie (jouw code) komt hier ---
    return sets
}
```

Toon de inhoud van een set kaarten op het scherm.

```javascript
/*
* toonSet
*
* @param -> string naam van een persoon
*
*
*/

function toonSet(persoon)
{
    // --- body van de functie (jouw code) komt hier ---
}
```
