---
title: OOP PHP
difficulty: medium
date: 2023-01-01
technology: php
author: rkerssies
---

# {{ title }}

<!-- <img src="{{ '/_assets/api/PHP-logo.png' | url }}" style="width:10%;"> -->
{{ '/_assets/api/PHP-logo.png' | url | image: 'Logo PHP', 10 }}
> ##### Voorkennis
> * programmeer-basics, functions, git

> ##### Doel
> * zelfstandig, georganiseerd en volgens bedrijfsstandaarden kunnen programmeren in een object geöriienteerde programmeertaal

* Programmeertaal: PHP of een andere backend-taal

### Taken
Voer de code uit volgens “best practice” en eerder geleerde technieken.

1. Maak een programma met een werking; 
   * als bezoeker wil ik gegevens (NAW) van een enkele student kunnen tonen

   * Het programma heeft de volgende technische eigenschappen:
   * alle logica staat in classes beschreven
   * elke class staat in een eigen php-bestand
   * logica is zo veel mogelijk uitgesplitst per method
   * methods worden maximaal herbruikbaar gemaakt door gebruik van parameters 
   * alle methods geven een resultaat terug (return), anders een 'true' of 'false'.
   * initialiseer de class en roep de methods op het object aan
   * render de uitkomst en toon deze in de article-tag
   * respecteer de volgende code-structuur:
     * class(es) (in)lezen
     * logica; initaliseren classes, aanroepen methods en renderen
     * weergeven van de gerenderde waarden in de html-structuur
     
     Voer de code uit volgens “best practice” technieken.


2. Maak een programma met een werking;
   * als bezoeker wil ik gegevens (NAW) van een enkele student kunnen tonen

   Het programma heeft de volgende technische eigenschappen:
   * maak gebruik van 'type hinting' bij de parameters 
   * maak gebruik van een 'spread operator' in array-expressies
   * benoem de methods als 'public' en waar nodig/wenselijk 'private'
   * declareer voor de class public en private properties
   * maak gebruik effectief gebruik van de properties met $this->
   
   Voer de code uit volgens “best practice” technieken.

3. Maak een programma met een werking;
   * als bezoeker wil ik gegevens (NAW) van een enkele student kunnen tonen

   Het programma heeft de volgende technische eigenschappen:
   * maak een applicatie waarbij <u>meerdere</u> classes nodig zijn
   * elke class bevat een categorie/werking, bijv: users, gallery, seo, database, etc... 
   * alle classes zijn op basis van hun toepassing in folders georganiseerd (lib, content, etc)
   * include de benodigde classes in het de 'running code' (index.php)

4. Maak een programma met een werking;
   * als bezoeker wil ik gegevens (NAW) van een student en/of docent kunnen tonen
     * scheid de rol en persoonlijke gegevens

   Het programma heeft de volgende technische eigenschappen:
   * er zijn twee classes, waarbij de ene class methods en properties erft van de andere class (parent-child)
   * roep parent-methods aan via de child-instantie 

5. Maak een programma met een werking;
   * als bezoeker wil ik gegevens (NAW) van meerdere personen kunnen tonen
   
   Het programma heeft de volgende technische eigenschappen:
   * plaats de class in een subfolder van de lib-map
   * maak gebruik van een functie, zoals mysqli, om database-queries te verwerken 
   * include de db-class
   * gebruik de constructor en parameters om de connectie met de server op te bouwen
   * hergebruik de connectie door gebruik te maken van een private property
   * maak een method waarin de volgende werkt
     * query-strings worden als parameter meegegeven aan methods
     * alle select-queries geven alle data terug in het type 'object', elk record heeft een eigen numerieke key
     * als er slechts één record wordt teruggeven, wordt direct alle data teruggegeven zonder numerieke key  
     * alle andere queries en foutieve queries geven een boolean terug
     
6. Maak een programma met een werking;
   * als bezoeker wil ik gegevens (NAW) van een meerdere gebruikers <i>veilig</i> kunnen tonen

   Het programma heeft de volgende technische eigenschappen:
    * verbeter de verwerking van database-queries door gebruik te maken van parameter-binding
    * geef data aan de query-method in de vorm van een multi associative array

