---
title: Een database model maken
key: 2521
difficulty: basic
date: 2023-01-01
author: jsiewers
technology: oop
---


> #### Voorkennis
> * Je heb basis programmeerkennis
> * Je hebt basiskennis van programmeren voor het web

> #### Dit ga je leren
> * Je gaat object georiënteerd leren programmeren
> * Je gaat herbruikbare code leren schrijven
> * Je gaat overerving van klassen toepassen

## Opdracht Models
Een model is een term die vaker wordt gebruikt als het gaat om objecten en klassen die met een database te maken hebben.  
Als je een applicatie bouwt met een database, dan merk je dat je veel code makkelijk kunt hergebruiken. Het opvragen van alle users of juist 1 user is code die je in veel applicaties tegenkomt. Een database-model is een klassse die het werken met een database eenvoudiger maakt en het herhalen van code voorkomt.

In deze opdracht ga je een algemene klasse maken die met een database kan communiceren. Daarna ga je gebruik maken van 'overerving' om subklasses te maken voor verschillende tabellen in de database.
* [Fork de repository Database models](https://github.com/DeltionICT/databasemodel/fork) 
* Clone de repository naar je eigen laptop
* importeer mdb.sql in je mysql-server
* Bestudeer de code:
  * Er zijn 3 klassen
  * DB met een methode om een databaseconnectie op te zetten
  * Model is een abstracte klasse. Je kunt de functionaliteit uit deze klasse alleen gebruiken als je een subklasse maakt
  * UserModel is een subklasse van Model
* Nu ben jij aan zet: Maak een nieuwe klasse MovieModel aan
  * Bestudeer mdb.sql
  * Net als in UserModel pas je de waarden voor table, fields en primary key (pk) aan.
* Gebruik MovieModel om alle movies weer te geven
* Maak een formulier om nieuwe movies toe te kunnen voegen


# Resultaat
Voeg je veranderingen toe aan de repository
Commit en push je aanpassingen naar github

