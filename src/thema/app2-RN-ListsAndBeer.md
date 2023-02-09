---
title: app2 | RN-Lists and Beer
difficulty: medium #basic | medium | expert
date: 2023-02-09
lang: javascript reactnative
author: kstarreveld
---

# {{ title }}

> #### Voorkennis:  
> * Basis Javascript 
> * info hoe je kunt opstarten is te vinden op [React Native site](https://reactnative.dev/docs/getting-started) onder het kopje The Basics.
> * Gebruik van Fetch API of Axios

> #### Doelen:  
> * leren hoe je lijsten ophaalt en weergeeft
> * FlatList, useWindowDimensions


### opdracht
* Maak een react native app.
* Lees de bier api in te vinden op de url:
    http://15euros.nl/csp2/modules/api_basic.php
* Dit kun je doen door middel van Axios, of de Fetch API
* Stop de data van deze api (JSON) in het data attribuut van een FlatList element.
* Bekijk het resultaat.
* voeg nu [useWindowsDimensions](https://reactnative.dev/docs/usewindowdimensions) toe , en zet in je app.json file de instelling voor "orientation": "default".
(andere instellingen zijn 'portrait' of 'landscape')
welk effect heeft dit?

### Uitbreiding:
* Voeg per biertje ook een plaatje toe.
* Kijk of je een carousel element kunt vinden en installeren die hetzelfde doet maar dan met swipe acties.
* In de render code , kun je makkelijk switchen van waardes door gebruik te maken van de ternary if. Dat is een if statement die gebruik maakt van een ? en een :
en ziet er als volgt uit:
    <conditie> ? <true> : <false>
dus : 
    x > 5 ?  y=3 : y=2
in taal:
    als x groter is dan 5 zet ik y op 3 anders zet ik y op 2.



