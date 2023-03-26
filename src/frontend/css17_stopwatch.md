---
title: css17 | stopwatch
difficulty: basic #basic | medium | expert
date: 2023-01-31
author: cstegeman
technology: css
---

# {{ title }}	

> #### Voorkennis:  
> * opdracht [js17_stopwatch](../js17-or-stopwatch/)

> #### Doelen:  
> * Toepassen van <i>position: absolute</i> met met <i>top: ..px</i> en <i>left: ..px</i> 
> * clickable gebieden aanbrengen op background-image
> * True Type Font (ttf) instaleren en gebruiken
> * Wijzigen / toggelen van css-classes

In de opdracht [js17_stopwatch](../js17-or-stopwatch/) is met Javascript een eenvoudige stopwatch gemaakt.<br>
We leggen in deze opdracht, het display en klikfuncties over een bestaande foto van een stopwatch en laten die weer werken.

<div style=" display:flex; text-align:center">
    <div>{{ '/_assets/frontend/css17_A.png' | url | image: 'stopwatch png', 60 }}<br><i><b>afb 1</b></i></div>
    <div>{{ '/_assets/frontend/css17_B.png' | url | image: 'stopwatch png', 60 }}<br><i><b>afb 2</b></i></div>
    <div>{{ '/_assets/frontend/css17_C.png' | url | image: 'stopwatch png', 60 }}<br><i><b>afb 3</b></i></div>
</div> 

### opdracht
* neem als basis de code opdracht js17_stopwatch
* zoek een afbeelding van een stopwatch (mooist is een vrijstaande png) <i><b>afb 1</b></i>
* plaats deze als background van een &lt;div&gt; die <i>postition: relative</i> heeft en pas <i>width</i> en <i>height</i> aan zodat de afbeelding past
* maak <i>absolute</i> divs aan op de plek van het display, start/stop button en reset en light-buttons. 
    * geef de divs voor het gemak even border mee <i><b>afb 2</b></i>
    * Positioneer met <i>top</i> en <i>left</i> en pas breedte aan met <i>width</i> en <i>height</i>
* maak de divs clickable en verwijs naar bestaande functions van js17_stopwatch
* maak de achtergrond van <i>display</i> grijs
* zoek een lettertype die op een quartz-klok lijkt op internet
    * download het ttf bestand
    * zoek op hoe je een ttf bestand in je webpagina gebruikt en pas toe <i><b>afb 3</b></i>
* voeg een class toe waarmee je de button <i>light</i> laat werken

<video  height="179" controls>
    <source src="https://std.stegion.nl/cs_codebase/js17_stopwatch/mp4/stopwatch_img.mp4" type="video/mp4" >
    Your browser does not support the video tag.
</video>