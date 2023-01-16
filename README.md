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
* 
```python
---
title: Array
difficulty: basic #basic | medium | expert
date: 2023-01-02
---

#### {{ course-title }}

## {{ title }}

```
* Op de plek van course-title komt bovenin het scherm 'codebase' te staan (met een streep eronder).
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
Uitleg volgt....
