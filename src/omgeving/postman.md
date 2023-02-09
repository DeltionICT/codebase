---
title: Postman
difficulty: medium
date: 2023-01-14
technologies: [all]
author: rkerssies
---

# {{ title }}

<img src="{{ '/_assets/_icons/postman.png' | url }}" style="width:10%;">

> ##### Voorkennis
> * API-requests, json

> ##### Doel
> * de response van verschillende API-requests testen/uitvoeren

Een van de handigste tools om API's mee te testen en om code te genereren in meerdere talen en 
frameworks om API's te benaderen is [POSTMAN](https://www.postman.com/). Deze tool is gratis.


<img src="{{ '/_assets/omgevingen/test-api-postman-collection.png' | url }}" style="width:66%;">

Voer de benodigde requests op een API-server (met de methods: GET,POST, PUT, PATCH, DELETE) en
bekijk het resultaat in JSON. Dit kan ook 'pritty' worden getoond.

Sla de verschillende request op voor hergebruik, al dan niet in categorieën. 
Zo is het niet nodig om de data steeds opnieuw in te voeren bij een add- of update-request.    

Ook is het gebruik van tokens toe te passen op deze requests in het tabblad "Authentication" als 'Bearer-token'.
Dit kan ook worden hergeruikt met variabelen net zo als de domeinnaam van de API-server.


<b>NB:</b> Een API-server geeft IN ALLE GEVALLEN data terug in de vorm van json of bijvoorbeeld in XLM.
Dus er wordt NOOIT een html-webpage getoond, ook geen 404-webpage !



