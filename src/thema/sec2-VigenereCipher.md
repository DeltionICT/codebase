---
key: 2427
title: sec | Sec 2-Vigenere Cipher
difficulty: basic #basic | medium | expert
date: 2023-02-09
lang: any
author: kstarreveld
---


# {{ title }}

> #### Voorkennis:  
> * Basis Programmeren 
> * ASCII table
> * De opdracht Ceasar Cipher

> #### Doelen:  
> * leren hoe je characters omzet naar ASCII-codes en hieraan kunt rekenen (rotation)
> * leren een complexer algortime toe te passen met behulp van een key (sleutel).


### opdracht a.
* Maak een applicatie of website
* Output het vierkant van Vigenere: niet hardcoded maar met behulp van loops. [Voorbeeld](https://info.math4all.nl/Wiskundegeschiedenis/Onderdelen/RGPriemEx3.html).

### opdracht b.
* Voeg een input toe :  waar je een tekst kunt invoeren.
* Voeg een input toe :  waar je een sleutel kunt invoeren.

* Bij Vigenere roteer je iedere letter met de waarde van de corresponderende letter uit de sleutel. (a=1 b=2 etc.)

Voorbeeld: 'hallo' wordt bij met een sleutel van: 'deltion' geroteerd naar :  'kewew'.

* Werk weer eerst met de letters a-z. Maak gebruik van de ascii waarde van letters. Bijvoorbeeld in PHP kun je die vinden met de functie ord() en chr() in JavaScript met charCodeAt. 
* Wat moet je doen als je voorbij de letter z roteert?
* Voeg nu ook hoofdletters toe.

### VRAAG:
* Waarom is deze encryptie veel moeilijker te kraken?

### Uitbreiding:
* maak nu ook decrypt' die een geencrypte tekst weer decrypt met behulp van de key.
