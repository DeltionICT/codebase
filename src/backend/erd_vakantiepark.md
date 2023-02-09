---
title: ERD Vakantiepark
difficulty: expert
date: 2022-11-10
author: jsiewers
---



# {{ title }}

> ##### Voorkennis
> * SQL Queries
> * Een databaseserver installeren, tabellen aanmaken en permissies instellen


## Resultaat
Lever het ERD dat hoort bij onderstaande casus.

## Casus
Voor een vakantiepark moet een applicatie worden gemaakt voor het verhuren van vakantiebungalows.  
Er zijn verschillende typen bungalows:
* Garnaal, biedt ruimte aan 4 personen en heeft 2 slaapkamers
* Krab, biedt ruimte aan 6 personen en heeft 3 slaapkamers
* Kreeft, biedt ruimte aan 8 personen hen heeft 3 slaapkamers
* Er zijn nog meer types en  er worden later nog nieuwe types toegevoegd.
* Bungalows hebben voorzieningen. Denk aan 'open haard', 'ligbad', 'sauna' etc.
Voorzieningen zijn niet afhankelijk van het type bungalow. De ene bungalow van het type Garnaal heeft bijvoorbeeld een open haard, maar een andere bungalow van hetzelfde type heeft bijvoorbeeld ligbad, maar geen open haard.
* Elke bungalow heeft een huurprijs per dag. De prijs is afhankelijk van het type en de aanwezige voorzieningen.
* Een reservering heeft 1 hoofdhuurder
    * De familie Jansen komt met 6 personen, maar vader Jan Jansen is de hoofdhuurder (hij betaalt de rekening).
* Een hoofdhuurder kan meerdere bungalows huren.
* Bij een reservering worden de volgende gegevens opgeslagen:
    * Van de hoofdhuurder worden de naam, adres, postcode, telefoon en email opgeslagen
    * De reserveringsdatum
    * De aankomst- en vertrekdatum
    * De bungalows die worden gehuurd
    * Het aantal gasten per bungalow

### Voorbeelden van reserveringen

<div class="html">
<table>
    <tr>
        <td colspan=3><b>Reservering</b> 39929, reserveringsdatum 11-12-2023</td>
    </tr>
    <tr>
        <td>J. Boom<br>063399229</td><td>Kastanjepad 25<br>2345 PC Abcoude</td><td>Van: 06-05-2024<br>Tot: 08-05-2024</td>
    </tr>
    <tr>
        <td><b>Bungalows</b></td><td><b>Voorzieningen</b></td><td><b>Aantal gasten</b></td>
    </tr>
     <tr>
        <td>Kreeft 6<br>&euro; 110,-</td><td>Afwasmachine<br>Open Haard</td><td>8</td>
    </tr>
      <tr>
        <td>Garnaal 3<br>&euro; 70,-</td><td>Afwasmachine<br></td><td>3</td>
    </tr>  
</table>
<br>
<table>
    <tr>
        <td colspan=3><b>Reservering</b> 677889, reserveringsdatum 09-12-2023</td>
    </tr>
    <tr>
        <td>P. Kapteijn<br>065599332</td><td>Lindenlaan 5<br>7787 AC Amsterdam</td><td>Van: 09-05-2024<br>Tot: 11-05-2024</td>
    </tr>
    <tr>
        <td><b>Bungalows</b></td><td><b>Voorzieningen</b></td><td><b>Aantal gasten</b></td>
    </tr>
     <tr>
        <td>Kreeft 8<br>&euro; 122,-</td><td>Afwasmachine<br>Open Haard<br>Sauna</td><td>7</td>
    </tr>
      <tr>
        <td>Garnaal 3<br>&euro; 70,-</td><td>Afwasmachine<br></td><td>3</td>
    </tr>  
</table>
</div>
