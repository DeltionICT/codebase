---
title: MVC-Framework PHP
difficulty: medium
date: 2023-01-03
technology: html,php,database
author: rkerssies
---


# {{ title }}

<img src="{{ '/_assets/api/Laravel-logo.png' | url }}" style="width:10%;">

> ##### Voorkennis
> * programmeer-basics, functions, databases, MVC-basics, git
> * routes, controllers, actions, views, layouts, services, middleware

> ##### Doel
> * ervaringen op doen in een MVC-framework dat veelvuldig wordt gebruikt in het bedrijfsleven

* Programmeertaal: PHP of een andere backend-taal

***Taken:***
Voer de code uit volgens “best practice” en eerder geleerde technieken.
Deze opdrachten moet met een professioneel MVC-framework worden uitgevoerd,
zoals: [LARAVEL]({{ 'https://laravel.com/docs/9.x' | url }})


>>>>
1. Maak een applicatie in een framework met de volgende werking;
* als bezoeker krijg ik een 404-page als ik niet bestaande url's aanroep, zodat ik geïnformeerd ben
* als bezoeker krijg ik een 403-page als ik een url's aanroep met onvoldoende rechten, zodat ik geïnformeerd ben
* als bezoeker kan ik inloggen, zodat ik beveiligde content kan bekijken
* als bezoeker zie ik alleen menu-items die ik kan benaderen, zodat er geen verwarring ontstaat
* als bezoeker zie ik de home-page als ik de url voor het eerst benader, zodat ik direct de applicatie zie
* als bezoeker zie ik alle content-items in het menu onder een dropbox, zodat een overzichtelijke navigatie-bar heb
* als bezoeker zie ik een neutraal prettige layout, zodat ik de website blijf bezoeken
* als bezoeker kan ik een content-item kiezen, zodat dat ene artikel kan bekijken
* als gebruiker kan ik nieuwe content toevoegen, zodat ik de artikelen kan uitbreiden
* als gebruiker kan ik content verwijderen, zodat ik de verouderde artikelen kan verwijderen
* als gebruiker kan ik content wijzigen, zodat ik de artikelen kan aanpassen
* als gebruiker wil ik gallery-afbeeldingen kunnen bekijken, zodat ik kan zien welke foto’s er zijn gedeeld door andere gebruikers.
* als gebruiker wil ik afbeeldingen kunnen uploaden naar de gallery, zodat kan ik eigen foto’s kan toevoegen aan de gallery.

In het framework zijn de volgende technische eigenschappen toegepast:
* correcte routes om de requests van de url op te vangen
* overzichtelijk en goed toegepaste controllers en actions
* in een action worden gegevens op een praktische manier beschikbaar gesteld aan de correcte view
* alle databaseverzoeken worden via een model's uitgevoerd
* alle datainvoer wordt in ieder geval op de backend gevalideerd
* er is slechts één html-structuur die in de layout-file is uitgewerkt
* configureerbare waarden worden centraal opgeslagen in een config-file
* alle nieuwe classes zijn voorzien van namespaces en autoloader-proof
* de volgende mogelijkheden zijn beschikbaar: inlog, password-verificatie en password-forgot
  * bijvoorbeeld door: [Breeze]({{ 'https://laravel.com/docs/9.x/starter-kits#laravel-breeze' | url }})
* de database wordt opgebouwd en gerefreshed met 'migrations'
* alle tabellen worden voorzien van voldoende en representatieve dummy-data met seeders en factories

<hr>
2. Maak een applicatie in een framework met de volgende werking;
* als bezoeker wil ik mij kunnen registreren, zodat ik zelf ook toegang krijg tot beveiligde content
    * kanttekening 1: leeftijdscheck >= 18 jaar
    * kanttekening 2: er wordt gebruik gemaakt van emailverificatie
* meta-tags en seo worden optimaliseert met behulp van services
* de naam in de browser-tab wordt bijgewerkt m.b.v. services
* het email-account wordt bewaard in de config-file en goed beveiligd

In het framework zijn de volgende technische eigenschappen toegepast:
* middleware
* middleware op routes
* services
* classes in de lib-folder, zoals die voor email, zijn maximaal herbruikbaar en maken gebruik van namespaces

<hr>
3. Update het applicatie met de volgende werking;
* als bezoeker krijg ik een 404-page als ik niet bestaande url's aanroep, zodat ik geïnformeerd ben
* als bezoeker krijg ik een 403-page als ik een url's aanroep met onvoldoende rechten, zodat ik geïnformeerd ben
* als bezoeker kan ik inloggen, zodat ik beveiligde content kan bekijken
* als bezoeker zie ik alleen menu-items die ik kan benaderen, zodat er geen verwarring ontstaat
* als bezoeker zie ik alle content-items in het menu onder een dropbox, zodat een overzichtelijke navigatie-bar heb
* als bezoeker zie ik een neutraal prettige layout, zodat ik de website blijf bezoeken
* als bezoeker kan ik een content-item kiezen, zodat dat ene artikel kan bekijken
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
* RBAC (rollbased-access-control)
  * evt uitgevoerd met: [Bouncer]({{ 'https://github.com/JosephSilber/bouncer' | url }}) of [Laratrust]({{ 'https://laratrust.santigarcor.me' | url }})
* dummy-accounts en daarbij gekoppelde rollen en rechten worden door seeding en factories toegevoegd aan de databasetabellen

> {{technologiesTags}}
