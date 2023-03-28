---
title: MVC erven database-class
key: 2611
difficulty: medium
date: 2022-12-30
technology: html, php, functions, oop, dbq
author: rkerssies
---


# {{ title }}

<img src="{{ '/_assets/api/PHP-logo.png' | url }}" style="width:10%;">

> ##### Voorkennis
> * programmeer-basics, git, functions, oop, url-trigger
> * url-getriggerde classes inlezen en objecten aanmaken

> ##### Doel
> * Een database aanmaken met daarin een databasetabel met gegevens in records
> * Gegevens in een database-tabel opzetten en deze doormiddel van OOP en de url-trigger tonen.
> * Basic gegevens uit een databases-tabel opvragen en deze tonen


* Programmeertaal: PHP of een andere backend-taal

## Opdracht
1. Maak een lib-folder aan met een subfolder 'db'.
2. Schrijf een class met meerdere methods waarin:
   * één method de connectie maakt met de database (MySqli)
   * één method alle mogelijke queries kunnen worden uitgevoerd op basis van een enkele SQL-query string.
     zoals: select-, insert-, update- en delete-queries.   
   * elke method returned een array met data of een boolean. (in alle situsaties, m.u.v. de constructor)
3. Maak een content-class met methods in die wordt aangestuurd door de url-trigger.
Include de file met de db-class en erf deze in minstens één method.
Maak een object van de db-class, maak de connectie.
Geeft een specifieke sql-query als parameter mee aan de method. Zorg dat het resultaat wordt getoond in een tabel 
of formulier in de article-tag.    

## Op te leveren
Met de url-triller zijn er verschillende classes gemaakt die op basis van query-strings in de url worden aangeroepen.
Een aantal van deze content-classes moeten gebruik maken van de database en databasetabellen daarin, andere niet.
De database-class (connectie en uitvoeren queries) is beschikbaar voor andere classes door middel van overerven en is slechts één maal uitgewerkt.   


## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br>
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd
