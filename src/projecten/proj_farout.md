---
title: PROJ FarOut
difficulty: medium
date: 2022-11-10
author: jsiewers
---


# {{ title }}

> ##### Voorkennis
> * Backend frameworks, frontend frameworks, scrum, git 
> * Programmeertaal: vrije keuze
> * Kennis van projectmatig werken en/of Scrum

## Resultaat
* Een overzicht van geplande en gerealiseerde taken. Gebruik hiervoor een scrumboard of andere projecttool zoal Github, Azure DevOps of vergelijkbaar.
* Minimaal 4 wireframes van de belangrijkste schermen
* Een stroomschema/activity diagram van minimaal 2 processen
* Een presentatie van de volledig werkende website.
* Een codereview waarin je jouw deel van de code uitlegt.
* Een evaluatie met aanbevelingen ten aanzien van het product en het proces
* Een kort verslag waarin je uitlegt wat je hebt geleerd van het project.

## Uitvoering
Dit project kun je met 2 - 4 studenten uitvoeren.
Ideaal is een combinatie van 2 personen die het front-end gedeelte uitvoeren en 2 personen die het back-end gedeelte voor hun rekening nemen.


### Casus
Reisbureau FarOut wil een applicatie waarin de medewerkers van het reisbureau alle data rondom reizen kunnen beheren. Reizigers kunnen reizen boeken en ze kunnen hun eigen reisgegevens inzien.
Het reisbureau heeft al een complete database met gegevens, deze (sql) database moeten jullie gebruiken als backend van de applicatie.


### Backlog
* Als bezoeker kan ik me registeren als klant
* Als klant wil ik een overzicht kunnen zien van al mijn bestellingen
* Als bezoeker wil ik een overzicht kunnen zien van alle landen waar reizen naartoe gaan.
* Als bezoeker wil ik kunnen zien welke reizen beschikbaar zijn naar een stad van mijn keuze.
* Als medewerker wil een overzicht van alle klanten weergeven. (= ‘proof of concept’).
* Als medewerker wil ik een klant kunnen selecteren en kunnen zien welke boekingen die klant heeft.
* Als medewerker wil ik een klant kunnen selecteren en kunnen zien hoeveel die klant nog moet betalen voor de boekingen die zijn gedaan.
* Als medewerker wil ik een klant kunnen selecteren en kunnen zien naar welke steden die klant al eerder is geweest.
* Als medewerker wil ik een stad kunnen selecteren en kunnen zien welke reizen er mogelijk zijn naar die stad.
* Als medewerker wil ik een land en stad kunnen selecteren en een datum op kunnen geven zodat ik kan zien welke reizen mogelijk zijn in een bepaalde periode naar een bepaalde stad.
* Als medewerker kan ik een klant opzoeken en voor die klant een reis boeken.
* Als medewerker kan ik een klant opzoeken en voor die klant een reis annuleren. (boeking verwijderen)
* Als medewerker kan ik nieuwe reizen toevoegen
* Als medewerker kan ik nieuwe klanten toevoegen
* Als medewerker kan ik een land selecteren en moet ik aangeven hoeveel dagen maximaal of minimaal een reis mag duren. De reizen die voldoen aan de criteria worden weergegeven.
* Als medewerker wil ik een top 10 kunnen weergeven van de meest geboekte reizen.
* Als medewerker wil ik een overzicht kunnen genereren van alle landen gesorteerd op het aantal keer dat ze zijn geboekt.


### Technisch ontwerp (API)
&nbsp;   
{{ 'https://static.edutorial.nl/projecten/uitleg_frontend_backend.svg' | image: 'Technisch ontwerp', 60 }}

### ERD  
&nbsp;     
{{ 'https://static.edutorial.nl/projecten/reisbureau-erd.png' | image: 'ERD Handig Joh', 80 }}


### Overige Documentatie
* [SQL Data van het reisbureau](https://static.edutorial.nl/projecten/reisbureau_001.sql)
* [Voorbeeld van de JSON data van reserveringen](https://static.edutorial.nl/projecten/reservations.json)
* [Voorbeeld van een reservering van 1 klant](https://static.edutorial.nl/projecten/customer_reservations.json)

