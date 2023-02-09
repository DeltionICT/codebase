---
title: Xampp
difficulty: basic
date: 2023-01-13
author: jsiewers
technologies: [php]
---


# {{ title }}


<img src="{{ '/_assets/_icons/xampp-logo.png' | url }}" style="width:10%;">


## Xampp installeren en starten
[Xampp downloaden]('https://www.apachefriends.org/download.html')

1. Download Xampp (niet een virualhost-versie)
2. Installeer Xampp in de default map (C:\XAMPP  of \Applications\XAMPP)
3. Installeer alle services en mogelijkheden
3. Zoek in de XAMPP-applicatiefolder de htdocs-map. 
  Hernoem het bestand index.php naar index.org.php
4. Start de applicatie op (control-panel)
5. Start Apache. Start optioneel MySQL als je ook gebruik gaat maken van een database;

   <img src="{{ '/_assets/omgevingen/xampp-start-screen.png' | url }}" style="width:30%;">
   
6. Open jouw browser naar voorkeur en type in de url-balk;
    > http://localhost

    Je ziet nu een standaard webpage die door het betsand ~/htdocs/index.php wordt geredirect.
    Door het bestand ~/htdocs/index.php te vernoemen (bijv: index.org.php) kan je de folderstructuur in de browser bekijken.
7. In de browser zie je nu de inhoud van de htdocs-folder.
8. In de htdocs-folder worden alle php-files geplaatst, dit kan je direct beheren en uitbreiden 
door jouw editor (IDE) in deze folder te laten kijken. 
9. Kijken of jouw code werkt, doe je in de browser door ``http://localhost`` te benaderen !
   Php-code starten via een Verkenner/Finder is niet mogelijk...


## Xampp optimaal gebruiken
* Maak voor elk project/try-out een aparte folder in de htdocs-folder.<br>
    Laat de folders evt beginnen met 01Naamproject, 02TweedeNaam, etc...<br>
    Hierdoor heb je meer orde en structuur in jouw projecten door de tijd heen.

* Als elk project een index.php file heeft (single-point-of-entry), start de applicatie direct op, zonder de poh-filename in de browser in te typen.
* Ontwikkel de applicatie lokaal op jouw laptop (in XAMPP), dus niet online.
  Zodra jouw project werkt en getest is, wordt het online gezet. Gebruik daarvoor een FTP-tool.
* De domeinnaam "localhost" is op ten duur niet het meest handig als je meerdere projecten uit elkaar wil houden.
  Hiervoor kan je ook [locale domnein-namen]('/thema/local-domainnames/') aanmaken. 
* Je kan ook clean-url's opzetten. Zo worden de GET-waarden in een url;
``http://localhost/03_test/index.php?key1=soneValue`` omgezet naar: ``http://localhost/03_test/someValue``.
Met localdomeinnamen kan dit er zelfs als volgt uit zien: ``http://testproject.rk/someValue``

