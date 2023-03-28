---
title: OOP Autoloader met namespaces
key: key: 2608
difficulty: medium
date: 2023-03-24
author: rkerssies
technology: ide, html, css, php, functions, oop
---

# {{ title }}

<img src="{{ '/_assets/api/PHP-logo.png' | url }}" style="width:10%;">

> #### Voorkennis
> * Classes met methods maken
> * Objecten van classes maken en methods daarop aanroepen
> * Het gebruik van public/private properies en methods
> * classes elkaars methodes laten overerven
> * gebruik van namespaces

> #### Dit ga je leren
> * automatisch laden van classes die 'ge-used' worden op basis van hun namespace

## Opdracht
Houdt de volgende structuur aan in je code:
* lezen van classes
* objecten maken en logica uitvoeren en het renderen van gegevens
* tonen van html-structuur en het weergeven van de gerenderde gegevens.
Werk met een 'single-point of entry' (bijv: index.php)

1. Maak een index-file en twee folders in een app-folder. De mappen hebben de naam 'lib' en 'vendor'.<br>
    Dus bijvoorbeeld: : ./index.php,   ./app/vendor/class.php   en    ./app/lib/classs.php <br>
   Maak ik één van de twee een class-file aan met een class met daarin een method om te testen.<br>
   Kopieer de file 1-op-1 naar de andere map. Je hebt nu twee classes met dezelfde naam.
   Geef beide classes een namespace gebaseerd op de folders en eventueel subfolders waarin de class te vinden is.

2. Voeg de volgende code toe bovenin de index-file (voor dat classes worden geïnstantieerd of ge-used)
```js
spl_autoload_register( function ($class) {
} );
$class = strtolower(str_replace("\\", "/", $class)); include('../app/'.$class.'.php');
// convert back-slashes to slashes
spl_autoload_extensions('.php');
```
Dit stukje code maakt het mogelijk dat op basis van een gebruikte namespace de locatie (folders en class-naam)
wordt gebruikt om de class in te lezen (include).<br> 
`Voorwaarde is dat de class-naam en de bestandsnaam 1-op-1 gelijk zijn !!!` 

3. 'Use' deze volledige namespaces en class-naam (file-name) in de index-file en geef deze een alias mee.
Maak objecten van de 'alias-namen' die de classes hebben gekregen.<br>

4. Zorg dat de autoloader in een class-method wordt ondergebracht op een nuttige locatie, bijvoorbeeld de core-folder.
Uiteraard moet alles blijven werken als daarvoor.

## Resultaat
Kennis toepassen van namespaces en een autoloader.

## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br>
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd
