---
title: PHPB Functions
difficulty: basic
date: 2022-11-10
author: jsiewers
---


# {{ title }}

> ##### Voorkennis
> * Basiskennis HTML
> * Programmeertaal: PHP

## Resultaat
Je hebt geleerd hoe je functions maakt en toepast in php. In de opdrachten op deze pagina laat je zien hoe je functies definieert en hoe je ze aanroept.

### Opdracht 1
Maak een function die 2 argumenten accepteert, namelijk:
* het maximum aantal punten wat je voor een toets kunt halen en 
* het aantal behaaplde punten.   
De function retourneert het behaalde cijfer tot 2 decimalen achter de komma  
```php
berekenCijfer(45, 29) //Output is 6,44  
berekenCijfer(34, 31) //Output is 9,12   
```
### Opdracht 2
Maak een functie die 1 getal accepteert. De functie bepaalt of het getal deelbaar is door 3 en door 5. Bijv. 15 is deelbaar door 3 en 5. De functie toont het resultaat.  
TIP: Maak gebruik van de modulus-operator  
```php
checkDeelbaar(15) //Output "Deelbaar door 3 en door 5"  
checkDeelbaar(9) //Output "Deelbaar door 3 maar niet door 5"  
checkDeelbaar(10) //Output "Deelbaar door 5 maar niet door 3"  
checkDeelbaar(17) //Output "Niet deelbaar door 3 of 5"  
```

> TIP: [Uitleg over functions vind je hier](https://www.edutorial.nl/php/functions/)