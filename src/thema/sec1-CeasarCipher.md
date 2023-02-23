---
key: 2426
title: sec | Sec 1-Caesar Cipher
difficulty: basic #basic | medium | expert
date: 2023-02-09
lang: any
author: kstarreveld
---


# {{ title }}

> #### Voorkennis:  
> * Basis Programmeren 
> * ASCII table

> #### Doelen:  
> * leren hoe je characters omzet naar ASCII-codes en hieraan kunt rekenen (rotation)


### opdracht
* Maak een applicatie of website 
* Voeg een input toe :  waar je een tekst kunt invoeren.
* Voeg een input toe :  waar je een getal kunt invoeren waarin je de tekst gaat roteren.

Voorbeeld: 'hallo' wordt bij een rotatie van 1: 'ibmmp'.


* Werk eerst met de letters a-z. Maak gebruik van de ascii waarde van letters. Bijvoorbeeld in PHP kun je die vinden met de functie ord() en chr() in JavaScript met charCodeAt. 
* Wat moet je doen als je voorbij de letter z roteert?
* Voeg nu ook hoofdletters toe.

### Uitbreiding:
* Voeg nu ook getallen en leestekens toe 
* Trim en sanitize je input tekst.
* maak ook een knop 'decrypt' die de rotatie weer andersom doet. 
