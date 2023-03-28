---
title: API-server PHP
key: 2614
difficulty: medium
date: 2023-01-05
technology: php, oop, mvc, dbo, dbq, json
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
* !!! basic PHP connect-db, query all, result to array to json
* !!! find specific id by get-param in url

!!!!!!!!!!!!! link beer-db

## Resultaat
 * een REST API-applicatie met;
 * die alle data uit verschillende databas-tabellen kan teruggeven in json 
 * die een enkel record uit verschillende database-tabellen kan teruggeven in json
 * die CRUD-acties kan uitvoeren op verschillende database-tabellen en een json response teruggeeft
 * alle responses zijn uitsluitend in JSON en hebben een key 'meta' met daarin o.a. de status, success, melding, evt validatie-fouten
 * foutieve API-requests geven een foutmelding en status in json terug
 * alle request kunnen worden getest in Postman

## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br>
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd
