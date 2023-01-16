# codebase
De codebase bestaat uit alle opdrachten uit de codebase van ICT-Flex. Daarnaast kan het systeem worden uitgebreid met projecten, wireframes voor front-end opdrachten en meer. (suggesties zijn welkom!)

* Gebouwd met 11ty.
* 11ty is een static site generator gebaseerd op javascript (npm)
* Je kunt de repository clonen naar lokale omgeving en daar aanpassen.
* Gebruik <code>npm i</code> om de node_modules te installeren
* Gebruik <code>npm run start</code> om een webserver op te starten en de gegenereerde site te bekijken.

### Hoe werkt het
* De codebase opdrachten staan in de map src/codebase. In deze map kunnen nieuwe opdrachten geplaatst worden en bestaande opdrachten kunnen worden aangepast.
* Een nieuwe opdracht begint altijd met:
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
