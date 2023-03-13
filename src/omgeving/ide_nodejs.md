---
title: Ontwikkelomgeving voor NodeJS
key: 2508
difficulty: basic
date: 2023-03-05
author: jsiewers
technology: ide, js
---

> #### Voorkennis
> * Je hebt nog geen programmeerkennis nodig
> * Je kunt werken met een computer

> #### Dit ga je leren
> * Je gaat een ontwikkelomgeving opzetten om te werken met nodejs, javascript en typescript

## Opdracht
In deze opdracht ga je een aantal gereedschappen installeren die je nodig hebt bij het werken met javascript en nodejs. Maak na ieder onderdeel een schermafbeelding waarmee je aantoont dat je de opdracht hebt voldaan. Plaats de schermafbeeldingen (bij elkaar) in een nieuwe repository op github. Als je alles hebt afgerond presenteer je de ontwikkelomgeving op je eigen laptop aan 1 van de docenten.

## Een editor installeren
* Installeer [Visual Studio Code](https://code.visualstudio.com/) op je computer
* In Visual Studio Code kun je extensies installeren. Met extensies stem je Visual Studio Code helemaal af op de programmeertaal waarmee je gaat werken. Er zijn twee extensies die helpen met het optimaliseren van je code in javascript. Installeer deze extensies in Visual Studio Code:
    * ESLint
    * Prettier
    
## Git installeren
* Installeer git op je computer [Hier vind je uitleg over hoe dat moet](https://www.edutorial.nl/git/introductie/)
* Check of git goed is geïnstalleerd met "git --version"
```shell
$ git --version
git version 2.37.1 
```

## Nodejs installeren
Installeer Nodejs op je computer. De installer voor nodejs kun je vinden op [https://nodejs.org/en/](https://nodejs.org/nl/)  
Er zijn 2 versies beschikbaar. Kies hier voor de versie met de laatste features (huidig).  
Tijdens de installatie installeer je nodejs en npm. Beide heb je nodig. Nodejs is de software waarmee je met javascript een applicaties kunt bouwen. npm is een tool om modules en pakketten van anderen te  installeren en te gebruiken.

* Check of nodejs is geïnstalleerd op je computer  
* Start een terminal op (bijvoorbeeld in visual studio code) en type "nodejs --version"  
```shell
$ node --version
v19.7.0
```
* Type "npm --version"
```shell
$ nodejs % npm --version 
9.5.0
```
Als je een melding krijgt over 'Authentication' of 'persmission', dan kan het zijn dat je powershell nog voldoende rechten moet geven om scripts uit te voeren.  
In de terminal van Powershell geeft je dan het commando: <code>Set-ExecutionPolicy unrestricted</code>

## Hello World
* Schrijf je eerste hello-world script in visual studio code.
* Maak een nieuw bestand aan met de naam <code>helloworld.js</code>
* Type in <code>helloworld.js</code> de code <code>console.log("Hello World")</code>
* Open een terminal in visual studio
* Start het script met <code>node helloworld</code>
* Controleer of je "Hello World" op het scherm ziet

``` javascript
$ node helloworld
hello world
```
## Resultaat
* Een schermafbeelding met het versienummer van git als het opstart vanuit een willekeurige directory met <code>git --version</code>.
* Een schermafbeelding met de versie van nodejs vanuit de terminal met <code>node --version</code>.
* Een schermafbeelding met de versie van npm vanuit de terminal met <code>npm --version</code>.
* Een script gemaakt met javascript dat "hello world" in de terminal weergeeft
* Een repository op github.com met de schermafbeeldingen en het script