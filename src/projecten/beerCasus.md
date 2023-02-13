---
title: Beer-casus
difficulty: medium
date: 2022-03-01
technology: scrum, all
author: rkerssies, cstegeman

---


# {{ title }}

<img src="{{ '/_assets/projecten/beer/prj_biertjes.png' | url }}" style="width:10%;">


'We like bier' is een project voor The Belgian Beer Company om meer naamsbekendheid voor Belgische speciaal bieren te creëren onder studenten en young adults.

Het project is opgedeeld in 3 fases.  Je krijgt van de TBBC een SQL-script met alle 750 bieren.<br>
De database is geëxporteerd in een [sql-file]({{'/_assets/projecten/beer/pao_beer.sql' | url}}) .

## Fase 1:
Er moet een mooie aansprekende site komen met alle 750 Belgian beers.
Iedere gebruiker kan klikken op een Biertje uit de lijst, bij iedere klik gaat er een teller omhoog. De drie meest geklikte (gelikete) biertjes komen prominent in beeld.
Het maakt niet uit hoe vaak een gebruiker klikt.<br>
* maak een eigen bier-database aan en haal de bier tabel naar binnen via het SQL-script
* voeg het veld "likes" aan de tabel toe (zie afbeelding hier rechts-onder)
Bijvoorbeeld:
<div style="display:flex; column-gap:20px; margin-top:20px;">
    <div style="flex:4">
        <img src="{{ '/_assets/projecten/beer/fase1.png' | url }}">
    </div>
    <div style="flex:2">
        <img src="{{ '/_assets/projecten/beer/bier_likes.png' | url }}">
    </div>
</div>


## Fase 2:
Er moet nu ook bijgehouden worden dat niet gebruikers meerdere malen op een biertje kunnen klikken, dus per IP-adres bijhouden of er al geklikt is. Want TBBCompany wil alleen unieke likes hebben.
* <b><i>Kopieer de map met fase1 als: fase2!</i></b>
    * de berekening van de likes gaat anders: de likes in de bier-tabel worden <i>niet</i> meer gebruikt!
* Maak een nieuwe tabel aan zoals rechtsonder weergegeven
    * bij elke like van een IP-adres voeg je id-bier en ip-adres aan de tabel toe
    * om aantal likes op een bier te berekeken: schrijf een query die het aantal bieren telt (per id)
* De weergave blijft in principe gelijk 
<div style="display:flex; column-gap:20px; max-width:600px; margin-top:20px;">
    <div style="flex:4">
        <img src="{{ '/_assets/projecten/beer/bier_likes.png' | url }}">
    </div>
    <div style="flex:2">
        <img src="{{ '/_assets/projecten/beer/bier_ip.png' | url }}">
    </div>
</div>

## Fase 3:
De TBBCompany wil nu ook dat gebruikers een profiel kunnen aanmaken en daarmee zelf rating op een schaal van 1…5 sterren kunnen geven aan een biertje, en ook een proefnotitie kunnen opschrijven.
* Maak een users tabel aan waar men op kan inloggen
* maak een rating-tabel aan waar users een rating kunnen geven en een proefnotitie opslaan
<div style="display:flex; column-gap:20px;  margin-top:20px;">
    <div style="flex:2">
        <img src="{{ '/_assets/projecten/beer/user_inlog.png' | url }}">
    </div>
    <div style="flex:3">
        <img src="{{ '/_assets/projecten/beer/user-rating.png' | url }}">
    </div>
    <div style="flex:2">
        <img src="{{ '/_assets/projecten/beer/rating.png' | url }}">
    </div>
</div>

## Fase 4:
De TBBCompany wil nu ook een overzichtsrapport van hun populairste bieren.

## Fase 5:
De TBBCompany weet niet of ze nog langer met PHP willen ontwikkelen, ze willen graag ook een mobiele frontend op termijn. Daarom moet alle data naar de browser gestuurd worden in JSON-formaat.

__________
Bijgaand een simpele API voor de bier-database met CRUD-actie voorbeelden op de biertabel zelf. Voor fase 5 hoef je alleen de GET-acties vanuit je eigen API te doen, de create-update-delete acties niet (mag wel natuurlijk…!)

Toelichting staat erbij, in de eerste instantie hoef je alleen maar de toegang tot de MySQL bier-tabel op jouw machine in regel 9 aan te passen.
Met het endpoint: ```http://localhost/[pad_naar_htdocs_map]/api_bier.php?action=getBeer``` haal je alle biertjes op. Met de action getBrouwers zie je alle brouwers. Kijk verder in de code naar de logica en bouw je eigen opvragen op, bijvoorbeeld met JOINs op.

Inlezen van de JSON file in je project gaat op dezelfde manier als waar je nu mee bezig bent met CSP2.

Bijgaande API is heel basic en qua PHP-code goed te begrijpen als het goed is.
Toepassen van andere API’s via Laravel of C# mag natuurlijk ook maar kost waarschijnlijk meer tijd. Voordeel van die andere is wel, dat ze echte “rest”-API’s opleveren, wat deze simpele PHP-API niet is.  

## Uitvoering
* Het project wordt uitgevoerd m.b.v. de SCRUM-methodiek, in een team van vier developers.
* Er wordt DevOps gebruikt als projectmanagement-tool (docenten zijn stakeholders)
* Ontwerp met wireframes, userstories per functionaliteit, elke userstory bevat gedetailleerde taken,
  professioneel gebruik git-hub, dailystandups, restrospective.
* elke sprint opleveren met een productreview en retrospective (team)
* code-review


> {{technologiesTags}}

