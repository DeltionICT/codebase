---
title: js27b | JS Events
difficulty: basic #basic | medium | expert
date: 2023-01-31

---

# {{ title }}

> #### Voorkennis:  
> * JS Functions 
> * input tag


> #### Doelen:  
> * leren werken met Javascript events als onclick, onblur e.a.
> * leren hoe je input variabelen afvangt en controleert op inhoud (Frontend validation)

### opdracht
* Maak een pagina met 2 input- type=text elementen en een div waar je je output in kan schrijven
    * zet voor de eerste input "naam", voor de tweede: "leeftijd". 
    * geef de output div een rand of achtergrondkleur waardoor hij goed zichtbaar is en een min. hoogte
* Zet op de eerste input een [onblur-event](https://www.w3schools.com/jsref/event_onblur.asp)
* Als je iets in de eerste input typt en deze verlaat, wordt de onBlur getriggerd
    * zet een console.log() melding in de function die door de onBlur aangeroepen wordt, ter controle of de onBlur werkt
* Zet op de tweede input een [onkeyup-event](https://www.w3schools.com/jsref/event_onkeyup.asp)
* Als je een toets indrukt en weer los laat in de tweede input, triggerd dit het event 
    * Zorg dat bij schrijven in de tweede input
        * de geschreven tekst in de output verschijnt
        * en daaronder het [aantal letters](https://www.w3schools.com/jsref/jsref_length_string.asp) die in de geschreven tekst staan
* breidt de function van de onBlur uit:
    * wanneer je de input verlaat moet er gecheckt worden of er minimaal 2 en maximaal 10 karakters in staan
        * gebruik een <i>if</i>-statement om de <i>length</i> van de input te checken en vermeld die eerst in een <i>console.log()</i> ter controle
        * zorg dat dat de achtergrond kleur van de input rood of groen kleurt als aan de voorwaarde niet of wel voldaan wordt
        * voeg &lt;span&gt; met een id achter de input toe 
            * met groene tekst: "voldoet aan eisen: tekst langer dan 1 teken en leiner dan 10"
            * of: rode tekst: "de tekst moet minimaal 2 karkaters bevatten" of "de tekst mag maximaal 10 karakters bevatten" 

### opdracht: variabel maken van min. / max. lengte input
* maak 2 input-elementen aan waar de minimale en maximale lengte van de tekst in staan en voer die als variabelen in de rest van de code door


