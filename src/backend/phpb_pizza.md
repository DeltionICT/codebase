---
title: PHPB Pizza
difficulty: basic
date: 2022-11-20
author: jsiewers
---


# {{ title }}

## Resultaat
* Een website voor Pizzeria "circulare delicioso" waar je pizza's kunt bestellen.
* Maak het formulier zoals in het voorbeeld
* Nadat het formulier is ingevuld en verstuurd:
    * De juiste prijs voor de pizza wordt getoond
    * De prijs voor eventuele extra's wordt getoond.

## Voor pizza-ninja's....
* Zorg ervoor dat je meerdere pizza's tegelijk kunt bestellen
* Per pizza kun je extra's bijbestellen

<div class="html">
<div>
  <img style="width:100px;display:block;" src="https://static.edutorial.nl/php/pizzas/spianata_piccante.jpg">
  <input type="radio" name="pizza" id="spianata_piccante" value="12.50" checked>
  <label for="spianata_piccante">
      Pizza Spianata Piccante &euro; 12,50
  </label>
</div>
<div>
  <img style="width:100px;display:block;" src="https://static.edutorial.nl/php/pizzas/seppi.jpg">
  <input type="radio" name="pizza" id="seppi" value="11.50">
  <label for="seppi">
      Pizza Seppi &euro; 11,50
  </label>
</div>
<div>
  <img style="width:100px;display:block;" src="https://static.edutorial.nl/php/pizzas/tirato.jpg">
  <input type="radio" name="pizza" id="tirato" value="10.50">
  <label for="tirato">
      Pizza Tirato  &euro; 10,50
  </label>
</div>
<div>
  <input type="checkbox" id="olijven" name="olijven">
  <label for="olijven">
      Ik wil extra olijven bijbestellen &euro; 2,50
  </label>
</div>
<div>
  <input type="checkbox" id="kaas" name="kaas">
  <label for="kaas">
      Ik wil extra kaas bijbestellen &euro; 1,50
  </label>
</div>
<div>
  <input type="checkbox" id="bezorgen" name="bezorgen">
  <label for="bezorgen">
      Ik wil de pizza laten bezorgen &euro; 3,50
  </label>
</div>
<div>
  <input type="submit" value="bestellen!">
</div>
</div>

## Testen
Een pizza Tirato met extra kaas en bezorgkosten toont het volgende op het scherm:

Bedankt voor uw bestelling!
* U heeft een pizza: &euro; 10,50
* U heeft extra kaas besteld: &euro; 1,50
* U wilt de pizza laten bezorgen: &euro; 3,50
* Als de pizzabezorger komt moet u &euro; 15,50 betalen!

Als je een pizza Spinacio Piccante  besteld met extra olijven en je laat hem **niet** bezorgen, dan zie je op het scherm:

Bedankt voor uw bestelling!
* U heeft een pizza: &euro; 12,50
* U heeft extra olijven besteld: &euro; 1,50
* U komt de pizza zelf afhalen
* U betaalt &euro; 14,00 aan onze kassa.
