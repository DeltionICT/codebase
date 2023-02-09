---
title: PHPB Timmerbedrijf
difficulty: basic
date: 2022-11-20
author: jsiewers
---


# {{ title }}

## Resultaat
* Maak een calculatieprogramma voor Timmerbedrijf "About Hout".
* Het programma kan uitrekenen wat het kost om hout te bestellen om een tafel te maken.
* Voor het tafelblad kun je kiezen uit drie verschillende houtsoorten. 
* Je kunt kiezen voor een rond of voor een rechthoekig blad. 
* De applicatie toont het aantal m2 uit en het toont de berekende prijs.
* Een test voor het programma, zodat je zeker weet dat de juiste bedragen worden gefactureerd.

<div class="html">

<div>
  <img style="width:100px;display:block;" src="https://static.edutorial.nl/php/hout/berken.jpg">
  <input type="radio" name="hout" id="berken" value="9.50" checked>
  <label for="berken">
      Berken - prijs per m2 &euro; 9,50
  </label>
</div>
<div>
  <img style="width:100px;display:block;" src="https://static.edutorial.nl/php/hout/grenen.jpg">
  <input type="radio" name="hout" id="grenen" value="8.50">
  <label for="grenen">
      Grenen - prijs per m2 &euro; 8,50
  </label>
</div>
<div>
  <img style="width:100px;display:block;" src="https://static.edutorial.nl/php/hout/hardhout.jpg">
  <input type="radio" name="hout" id="hardhout" value="11.50">
  <label for="hardhout">
      Hardhout - prijs per m2 &euro; 11,50
  </label>
</div>
<div>
<input type="radio" name="formaat" id="rechthoekig" value="rechthoekig" checked>
  <label for="rechthoekig">
      Ik wil een rechthoekige tafel
  </label>
</div>

<div>
  <label for="breedte">Breedte in mm</label>
  <input type="number" name="breedte" id="breedte" value="">
</div>
<div>
  <label for="lengte">Lengte in mm</label>
  <input type="number" name="lengte" id="lengte" value="0">
</div>
<div>
<input type="radio" name="formaat" id="rond" value="rond">
  <label for="rond">
      Ik wil een ronde tafel
  </label>
</div><div>
  <label for="diameter">Diameter in mm</label>
  <input type="number" name="diameter" id="diameter" value="0">
</div>
<div>
  <input type="submit" value="bestellen!">
</div>
</div>
