---
layout: template.njk
title: Template
key: 2503
difficulty: basic
date: 2023-02-25
author: jsiewers
technology: ide
---

# {{ title }}

> #### Voorkennis
> * Je hebt je docentenopleiding afgerond ; )
> * Je kunt werken met een computer

> #### Dit ga je leren
> * Je gaat aan de hand van een template een nieuwe opdracht maken voor een module
> * Markdown: Je maakt gebruik van markdown om de opdracht vorm te geven
> * Testen: Je test de nieuwe opdracht in een lokale omgeving
> * Indienen van een pull-request

## Opdracht
* Als docent maak je een codebase-opdracht, een opdracht, een verslag of een casus voor een project
* De opdracht wordt gemaakt in markdown (eventueel gecombineerd met HTML/CSS)
* Afbeeldingen en filmpjes worden bij voorkeur extern gehost. (youtube of via een statische externe server, uitleg volgt)
* Een opdracht moet aan de volgende punten voldoen (checklist):
    * De opdracht heeft de volgende meta-data (in yaml-format bovenaan de pagina)
        * een titel die past bij het onderwerp
        * een 'key', dit is een uniek nummer voor iedere opdracht
        * een datum
        * difficulty geeft aan hoeveel pepertjes worden getoon in de codebase (basic, medium of expert)
        * een of meerdere auteurs (komma gescheiden). Eerste letter voornaam direct gevolgd door volledige achternaam (jsiewers, pvangemert). De auteurgegevens zijn te vinden in '_data/authors.json'
        * technology: Een of meerdere afkortingen voor overeenkomende technologiën (php, hosting, ide etc.). Technology zijn te vinden in '_data/technologies.json'
    * De opdracht heeft de volgende kenmerken
        * Er is een 'blockquote' ('>' in md) met daarin:
            * Vereiste voorkennis of voorbereiding
            * Planning (= tijd beschikbaar) indien nodig
            * Leerdoelen
    * De opdracht heeft de volgende inhoud
        * Opdracht ('##' gevolgd door Opdracht)
            *  De opdracht is duidelijk en begrijpelijk geschreven voor de doelgroep, 
        * Er is een overzicht van de resultaten die moeten worden opgeleverd
        * Er is een link of beschrijving van de plek waar moet worden ingeleverd


* De opdracht heeft een 'key'. De key is uniek voor iedere opdracht. De key in deze template is gegenereerd. Verander die dus niet.
    *  Gebruik git pull om de laatste versie van de applicatie van github op te halen
    *  Houdt er rekening mee dat je een nieuwe key genereerd vanaf je localhost. Dit is vooral van belang als je meerdere opdrachten wilt toevoegen.
    *  Keynummers zijn oplopend

## Resultaat
## In- of opleveren
## Evaluatie
