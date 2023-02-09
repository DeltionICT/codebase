---
title: MVC-basics PHP
difficulty: medium
date: 2023-01-02
technology: html,php,laravel
author: rkerssies
---


# {{ title }}

<img src="{{ '/_assets/api/PHP-logo.png' | url }}" style="width:10%;">

> ##### Voorkennis
> * programmeer-basics, functions, git
> * classes, methods, overerven, databases, select en crud-queries

> ##### Doel
> * introductie op de basis principes van een MVC-framework

* Programmeertaal: PHP of een andere backend-taal

<img src="{{ '/_assets/api/mvc-concept.png' | url }}" style="width:30%;">




***Taken:***

Voer de code uit volgens “best practice” en eerder geleerde technieken.
Deze opdrachten mogen met een basic MVC-framework worden uitgevoerd,
dit is te vinden op: GitHub-[MVC2022]({{ 'https://github.com/InCubics/mvc2022' | url }}).
Dit MVC-project vereist  [clean-urls]({{ '/thema/local-domainnames/' | url }})
Video's met uitleg over basic MVC-werking en staan in de 'bestanden' van het PHP [Teams-kanaal]({{ 'https://teams.microsoft.com/l/channel/19%3a58331b90c22b40ac8c56aad6cea82c5a%40thread.skype/04a%2520MVC%2520fundamentals?groupId=88bc2e4b-541f-4638-b34b-de6546be3aa7&tenantId=2867a850-2fe5-43f7-92b9-8e326586b667' | url }}) (vraag evt om toegang) 

Pull het Git-project binnen naar jouw localhost. 
Zet een database op voor het project en gebruik daarvoor de bijgevoegde sql-file.
In de projectmap kan je het bestand app/config/config.ini zijn de database-instellingen voor het project aanpassen naar jouw specifieke situatie. 
Met de url http://localhost/mvc2022/public wordt de MVC-applicatie getoond. 
Het standaard account is: admin@app.com met het wachtwoord: password

>>>>
1. Maak een programma met een werking;
* als bezoeker krijg ik een 404-page als ik niet bestaande url's aanroep, zodat ik geïnformeerd ben
* als bezoeker krijg ik een 403-page als ik een url's aanroep met onvoldoende rechten, zodat ik geïnformeerd ben
* als bezoeker kan ik inloggen, zodat ik beveiligde content kan bekijken 
* als bezoeker zie ik alleen menu-items die ik kan benaderen, zodat er geen verwarring ontstaat
* als bezoeker zie ik alle content-items in het menu onder een dropbox, zodat een overzichtelijke navigatie-bar heb
* als bezoeker zie ik een neutraal prettige layout, zodat ik de website blijf bezoeken
* als bezoeker kan ik een content-item kiezen, zodat dat ene artikel kan bekijken
* als gebruiker kan ik nieuwe content toevoegen, zodat ik de artikelen kan uitbreiden
* als gebruiker kan ik nieuwe content verwijderen, zodat ik de verouderde artikelen kan verwijderen
* als gebruiker kan ik content wijzigen, zodat ik de artikelen kan aanpassen
* als gebruiker wil ik gallery-afbeeldingen kunnen bekijken, zodat ik kan zien welke foto’s er zijn gedeeld door andere gebruikers. 
* als gebruiker wil ik afbeeldingen kunnen uploaden naar de gallery, zodat kan ik eigen foto’s kan toevoegen aan de gallery.

Het programma heeft de volgende technische eigenschappen:
* correcte routes om de requests van de url op te vangen
* overzichtelijk en goed toegepaste controllers en actions
* in een action worden gegevens op een praktische manier beschikbaar gesteld aan de correcte view
* alle databaseverzoeken worden via een model's uitgevoerd
* alle datainvoer wordt in ieder geval op de backend gevalideerd
* er is slechts één html-structuur die in de layout-file is uitgewerkt
* configureerbare waarden worden centraal opgeslagen in een config-file
* alle nieuwe classes zijn voorzien van namespaces en autoloader-proof

<hr>
2. Maak een programma met een werking;
* als bezoeker wil ik mij kunnen registreren, zodat ik zelf ook toegang krijg tot beveiligde content
  * kanttekening 1: leeftijdscheck >= 18 jaar
  * kanttekening 2: er wordt gebruik gemaakt van emailverificatie
* meta-tags en seo worden optimaliseert met behulp van services
* de naam in de browser-tab wordt bijgewerkt m.b.v. services
* het email-account wordt bewaard in de config-file en goed beveiligd

Het programma heeft de volgende technische eigenschappen toegepast:
* middleware
* middleware op routes
* services
* classes in de lib-folder, zoals die voor email, zijn maximaal herbruikbaar en maken gebruik van namespaces

> {{technologiesTags}}
