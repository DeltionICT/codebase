---
title: Kassa systeem
key: 1002
difficulty: expert #basic | medium | expert
date: 2023-01-02
author: jheuvelman
technology: all
---





> ### Voorkennis
> Programmeertaal: naar keuze

### Resultaat
Schrijf een programma dat de gebruiker een aantal bedragen vraagt.  
Het programma controleert of het ingegeven bedrag daadwerkelijk een bedrag is en geen tekst of ongeldige tekens bevat.  
Het programma stopt met vragen naar bedragen als een 0 of een negatief getal wordt ingegeven.  
Het programma toont nu de som van alle bedragen.  
Het vraagt daarna om het bedrag waarmee wordt betaald.  
Als het betaalbedrag kleiner is dan het te betalen bedrag, dan vraagt het programma om nog een bedrag.   
Dit herhaalt zich todat het hele bedrag betaald is.  
Als het betaalbedrag groter is dan het te betalen bedrag, dan laat het programma zien hoeveel wisselgeld de klant tegoed heeft.

#### Voorbeeld
```shell
Geef bedrag 1 : 25.25 
Geef bedrag 2 : 40.12 
Geef bedrag 3 :  1.00
Geef bedrag 4 : abc34 
Dit is geen geldige waarde 
Geef bedrag 4 : 34
Geef bedrag 5 : 8.99 
Geef bedrag 6 : 0 
Totaal te betalen : 109.36

Met hoeveel betaalt u: 100.00 
Er blijft nog over : 9.36 
Met hoeveel betaalt u? 9.0o 
Dit is geen geldige waarde  
Er blijft nog over : 9.36 
Met hoeveel betaalt u? 9 
Er blijft nog over : 0.36 
Met hoeveel betaalt u? 0.40 
U krijgt terug : 0.04 
Bedankt voor het zaken doen.
```