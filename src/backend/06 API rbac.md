---
title: API-rbac PHP
key: 1419
difficulty: expert
date: 2023-01-07
technology: php, dbo, dbq
author: rkerssies
---



<img src="{{ '/_assets/api/Laravel-logo.png' | url }}" style="width:10%;">

> ##### Voorkennis
> * programmeer-basics, functions, OOP, MVC-frameworks, API, git
> * API-toepassen, json

> ##### Doel
> * gebruik tokens en roll based access control (rbac)

* Programmeertaal: PHP of een andere backend-taal

***Taken:***
Voer de code uit volgens “best practice” en eerder geleerde technieken.
Deze opdrachten moet met een professioneel M*C-framework worden uitgevoerd,
zoals: [LARAVEL]({{ 'https://laravel.com/docs/9.x' | url }})

Alle request worden gestest met een API-testtool, zoals [Postman]({{ 'https://www.postman.com' | url }})

<hr>
1. Maak een API-server in een framework met de volgende werking;
* inloggen en een token ontvangen voor gebruik in de front-end door inloggegevens te sturen naar een API-url
* begrip SSL vereiste voor het gebruik van tokens
* refresh token op verzoek van een API-url
* een token verloopt na een geconfigureerde tijdsduur (config-file)
* API-verzoeken gebaseerd op de juiste authenticatie
* incorrecte permissies geven een 403 in json
* foutive API-url's geven een 404-response in json

In het framework zijn de volgende technische eigenschappen toegepast:
* token-functionaliteit
    * [Sanctum]({{ 'https://laravel.com/docs/9.x/sanctum' | url }})
    * [Passport]({{ 'https://laravel.com/docs/9.x/passport' | url }})


<hr>

2. Maak een API-server in een framework met de volgende werking;
* rollen gebruik
* er zijn meerdere verschillende permissies/abilities per rol mogelijk
* API-verzoeken geven json-response gebaseerd op autorisatie uitgevoerd op de geldende permissies
* incorrecte permissies geven een 403 in json

In het framework zijn de volgende technische eigenschappen toegepast:
* correcte api-routes om de requests van de url op te vangen

> ##### Op te leveren
> * een uitbreiding op een basis REST API-applicatie met;
>   * alle request kunnen alleen worden uitgevoerd met een valide token
>   * API-request kunnen alleen worden uitgevoerd met een valide token
>   * foutive tokens leveren een 403 in json
>   * dat API-request alleen kunnen worden uitgevoerd als het token aan een gebruiker is gekoppeld met de juiste permissies 
>   * tokens zijn gekoppeld met een gebruiker die (meerdere) rollen mogen hebben
>   * rollen zijn dynamisch gekoppeld aan één of meerdere permissies/abilities (bijv. via relaties in een database)
>   * alle request kunnen worden getest in Postman



