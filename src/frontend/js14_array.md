---
key: 2541
title: js14 | Array
difficulty: basic #basic | medium | expert
date: 2023-01-31
author: cstegeman
technology: js
---


# {{ title }}

> #### Voorkennis:  
> * JS basics: variabelen, console.log(), innerHTML

> #### Doelen:  
> * leren werken Javascript arrays

Een array gebruik je als je een lijst wilt oplslaan, zoals een lijst met namen, autos, prijzen, enz.<br>
Bekijk het volgende voorbeeld van JS arrays op [w3schools](https://www.w3schools.com/js/js_arrays.asp)<br>

### opdracht
* maak de voorbeeld array met de autos van w3Schools en zet er ook een tweede array bij met de prijs van de auto (getallen hoeven in een array niet met quootjes er omhee geschreven worden!)<br>
Zet in een DIV de volgende tekst neer: "De <i>Saab</i> kost €<i>17000</i>" (cursief gedrukte tekst en getallen komen uit de array)
* zet (kopieer) die regels er voor de andere 2 auto's nog eens onder
* kijk op de w3Schools site en zorg dat de auto's met een for-loop toegeveoegd worden i.p.v. 3 nieuwe regels te schrijven 
* Je moet meer auto's met hun prijs kunnen toevoegen: 
    * maak 2 input-velden aan en een button met opschrift "toevoegen"
    * kijk in het w3Schools voorbeeld hoe je met <i>push</i> elementen kan toevoegen
    * Zorg dat als je op "toevoegen" klikt, in de ene array de auto, en in de andere de prijs wordt toegevoegd én zorg dat de lijst met auto's ververst wordt
* Zet onder de lijst de tekst: "De totaalprijs van de <i>4</i> auto's is: €<i>67000</i>" en dat veranderd automatisch als het aantal of de prijs van de auto's veranderd

<img src="{{ '/_assets/frontend/js14_base.png' | url }}" alt="Voorbeeld arrays" style="width:250px">


### Uitbreiding:
* Voeg inputs toe zodat je ook een auto kunt verwijderen of aanpassen
