---
title: MVC CRUD
key: 2612
difficulty: expert
date: 2022-12-30
technology: html, php, csharp, functions, oop, dbq, dbo
author: rkerssies
---


<img src="{{ '/_assets/api/mvc.png' | url }}" style="width:10%;">

> ##### Voorkennis
> * Programmeer-basics, git, functions, oop, url-trigger, dbo, dbq
> * Erven van een database-class die connectie met de database maakt en queries uitvoert.

> ##### Doel
> * Een overzicht tonen van alle records in een database-tabel (Read)
> * Gegevens toevoegen aan een database-tabel door middel van een query in een backend-taal (Create)
> * Gegevens verwijderen aan een database-tabel door middel van een query in een backend-taal (Delete)
> * Gegevens aanpassen aan een database-tabel door middel van een query in een backend-taal (Update)
> NB: CRUD = Create-Read-Update-Delete.


* Programmeertaal: PHP of een andere backend-taal

## Opdracht
1. Maak een content-class met een method in die wordt aangestuurd door de url-trigger.
   Include de file met de db-class en erf deze in minstens één method.
   Zorg dat de database-class wordt geinclude en overerft on de constructor van de content-class. 
2. Maak een method (index) waarin alle gegevens uit de databse-tabel worden opgehaald en worden getoond in een orderlijke tabel.
   Voeg twee extra kolommen toe voor anker-tags voor het aanpassen en verwijderen (later toevoegen). 

3.Maak één extra anker aan boven de tabel de overzichts-weergave (index) met een url dat verwijst naar de index en een 
querystring (qsa) dat de trigger doorstuurt naar de <b>add-method</b>.
Maak een add-method aan in de content-class en laat deze een toevoeg-formulier tonen.
Bij het klikken van de submit-knop wordt dezelfde url met qsa aangeroepen.
Laat de backend de verstuurde gegevens controleren. 
Als de backend-validatie correct is, voeg de gegevens dan toe als nieuw record aan de database-tabel en 
redirect daarna terug naar de weergave van de overzichts-tabel.

4. Maak één extra anker in de laatste extra kolom van de getoonde overzichts-tabel (index) met een url dat verwijst naar de index en een
   querystring (qsa) dat de trigger doorstuurt naar de <b>delete-method</b>, samen met het id in de query-string van de url.
   Maak een delete-method aan in de content-class en laat deze een delete-formulier tonen.
   Bij het klikken van de submit-knop wordt dezelfde url met qsa aangeroepen (id met waarde).
   Verwijder het record uit de database-tabel en redirect daarna terug naar de weergave van de overzichts-tabel. 

4. Maak één extra anker in de een-na-laatste extra kolom van de getoonde overzichts-tabel (index) 
   met een url dat verwijst naar de index en een
   querystring (qsa) dat de trigger doorstuurt naar de <b>update-method</b>, samen met het id in de query-string van de url.
   Maak een update-method aan in de content-class en laat deze een update-formulier tonen.
    Bij de eerste keer dat de page wordt aangeroepen, wordt een query uitgevoerd die de gegevens van het id in de url ophaald en in 
    de formulier-velden plaatst.
   Bij het klikken van de submit-knop wordt dezelfde url met qsa aangeroepen (id met waarde).
   Als de backend-validatie niet correct is worden de eerdere verstuurde formuliergegevens opnieuwe getoond (niet die uit de database-tabel).
   Als de backend-validatie correct is, wordt het record in de database-tabel aangepast en daarna 
   wordt er een redirect naar de weergave van de overzichtstabel.


## Op te leveren
Beheer mogelijkheid (CRUD) maken op gegevens in een database-tabel door gebruik te maken van een backend-taal


## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br>
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd
