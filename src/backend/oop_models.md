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
Een model is in dit geval een klasse voor een tabel in een database. Door gebruik te maken van deze klasse en vervolgens een subklasse te maken voor iedere tabel in de database kun je veel code hergebruiken.
Het ophalen van alle records uit een tabel is steeds weer dezelfde sql-query. Het enige dat steeds verandert is de tabelnaam. 
* [Fork de repository Database models](https://github.com/DeltionICT/databasemodel/fork) 
* Clone de repository naar je eigen laptop
* importeer mdb.sql in je mysql-server
* Bestudeer de code:
  * Er zijn 3 klassen
  * DB met een methode om een databaseconnectie op te zetten
  * Model is een abstracte klasse. Je kunt de functionaliteit uit deze klasse alleen gebruiken als je een subklasse aanmaakt
  * UserModel is een subklasse van Model
* Maak een nieuwe klasse MovieModel aan
  * Bestudeer mdb.sql
  * Net als in UserModel pas je de waarden voor table, fields en primary key (pk) aan.
* Gebruik MovieModel om alle movies weer te geven
* Maak een formulier om nieuwe movies toe te kunnen voegen

# Resultaat
Voeg je veranderingen toe aan de repository
Commit en push je aanpassingen naar je fork op github

