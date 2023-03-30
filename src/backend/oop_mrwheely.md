---
title: OOP MrWheely
key: 2519
difficulty: basic
date: 2023-01-01
author: jsiewers
technology: oop
---

> #### Voorkennis
> * Je heb basis programmeerkennis
> * Je hebt basiskennis van programmeren voor het web

> #### Dit ga je leren
> * Je gaat object georiënteerd leren programmeren
> * Je gaat herbruikbare code leren schrijven

##  Opdracht
Voor autobedrijf 'Mr. Wheely' moet een app worden gebouwd waarmee je het aanbod aan occasions op een website kunt bekijken.

## Stappenplan
* Maak een php-bestand met de naam 'Auto.php'.
* Maak in Auto.php een class Auto.
* Een Auto heeft de volgende eigenschappen:
    * string Merk
    * string Type
    * string Kleur
    * int Prijs
* Een Auto heeft de volgende methodes:
    * Een constructor die 4 variabelen accepteert voor merk, type, kleur en prijs. <code>__constructor($merk, $type, $kleur, $prijs)</code>
    * In de constructor worden de klasse-variabelen geïnitialiseerd.
    * Getter-methodes om de verschillende eigenschappen op te vragen van een auto. (zoals <code>getPrijs()</code>)
* Maak een php-bestand met de naam 'AutoOverzicht.php'
* Maak in AutoOverzicht.php een class AutoOverzicht
* Een AutoOverzicht heeft de volgende eigenschappen:
    * array Autos
* Een AutoOverzicht heeft de methodes
    * <code>addAuto()</code>
    * <code>getAutoos()</code>

Gebruik onderstaande code om een aantal auto's toe te voegen aan een AutoOverzicht.

```php
$ao->add(new Auto("BMW", "316", "rood", 27500);
$ao->add(new Auto("Audi", "A8", "blauw", 37000);
$ao->add(new Auto("Mercedes", "C200", "grijs", 41000);
$ao->add(new Auto("Ford", "Mondeo", "zwart", 18700);
$ao->add(new Auto("Ford", "Focus", "paars", 14300);
$ao->add(new Auto("Volkswagen", "Tiguan", "groen", 22500);
```
Voeg nieuwe methoden toe aan de AutoOverzicht-class en/of aan de Auto-class om de onderstaande functionaliteit te realiseren.

[Uitleg over deze opdracht vind je op edutorial.nl](https://www.edutorial.nl/php2/oo-programmeren/)

## Resultaat
* [Zie hier een voorbeeld van de website van 'Mr Wheely'](https://static.edutorial.nl/oop/wheely/)
* Maak een [fork van de MrWheely repository op github.com](https://github.com/DeltionICT/mrwheely/fork)
* Clone de repository en voeg je bestanden toe.

## Evaluatie
* Je hebt een applicatie gebouwd volgens opdracht
* De applicatie heeft minimaal 2 klasse-bestanden
* De functonaliteit komt overeen met de [MrWheely-website](https://static.edutorial.nl/oop/wheely/) 