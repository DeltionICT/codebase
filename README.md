# codebase
De codebase bestaat uit alle opdrachten uit de codebase van ICT-Flex. Daarnaast kan het systeem worden uitgebreid met projecten, wireframes voor front-end opdrachten en meer. (suggesties zijn welkom!)

* Gebouwd met 11ty.
* 11ty is een static site generator gebaseerd op javascript (npm)
* Je kunt de repository clonen naar lokale omgeving en daar aanpassen.
* Gebruik <code>npm i</code> om de node_modules te installeren
* Gebruik <code>npm run start</code> om een webserver op te starten en de gegenereerde site te bekijken in je lokale omgeving.
* Zodra de aangepaste repo/master wordt gepushed naar github wordt via een github-action de online site opnieuw gegenereerd en gepubliceerd
* Je kunt bestanden ook op github zelf aanpassen!. 

### Hoe werkt het
* De codebase opdrachten staan in de map src/codebase. In deze map kunnen nieuwe opdrachten geplaatst worden en bestaande opdrachten kunnen worden aangepast.
* Een nieuwe opdracht begint altijd met:


```python
---
title: Array
difficulty: basic #basic | medium | expert
date: 2023-01-02
---

#### {{ coursetitle }}

## {{ title }}

```
* Op de plek van coursetitle komt bovenin het scherm 'codebase' te staan (met een streep eronder).
* De tekst die tussen de '---' en de '---' staat wordt 'frontmatter' genoemd.
* Difficulty bepaalt het aantal 'pepertjes' dat wordt getoond naast de titel van een opdracht.
* Date bepaalt niet alleen de datum, maar ook de volgorde waarin opdrachten worden weergegeven (beetje awkward, maar voorlopig werk het zo!)
* Op de plek van {{ title }} komt de waarde van de variabele title te staan. In dit geval 'Array'.

### Codefragmenten
Een codefragment kun je genereren door te starten met <code>'''javascript</code> en ook te eindigen met <code>'''</code>. In plaats van javascript kun je ook andere talen gebruiken (php, python, csv, sql en meer).

### Video
Je kunt video's plaatsen die op youtube staan. Een enkele video plaats je met de volgende shorcode:
```javascript
// Een video plaatsen
{% video "9z9ntwLt4IQ"%}

// Een playlist plaatsen
{% video "videoseries?list=PLwzcTrPriiGYd3q-9inptvru_8UuUCbJ8" %}
```
### Afbeeldingen
Je kunt afbeeldingen tonen met behulp van markdown-code:
```javascript
// absolute link naar een externe afbeelding
![alt-tekst](http://link/naar/de/afbeelding)

// relatieve link naar een afbeelding op 100% van de breedte van de pagina:
![alt-tekst]( {{ '/pad/naar/map/in/src-directory' | url }} )

// relatieve link naar een afbeelding met een aangepaste breedte in %
{{ '/_assets/backend/cursus.png' | url | image: 'Cursus databases ERD', 60 }}
```
De dubbele curly braces zorgen ervoor dat het opgegeven pad wordt omgezet naar een absolute url.  
Het pad naar de afbeelding wordt bewerkt door een 'url'-filter. De baseURL wordt toegevoegd.  
Het 'image'-filter wordt aangeroepen met de grootte als percentage en de alt-tekst.  

### Links
Je kunt op de volgende manier links maken in markdown:
```html
[Apple](https://www.apple.com)

komt overeen met

<a href="https://www.apple.com">Apple</a>

```

### HTML
Markdown wordt omgezet naar HTML. Je kunt HTML ook rechtstreeks gebruiken.
Onderstaande tabel is met HTML gemaakt. Plaats de code binnen div-tags met class="html".

<div class="html">
<table style="transform: rotate(45deg); background-color:green; margin:10px;">
    <tr>
        <td>zout</td>
        <td>suiker</td>
    </tr>   
     <tr>
        <td>drop</td>
        <td>chips</td>
    </tr>
</table>
</div>

Onderstaande extra stijlen in de table-tag werken niet in deze readme, maar wel in de markdown-pagina's die in de site worden gegenereerd!

```html
<div class="html">
<table style="transform: rotate(45deg); background-color:green; margin:10px;">
    <tr>
        <td>zout</td>
        <td>suiker</td>
    </tr>   
     <tr>
        <td>drop</td>
        <td>chips</td>
    </tr>
</table>
</div>
```

## Updates
rel v0.1.0 2023-02-09
In deze release wordt automatisch de course-title ( = coursetitle geworden)  genereerd, evenals de datum en de auteurs. Deze gegevens verschijnen bovenaan bij iedere opdracht. In de navigatie is een knop 'More..' toegevoegd met een link naar overzichten van auteurs en technologieën. Per auteur of technologie kunnen nu bijbehorende opdrachten worden opgevraagd.
Deze functie werkt alleen als er in de front matter ook een auteur(s) en/of technology wordt opgegeven.

Voorbeeld:

title: Whatever
author: jsiewers, cstegeman
technology: php, html, css
date: 04-04-2023

