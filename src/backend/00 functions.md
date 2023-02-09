---
title: Functions PHP
difficulty: medium
date: 2022-12-30
technology: html,php
author: rkerssies
---


# {{ title }}

<img src="{{ '/_assets/api/PHP-logo.png' | url }}" style="width:10%;">

> ##### Voorkennis
> * programmeer-basics, git

> ##### Doel
> * zelfstandig, georganiseerd en volgens bedrijfsstandaarden kunnen programmeren met functions


* Programmeertaal: PHP of een andere backend-taal

***Taken:***

Voer de code uit volgens “best practice” en eerder geleerde technieken.

1. Maak een programma met een werking;
* als bezoeker krijg ik een 404-page als ik niet bestaande url's aanroep, zodat ik geïnformeerd ben
* als bezoeker krijg ik een 403-page als ik een url's aanroep met onvoldoende rechten, zodat ik geïnformeerd ben
* als bezoeker kan ik inloggen, zodat ik beveiligde content kan bekijken
* als bezoeker zie ik alleen menu-items die ik kan benaderen, zodat er geen verwarring ontstaat
* als bezoeker zie ik alle content-items in het menu, zodat een overzichtelijke navigatie-bar heb
* als bezoeker zie ik een neutraal prettige layout, zodat ik de website blijf bezoeken
* als bezoeker kan ik een content-item kiezen, zodat dat ene artikel kan bekijken
* als gebruiker kan ik een overzicht van alle gebruikers zien, zodat ik weet wie er ook voor een nieuwsbrief is ingeschreven 

* (optioneel) als admin kan ik nieuwe content toevoegen, zodat ik de artikelen kan uitbreiden
* (optioneel) als admin kan ik nieuwe gebruikers verwijderen, zodat ik de verouderde artikelen kan verwijderen
* (optioneel) als admin kan ik gebruikers wijzigen, zodat ik de artikelen kan aanpassen
* (optioneel) als admin kan ik nieuwe gebruikers toevoegen, zodat ik het gebruikersbestand kan uitbreiden
* (optioneel) als admin kan ik nieuwe gebruikers verwijderen, zodat ik de ongewenste gebruikers kan verwijderen
* (optioneel) als admin kan ik gebruikers wijzigen, zodat ik de gebruikersgegevens kan updaten

* als user wil ik gallery-afbeeldingen kunnen bekijken, zodat ik kan zien welke foto’s er zijn gedeeld door andere gebruikers.
* (optioneel) als gebruiker wil ik afbeeldingen kunnen uploaden naar de gallery, zodat kan ik eigen foto’s kan toevoegen aan de gallery.

Het programma heeft de volgende technische eigenschappen:
* get-waarden in de url includen een php-file met daarin een functie
* overzichtelijk en georganiseerde folder- en bestandsstructuur
* onderscheid tussen noodzakelijke functies (core) en content-functies
* er is slechts één html-structuur waarin alle gerenderde onderdelen worden ingevoegd.
* configureerbare waarden worden centraal opgeslagen in een config-file
* gebruiksdata en contentdata worden opgeslagen en bijgehouden in databasetabellen
* wachtwoorden zijn gehashed in de kolom van de user-tabel


Voorbeelden van de uitwerking;
<div style="bgcolor:#AAD8EE;MARGIN:15px;">
    <img src="{{ '/_assets/api/functions/jungle_home.png' | url }}" style="width:15%;"> 
    <img src="{{ '/_assets/api/functions/jungle_gallery.png' | url }}" style="width:15%;"> 
    <img src="{{ '/_assets/api/functions/jungle_login.png' | url }}" style="width:15%;"> 
    <img src="{{ '/_assets/api/functions/jungle_userdata.png' | url }}" style="width:15%;"> 
    <img src="{{ '/_assets/api/functions/jungle_logoff.png' | url }}" style="width:15%;">
</div>

