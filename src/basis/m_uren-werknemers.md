---
title: Urenregistratie
key: 1050
difficulty: medium #basic | medium | expert
date: 2023-01-02
author: jheuvelman
technology: all
---



# {{ title }}

> ### Voorkennis
> Programmeertaal: naar keuze

### Omschrijving
Van een bedrijf wordt door de werknemers een urenregistratie bijgehouden van het aantal gewerkte uren bij de klanten.  
Aan het einde van de week wordt van elke dag het aantal gewerkte uren en of minuten ingevoerd in de computer.  
Alle 5 de werkdagen moeten worden ingevoerd.  
Als op een bepaalde dag niet is gewerkt, wordt als aantal uren en minuten 0 ingevuld.

### Resultaat
Maak een programma waarbij voor elke werkdag (maandag t/m vrijdag) het aantal gewerkte uren en minuten ingevoerd kan worden.  
Na invoer berekent het programma het volgende:

- aantal werkdagen
- totale werktijd
- langste werkdag

#### Voorbeeld
```shell
werkdag: ma
aantal_uur: 4
aantal_minuten: 0

werkdag: di
aantal_uur: 8
aantal_minuten: 37

werkdag: wo
aantal_uur: 0
aantal_minuten: 0

werkdag: do
aantal_uur: 6
aantal_minuten: 25

werkdag: vr
aantal_uur: 3
aantal_minuten: 12

Aantal werkdagen: 4
Totale werktijd: 17 uur en 14 minuten
Langste werkdag: dinsdag
```
