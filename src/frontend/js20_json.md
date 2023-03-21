---
key: 2542
title: js20 | JSON
difficulty: basic #basic | medium | expert
date: 2023-01-31
author: cstegeman
technology: js
---

# {{ title }}

> #### Voorkennis:  
> * JS basics: variabelen, console.log(), innerHTML
> * JS Arrays

> #### Doelen:  
> * structuur / opbouw van JSON leren kennen
> * leren werken JSON: JavaScript Object Notation

Een <i>array</i> gebruik je als je een lijst wilt oplslaan, zoals een lijst met namen, autos, prijzen, enz..
Het nadeel aan een Javascript array is dat ze niet "assiociatief" zijn; je kunt ze alleen met een nummer aanroepen
en niet bij name, met een <i>key</i> of zo:<br>
```javascript
let studenten = [
    ["Jan", "", "Jansen"],
    ["Piet", "de", "Grote"]
];
console.log("De naam van de tweede persoon is: " + studenten[1][0] + " "+ studenten[1][1] + " "+ studenten[1][2]);
// levert op: "De naam van de tweede persoon is: Piet de Grote"
```
Een Javascript object is wel assiociatief. Hieronder een array (!) met 2 objecten:
```javascript
let studenten = [
    { "voornaam":"Jan", "tv":"", "achternaam":"Jansen" },
    { "voornaam":"Piet", "tv":"de", "achternaam":"Grote" }
];
let student = studenten[1];
console.log("De naam van de tweede persoon is: " + student.voornaam + " "+ student.tv + " "+ student.achternaam);
// levert op: "De naam van de tweede persoon is: Piet de Grote"
```

### opdracht
* probeer bovenstaande voorbeelden uit

Bekijk de uitleg  JSON op [w3schools](https://www.w3schools.com/js/js_json.asp)<br>

* Maak een output-div waar je via een for-loop een tabel met studenten in zet m&eacute;t de klas waar ze in zitten:
    * Maak een JSON array met 5 namen van studenten: voor- en achternaam, tussenvoegsel, en id van een klas. 
    * Maak een array "aGroups" aan,
    * als aGroups[2] == "SD2A", dan heeft "SD2A" het id 2.
    * Maak een output-div waar je via een for-loop een tabel met studenten in zet m&eacute;t de klas waar ze in zitten

<!-- <img src="{{ '/_assets/frontend/js14_base.png' | url }}" alt="Voorbeeld arrays" style="width:350px"> -->

