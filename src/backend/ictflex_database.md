---
layout: h2_toc
title: Database introductie
key: 2517
difficulty: basic
date: 2023-01-01
author: jsiewers, adalmolen, jheuvelman, pvangemert
technology: database
---



> #### Voorkennis
> * Je hebt je docentenopleiding afgerond
> * Je kunt werken met een computer

> #### Dit ga je leren
> * Je leert een database te ontwikkelen
> * Je leert hoe je door middel van queries data kan opvragen en manipuleren
> * Je leert hoe je een database kunt optimaliseren

## Introductie

In deze opdracht leer je de basistechnieken die nodig zijn om een
database aan te maken en met een database te kunnen werken.

Afhankelijk van de gebruikerswens moeten allerlei gegevens worden
getoond. Dit kan in de code worden uitgewerkt, maar vaak zijn de
gegevens veranderlijk en moeten aanpasbaar zijn. Een menu kan
bijvoorbeeld worden uitgebreid met extra items. Een artikel moet worden
toegevoegd en een ander artikel moet worden verwijderd. Het is onhandig
om dit letterlijk in de code te moeten wijzigen. Gegevens worden daarom
bij voorkeur niet in de code opgeslagen, maar opgehaald wanneer ze nodig
zijn. Met formulieren kunnen gegevens worden gewijzigd door de
geautoriseerde gebruikers. Gegevens kunnen worden opgeslagen in een
database, maar bijvoorbeeld ook in ini-, json- of xml-bestanden.

## Vakdocenten

-   Andre Dalmolen - ADN - adalmolen@deltion.nl
-   Jeroen Heuvelman - JHN - jheuvelman@deltion.nl
-   Peter van Gemert - PGT - pgemert@deltion.nl
-   Jan Jaap Siewers - JJS - jsiewers@deltion.nl

## Backlog

-   Als softwaredeveloper wil ik weten wat een database is en hoe ik
    deze kan opzetten.

-   Als softwaredeveloper wil ik de basis van sql leren, zodat ik deze
    kan toepassen in projecten.

-   Als softwaredeveloper wil ik weten hoe ik een optimale en snelle
    database kan maken, zodat ik snelle applicaties kan ontwikkelen.

-   Als student moet ik brede kennis van databases en sql hebben, zodat
    ik mijn examen kan halen.

## Database constructie

Als de webservices voor MySQL gestart zijn kunnen andere diensten, zoals
PHP, met de database communiceren. Eenvoudig beheer met een database kan
door middel van phpMyAdmin.

Ga naar: <http://localhost/phpmyadmin>

{{ 'https://static.edutorial.nl/lucy/database/afbeelding1.jpg' | url | image: 'Database beheren in phpMyAdmin', 30 }}


Naast gegevens uitvragen, toevoegen, aanpassen of verwijderen zijn er
ook queries waarmee de opbouw van een database, de tabellen en
dergelijke kunnen worden ingericht. Bij de volgende queries wordt als
voorbeeld een salesdatabase gebruikt, waarin een tabel voor contacten
wordt geplaatst. Op de database en de tabel worden voorbeeld wijzigingen
gedaan.

# Database aanmaken

Een eerste stap is om een database aan te maken. De query hiervoor is
vrij eenvoudig:

``` sql
CREATE DATABASE `sales`
```

Wanneer er een database beschikbaar is, dan kan in die database tabellen
gemaakt worden. De volgende query laat zien hoe een tabel kan worden
gemaakt:

``` sql
CREATE TABLE `contacts`
(
	`p_id`        int(11)      AUTO_INCREMENT,
	`lastname`    varchar(40),
	`firstname`   varchar(25),
	`address`     varchar(100),
	`city`        varchar(40),
	`birthdate`   year
)
```

Optioneel kan een veld “auto increment” gemaakt worden. Bij velden die
een integer als datatype hebben mag de lengte worden opgegeven, maar dit
is niet nodig. In principe wordt de lengte bepaald door de systeem
architectuur (32 of 64 bit). Andere opties bij het aanmaken van een
tabel zijn “niet nul” (NN) of “NULL”. In de volgende query voorbeelden
gegeven:

``` sql
CREATE TABLE `contacts`
(
	`p_id`      int          NOT NULL,
	`lastname`  varchar(40)  NOT NULL,
	`firstname` varchar(25),
	`address`   varchar(100),
	`city`      varchar(40)  NULL,
	`birthdate` year
)
```

## Koppelingen in de database structuur vastleggen

In het voorbeeld hieronder wordt de primaire sleutel toegevoegd aan een
veld.

``` sql
CREATE TABLE contacts
(
	`p_id`        int            NOT NULL,
	`lastname`    varchar(40)    NOT NULL,
	`firstname`   varchar(25),
	`address`     varchar(100),
	`city`        varchar(40),
	`birthdate`   year,
	PRIMARY KEY (`p_id`)
)
```

Het is ook mogelijk om een primaire sleutel te maken van een aantal
gecombineerde velden, een voorbeeld hiervan staat in de volgende query.

``` sql
CREATE TABLE contacts
(
	`created`     timestamp      NOT NULL,
	`lastname`    varchar(40)    NOT NULL,
	`firstname`   varchar(25),
	`address`     varchar(100),
	`city`        varchar(40),
	`birthdate`   year
	PRIMARY KEY (`created`, `lastname`)
)
```

Foreign keys kunnen ook middels de query toegevoegd worden. In
onderstaand voorbeeld wordt het veld land gekoppeld met een tabel waarin
alle landen staan.

``` sql
CREATE TABLE `contacts`
(
	`created`     timestamp      NOT NULL,
	`lastname`    varchar(40)    NOT NULL,
	`firstname`   varchar(25),
	`address`     varchar(100),
	`city`        varchar(40),
	`birthdate`   year,
	`country_id`  int
	PRIMARY KEY (`created`, `lastname`)
	CONSTRAINT FOREIGN KEY (`country_id`) 
	REFERENCES `country`(`id`)
)
```

## Wijzigen van de tabelopbouw

Een kolom bijvoegen is een van de aanpassingen die kan worden gedaan:

``` sql
ALTER TABLE `contacts`
ADD `birthdate` VARCHAR(8)
```

Maar ook het aanpassen van het datatype is een mogelijkheid. Let op dat
er geen data verloren gaat wanneer de lengte van het datatype word
verlaagd. Het aantal karakters dat wegvalt kan informatie bevatten, dat
na wijziging verloren gaat.

``` sql
ALTER TABLE `contacts`
MODIFY COLUMN `birthdate` year
```

## Database onderdelen verwijderen 

De laatste bewerkingen is het verwijderen. Zo kunnen er velden worden
verwijderd:

``` sql
ALTER TABLE `contacts`
DROP COLUMN `birthdate`
```

Maar ook gehele tabellen:

``` sql
DROP TABLE `contacts`
```

En ook de gehele database kan worden verwijdert. phpMyAdmin heeft voor
het uitvoeren een pop-up of deze query echt moet worden uitgevoerd. Bij
sommige databases is deze query uitgeschakeld, omdat het flinke
consequenties heeft als het per abuis is uitgevoerd. Ook wanneer een
query via hacking kan worden uitgevoerd, kan dit complete applicaties
plat leggen met grote gevolgen voor de dienstverlening en verlies van
waarde volle gegevens.

``` sql
DROP DATABASE `sales`
```

Wanneer deze commando’s buiten transacties of tools, zoals phpMyAdmin,
worden gedaan worden er geen bevestigingsvragen gesteld: “weet u het
zeker?”. De actie is dan niet herstelbaar.

## Opdrachten database constructie

Voor de volgende opdrachten wordt een eigen database aangemaakt, toegang
tot databaseservices op de localhost zijn hiervoor nodig. De volgende
ERD is hierop van toepassing:

{{ 'https://static.edutorial.nl/lucy/database/afbeelding2.jpg' | url | image: 'Entiteit Relatie Diagram', 70 }}

<br>

#### Database aanmaken

Maak een database aan genaamd "CijferAdministratie".

#### Tabellen en primary keys maken

De volgende tabellen moeten worden aangemaakt volgens het ERD, houdt
hierbij rekening met de PRIMARY keys, NOT NULL velden en

1.  tabel "klas" volgens de ERD

2.  tabel "vak" volgens de ERD

#### Foreign keys toevoegen

Maak de volgende tabellen;

1.  Tabel "student" volgens de ERD

2.  Tabel "cijfer" volgens de ERD, waarbij er twee foreign-keys en een
    gecombineerde primaire sleutel zijn.

NB: let goed op dat naast de primary key ook verplichte velden ook zijn
gebruikt. Geef de foreign keys een naam met een prefix zodat het
duidelijk is dat het om een foreignkey gaat.

#### Aanpassingen doen

1.  Voeg het veld “woonplaats” toe met een lengte van 30 aan de tabel
    “student”.

2.  Verander het veld “Voorletters” van datatype naar een varchar (5)
    veld in de tabel “student“.

3.  Verwijder het veld “woonplaats” weer uit de tabel “student”.

#### Verwijderen

1.  Waar moet op worden gelet wanneer één tabel wordt verwijderd?

2.  Geeft de queries om de tabel “vak” te verwijderen. NB: wanneer er
    foreign keys zijn gebruikt, zullen deze eerst verwijdert moeten
    worden, voordat de tabel kan worden verwijdert.

3.  Geeft de query om de gehele database te verwijderen.

## Database definities

Een database bevat tabellen, ook wel "schema’s" genoemd, met daarin
kolommen (attributes of velden) met een unieke kolomnaam voor de
verschillende gegevens die moeten worden verzameld.

De gegevens moeten op en bepaalde manier worden opgeslagen, deze
structuur heet "datatype". Enkele veel voorkomende datatypes zijn:
VARCHAR, TEXT, DATE -, TIMESTAMP, INT, DOUBLE, REAL, BOOL EN BLOB. Vaak
wordt hierbij ook het maximaal aantal karakters die een waarde mag
hebben opgegeven.

Elke kolom moet gegevens zo op zich zelf staand mogelijk willen
vastleggen, dus bijvoorbeeld geen combinatie van een adres met een
postcode. Als er gegevens in de tabel worden gezet worden er rijen
(records) toegevoegd aan de tabel. Elke rij moet uniek te identificeren
zijn, om verwarring tussen de verschillende rijen met gegevens te
voorkomen. Hiervoor wordt één kolom of een combinatie van kolommen
aangewezen als primaire sleutel (primary key). Dit kan een automatisch
opgehoogd getal zijn (datatype INT met "auto increment"), maar het kan
ook een email- adres of een combinatie tussen een postcode en een
huisnummer zijn.

Bij het toevoegen van een record kunnen kolommen die geen opgegeven
waarde hebben ook een standaard waarde krijgen. De veldwaarde kan ook
leeg worden gelaten, hiervoor wordt dan NULL (als status) gebruikt. Wat
neerkomt op “empty by default”.

## Integriteit

Wat erg belangrijk is voor het opslaan van gegevens in een
databasetabel, is dat deze waarden correct moeten zijn (integer).
Hiervoor mogen records niet meervoudig worden opgeslagen (redundant).
Het is niet wenselijk dat je 2x een rekening ontvangt van een webshop,
omdat je twee maal met jouw adres in hun systeem staat.

Daarnaast moet de primaire sleutel verplicht een unieke-waarde hebben;
niet leeg en deze mag ook niet NULL zijn.

## Dataverzoeken (queries)

Om de database acties uit te laten voeren zijn er database-verzoeken
nodig, een “query”. Een query kan via phpMyAdmin in de SQL-tab, maar ook
via database-tools, of programmeertalen naar de database worden
gestuurd. De database voert daarna de query uit. Een eerste query om
alle gegevens uit een tabel op te vragen kan met de string:

``` sql
SELECT * FROM `customers`
```

NB: de tabel ‘customers’ moet wel bestaan en gegevens bevatten.

Records met een selectie van kolommen opvragen en één criterium kan
bijvoorbeeld met:

``` sql
SELECT	`firstname`, `name
FROM	`customers`
WHERE	`city` = "Zwolle"
```

en een specifieke record opvragen en daarvan alle kolommen tonen zou
kunnen met:

``` sql
SELECT	*
FROM	`customers`
WHERE	`id` = "101"
```

In PHP zal dit er als volgt uit kunnen zien;

``` sql
$sql = 'SELECT * FROM `customers` WHERE `id` = "'.$id."';
```

Als een programmeur slim queries weet te schrijven, zullen de gegevens
snel en op een prettige manier beschikbaar worden gesteld aan zijn code.
Waarna er eenvoudig een array van gemaakt kan worden. Taken als
sorteren, ordenen, aantallen tellen, gemiddelden berekenen, etc kunnen
het beste met een query worden gedaan, in plaats van met geschreven
code. Een query-voorbeeld waarin veel mogelijkheden zijn samengevoegd;

``` sql
SELECT	`firstname`, `name`
FROM	`customers`
WHERE	`blocked` IS NULL
AND	`city` IS NOT "Hattem"
AND	`city` <> "Groningen"
AND	`zip` BETWEEN "4000 AA" AND "9000 ZZ"
```

NB: de tabel ‘customers’ bevat o.a. de kolommen: ‘firstname‘, ‘name‘,
‘zip‘, ‘city‘, ‘birth‘ en ‘blocked‘.

Een query met rekenvoorbeelden zijn;

``` sql
SELECT	MAX(`price`), MIN(`price`), SUM(`stock`) AS "voorraad",
FROM	COUNT(`productnr`) AS "aantal", AVG(`price`) AS "gemiddelde"
```

of

``` sql
SELECT	productnr`, (`price` * `stock`) AS value
FROM	`products`
```

en groeperen kan als volgt:

``` sql
SELECT	`brand`, SUM(`stock`)
FROM	`products`
GROUP BY	`brand`
```

Allerlei combinaties zijn mogelijk met als resultaat een correct
geordende set met gegevens.

## Rubric Databases

#### Kennis

| | G=Goed | V=Voldoende | M=Matig | O=Onvoldoende |
|:---------------------------------------------------------------------------------------------|:----|:----|:----|:----|
|                                                                                              | *G* | *V* | *M* | *O* |
| Ik kan uitleggen wat een **database** is                                                     |     |     |     |     |
| Ik kan het begrip **gegevens** uitleggen                                                     |     |     |     |     |
| Ik kan het begrip **tabellen** uitleggen                                                     |     |     |     |     |
| Ik kan het begrip **attributes** uitleggen                                                   |     |     |     |     |
| Ik kan het begrip **integriteit** en **redundant** uitleggen                                 |     |     |     |     |
| Ik kan het begrip **query** uitleggen                                                        |     |     |     |     |
| Ik kan het begrip **ERD** uitleggen                                                          |     |     |     |     |
| Ik kan het begrip **datatype** uitleggen en voorbeelden van verschillende datatypes benoemen |     |     |     |     |
| Ik kan het begrip **primary key** uitleggen                                                  |     |     |     |     |
| Ik kan het begrip **foreign key** uitleggen                                                  |     |     |     |     |

#### Opdracht

| | *G=Goed | V=Voldoende | M=Matig | O=Onvoldoende*                 
|:--------------------------------------------------------------------|:----|:----|:----|:----|
|                                                                     | *G* | *V* | *M* | *O* |
| Ik heb de opdrachten "verwijderen" gemaakt                          |     |     |     |     |
| Ik heb de database Cijferadministratie aangemaakt                   |     |     |     |     |
| Ik heb de tabellen aangemaakt zoals beschreven in het ERD           |     |     |     |     |
| Ik heb de primary keys juist aangemaakt                             |     |     |     |     |
| Ik heb de foreign keys juist aangemaakt                             |     |     |     |     |
| Ik heb de extra velden toegevoegd                                   |     |     |     |     |
| Ik kan laten zien dat ik wijzigigen kan aanbrengen in mijn database |     |     |     |     |
| Ik kan laten zien dat ik queries kan uitvoeren op mijn database     |     |     |     |     |
| Mijn database is integer en redundant                               |     |     |     |     |
