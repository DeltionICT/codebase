---
title: XML to JSON
difficulty: medium #basic | medium | expert
date: 2023-01-02
author: jheuvelman
technology: all
---



# {{ title }}

> ### Voorkennis
> Programmeertaal: naar keuze

### Resultaat
Maak een programma dat de XML-code converteert naar JSON. 

XML-bestand:

```xml
<?xml version="1.0"?>
<Klanten>
  <Klant>
    <Bedrijf>Van Gerven b.v.</Bedrijf>
    <Voornaam>Ellen</Voornaam>
    <Achternaam>Adams</Achternaam>
    <Email>ellen_adams@hoppeldiepee</Email>
    <Straatnaam>Jan de Witstraat</Straatnaam>
    <Stad>Amsterdam</Stad>
    <Postcode>3345 SF</Postcode>
    <Land>Nederland</Land>
  </Klant>
</Klanten>
```

Het JSON-bestand moet het volgende formaat hebben:

```javascript
{
  "Klanten": [{
    "Bedrijf": "",
    "Voornaam": "",
    "Achternaam": "",
    "Email": "",
    "Straatnaam": "",
    "Stad": "",
    "Postcode": "",
    "Land": ""
  }]
  }      
```


