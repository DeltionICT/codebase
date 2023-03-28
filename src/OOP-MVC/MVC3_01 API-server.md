---
title: API-server
key: 2614
difficulty: expert
date: 2023-01-05
technology: php, csharp, oop, mvc, dbo, dbq, json
author: rkerssies
---

# {{ title }}

<img src="{{ '/_assets/api/Laravel-logo.png' | url }}" style="width:10%;">

> ##### Voorkennis
> * programmeer-basics, functions, OOP, MVC-frameworks, git
> * API-toepassen, json

> ##### Doel
> * API-server opzetten om data op te halen (all & find by id)
> * CRUD-acties uit te voeren op de API-server

* Programmeertaal: PHP of een andere backend-taal

## Opdracht
Voer de code uit volgens “best practice” en eerder geleerde technieken.
Deze opdrachten moet met een professioneel M*C-framework worden uitgevoerd,
zoals: [LARAVEL]({{ 'https://laravel.com/docs/9.x' | url }})

Alle request worden gestest met een API-testtool, zoals [Postman]({{ 'https://www.postman.com' | url }})

<hr>
1. Maak een API-server in een framework met de volgende werking;
* alle responses zijn in json, met daarbij extra meta-data ook in json
* in de url is duidelijk welk model/databasetabel wordt aangesproken
* key 'all' in de url levert alle records als response
* een id (nummer) in de url levert een specifiek record uit een databasetabel op als response
* een request met data in combinatie met de post-method voegt een record toe aan een databasetabel
* een request met een id (nummer) en met een delelete-method in de url verwijdert een specifiek record uit een databasetabel
* een request met een id (nummer) en met een put-method in de url update een specifiek record in een databasetabel
* foutive API-url's geven een 404-response in json

In het framework zijn de volgende technische eigenschappen toegepast:
* correcte api-url's om de requests van de url op te vangen

<hr>

2. Maak een API-server in een framework met de volgende werking;
* maak pagination mogelijk door limits mee te geven aan de API-url met QSA
* maak sortering op opgegeven kolommen mogelijk door de kolom en de manier (ASC / DESC) mee te geven aan de API-url met QSA

In het framework zijn de volgende technische eigenschappen toegepast:
* correcte api-routes om de requests van de url op te vangen

<hr>

3. Maak een API-server in een framework met de volgende werking;
* het aantal controller wordt geminimaliseerd door de werking te centraliseren en de tabel keuze te baseren op de model-naam in de url
* de json-respons wordt door overerving op één plaats uitgewerkt voor alle verschillende responses
* voeg validatie toe voor het toevoegen en aanpassen van records

In het framework zijn de volgende technische eigenschappen toegepast:
* maak gebruik van de mogelijkheid om variabelen voor een model in de API-url te plaatsen
* instatieer een model-class en validatie-class op basis van de class-naam in de url

## Resultaat
* een REST API-applicatie met;
* die alle data uit verschillende databas-tabellen kan teruggeven in json
* die een enkel record uit verschillende database-tabellen kan teruggeven in json
* die CRUD-acties kan uitvoeren op verschillende database-tabellen en een json response teruggeeft
* alle responses zijn uitsluitend in JSON en hebben een key 'meta' met daarin o.a. de status, success, melding, evt validatie-fouten
* foutieve API-requests geven een foutmelding en status in json terug
* alle request kunnen worden getest in Postman

## Evaluatie
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd
