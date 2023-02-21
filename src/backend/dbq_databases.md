---
title: DBQ Database basic queries
key: 2418
difficulty: medium
date: 2022-11-11
technology: dbq
author: rkerssies
---


# {{ title }}

<img src="{{ '/_assets/api/database.png' | url }}" style="width:10%;">

> ##### Voorkennis
> * programmeer-basics, git

> ##### Doel
> * een database opzetten
> * een database-tabel opzetten
> * een database-tabel vullen met data
> * data op verschillende manieren uit de database-tabel opvragen m.b.v. queries
> * data op verschillende manieren samenvoegen/combineren m.b.v. queries
> * data toevoegen m.b.v. queries
> * data verwijderen m.b.v. queries
> * data wijzigen m.b.v. queries


* Programmeertaal: PHP of een andere backend-taal

***Taken:***
<hr>
1. Maak een database aan voor een test-database, bijv.: `tryout_db` met det tabel `users`
* Als XAMPP is geïnstalleerd kan je een web-beheertool benaderen via http://localhost/phpmyadmin<br>
  NB: de service MySQL / MariaDB moet wel aan staan

2. Kies de juiste database en maak een tabel aan. De "structuur" van de tabel met 
    daarin de kolommen en soort gegevens die je wil opslaan moet worden uitgewerkt.
   Zorg dat je in ieder geval kan werken met;
   * primaire sleutel (met auto increment / AI)
   * datatypes, zoals: VARCHAR, LONGTEXT, INT, REAL, DOUBLE, TIMESTAMP, DATETIME en BOOL
   * standaardwaarden, waaronder NULL
   * meerdere kolommen aan kan maken
    NB: de structuur van de `users` tabel kan er als volgt uit zien:<br>
    id (INT AI, 11), email (VARCHAR, 30), password (VARCHAR,30), role_id (INT, 2)<br>
   NB: de structuur van de `products` tabel kan er als volgt uit zien:<br>
    id (INT AI, 11), name (VARCHAR, 60), descr (VARCHAR,300), price (DOUBLE, 6,2), stock (INT,4) 

3. Data toevoegen kan op een voor nu op een simpele manier onder de tab "Invoegen".
    Voeg meerdere setjes gegevens (records) aan de database-tabel 

4. Als de tabel is aangemaakt en de structuur staat vast en er is data toegevoegd aan de tabel, 
 dan kan er data worden uitgevraagd met queries (databaseverzoeken).  
    Gebruik hiervoor de volgende mogelijkheden; 
   * SELECT
   * WHERE
   * AND / OR / NOT
   * LIKE met wildcards, https://www.w3schools.com/mysql/mysql_wildcards.asp
   * BETWEEN
   * ORDER BY
   voor voorbeelden zie: https://www.w3schools.com/mysql/mysql_intro.asp
   
5. Opgevraagde gegevens met SELECT kunnen ook worden gecombineerd. Maak hierbij o.a.gebruik van de volgende mogelijkheden;
    * MIN en MAX
    * COUNT en SUM
    * AVG
    * LIMIT
    * GROUP BY
    * DISTINCT
    * UNION

6. Uitraard kunnen we records nieuwe records niet blijven toevoegen door gebruik te maken van 'phpMyAdmin'. 
 Dit wordt gedaan door een query vanuit een programmeertaal naar de database te versturen, INSERT.
   *  schrijf een query die een record toevoegt aan de database-tabel
      voor voorbeelden zie: https://www.w3schools.com/mysql/mysql_insert.asp

7. Ook verwijderen van records uit de database kan met een query; DELETE 
   * gebruik om één specifiek record te verwijden WHERE en het `id` van het record
   * schrijf een queries die een record of meerdere records kan verwijderen aan de database-tabel
     voor voorbeelden zie: https://www.w3schools.com/mysql/mysql_delete.asp

8. Schrijf queries die record(s) kan wijzigen in de database-tabel; UPDATE.
    * om één specifiek record te wijzigen WHERE en het `id` van het record
    * schrijf een queries die een record of meerdere records kan wijzigen aan de database-tabel
      voor voorbeelden zie: https://www.w3schools.com/mysql/mysql_update.asp

> ##### Op te leveren
> * op verschillende manieren en in situaties: SELECT-, aggregate-,INSERT-, DELETE- en UPDATE-queries kunnen toepassen. 
