---
title: FeatureTesting PHP
difficulty: expert
date: 2023-01-04
technology: php,all,tests
author: rkerssies
---


# {{ title }}

<img src="{{ '/_assets/api/Laravel-logo.png' | url }}" style="width:10%;">

> ##### Voorkennis
> * programmeer-basics, functions, OOP, MVC-basics, git
> * optioneel: MVC-framework, cronjobs

> ##### Doel
> * geautomatiseerde tests maken en toepassen op eigen geschreven code

* Programmeertaal: PHP of een andere backend-taal

***Taken:***
Voer de code uit volgens “best practice” en eerder geleerde technieken.
Deze opdrachten moet met een professioneel MVC-framework worden uitgevoerd,
zoals: [LARAVEL]({{ 'https://laravel.com/docs/9.x' | url }})


>>>>
1. Maak in een bestaande framework applicatie de volgende tests mogelijk;
* als bezoeker krijg ik een 404-page als ik niet bestaande url's aanroep, zodat ik geïnformeerd ben
* als bezoeker krijg ik een 403-page als ik een url's aanroep met onvoldoende rechten, zodat ik geïnformeerd ben

* als bezoeker kan ik inloggen, zodat ik beveiligde content kan bekijken
* als bezoeker zie ik alle content-items in het menu onder een dropbox, zodat een overzichtelijke navigatie-bar heb
* als bezoeker zie ik de home-page als ik de url voor het eerst benader, zodat ik direct de applicatie zie
* als bezoeker kan ik een content-item kiezen, zodat dat ene artikel kan bekijken
* 
* als administrator kan ik nieuwe content toevoegen, zodat ik de artikelen kan uitbreiden
* als administrator kan ik content verwijderen, zodat ik de verouderde artikelen kan verwijderen
* als administrator kan ik content wijzigen, zodat ik de artikelen kan aanpassen

* als gebruiker wil ik gallery-afbeeldingen kunnen bekijken, zodat ik kan zien welke foto’s er zijn gedeeld door andere gebruikers.
* als administrator wil ik afbeeldingen kunnen uploaden naar de gallery, zodat kan ik eigen foto’s kan toevoegen aan de gallery.
* als administrator wil ik afbeeldingen kunnen uploaden naar de gallery, zodat kan ik eigen foto’s kan toevoegen aan de gallery.

* als administrator kan ik nieuwe gebruikers toevoegen, zodat ik de gebruikersbestand kan uitbreiden
* als administrator kan ik gebruikers verwijderen, zodat ik de verouderde artikelen kan verwijderen
* als administrator kan ik gebruikers wijzigen, zodat ik de gebruikersgegevens kan aanpassen
* als administrator kan ik gebruikers forceren een nieuw wachtwoord aan te maken, om misbruik van wachtwoorden te voorkomen
* als gebruiker kan ik geforceerd worden een nieuw wachtwoord op te geven, zodat ik een veilig account behoudt en geen beveiligde content kan benaderen

In het framework zijn de volgende technische eigenschappen toegepast:
* Een featuretest per user-scenario
* featuretests zijn per thema gerubriceerd in een file
* er worden voldoende asserts per test-method uitgevoerd
* de testresultaten zijn op een prettige manier te controleren 
* (optioneel) laat de tests 's nachts uitvoeren met een cron-job en de resultaten worden op datum verzameld in een log-file

<hr>

2. Maak in een bestaande framework applicatie de volgende tests mogelijk;
* controleer de correcte werking en responses van class-methods

In het framework zijn de volgende technische eigenschappen toegepast:
* maak unittests op methods van een class in de library-folder  
* unittests zijn per thema gerubriceerd in een file
* er worden voldoende asserts per test-method uitgevoerd
* de testresultaten zijn op een prettige manier te controleren
* (optioneel) laat de tests 's nachts uitvoeren met een cron-job en de resultaten worden op datum verzameld in een log-file

> {{technologiesTags}}
