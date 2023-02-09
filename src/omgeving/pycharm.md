---
title: Pycharm
difficulty: basic
date: 2023-01-11
author: jsiewers
---


# {{ title }}

## Inleiding
In deze opdracht ga je een aantal gereedschappen installeren die je nodig hebt bij het werken met Python. Maak na ieder onderdeel een schermafbeelding waarmee je aantoont dat je de opdracht hebt voldaan. Plaats de schermafbeeldingen (bij elkaar) in een nieuwe repository op github. Als je alles hebt afgerond presenteer je de ontwikkelomgeving op je eigen laptop aan 1 van de docenten.

## Presentatie python ontwikkelomgeving
* Toon het versienummer van git als het opstart vanuit een willekeurige directory met <code>git --version</code>.
* Toon python met een project in pycharm vanuit de terminal met <code>python --version</code>.
* Toon de repository op github.com met schermafbeeldingen die je tijdens installatie hebt gemaakt.

## Git installeren
* Installeer git op je computer [Hier vind je uitleg over hoe dat moet](https://www.edutorial.nl/git/introductie/)
* Check of git goed is geïnstalleerd
```shell
janjaap@iMac-Pro-van-Jan pythonproject % git --version
git version 2.37.1 
```

## Python installeren
Installeer python op je computer. [Hier vind je uitleg over hoe dat moet!](https://www.edutorial.nl/python/python-installeren/)  

* Check of python is geïnstalleerd op je computer  
* Start een terminal op en type "python --version"  
```python
(venv) janjaap@iMac-Pro-van-Jan pythonproject % python --version
Python 3.9.2
```
Als je een melding krijgt over 'Authentication' of 'persmission', dan kan het zijn dat je powershell nog voldoende rechten moet geven om python scripts uit te voeren.  
In de terminal in Pycharm geeft je dan het commando: <code>setExecutionPolicy unrestricted</code>

## Hello World
* Schrijf je eerste hello-world script,  gebruik de functie <code>print("Hello World")</code> om hello world op het scherm te tonen.
* Open de commandline en type python  
* Type vervolgens de code print("Hello World")

``` python
(venv) janjaap@iMac-Pro-van-Jan pythonproject % python
Python 3.9.2 (v3.9.2:1a79785e3e, Feb 19 2021, 09:06:10) 
[Clang 6.0 (clang-600.0.57)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello World")
Hello World
>>> 
```
Bovenstaand voorbeeld is op een mac gemaakt. Op windows zal je soortgelijke informatie zien, maar dan afgeleid van jouw naam en systeem.
