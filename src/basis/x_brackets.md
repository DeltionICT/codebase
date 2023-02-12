---
title: Brackets
difficulty: expert #basic | medium | expert
date: 2023-01-02
author: jheuvelman
---



# {{ title }}

> ### Voorkennis
> Programmeertaal: naar keuze

### Omschrijving
Een bracket wordt gezien als één van de volgende karakters: <code>(, ), {, }, [, ]</code>  
Twee brackets worden gezien als aan paar als de opening bracket <code>(, [ of {)</code> links staat van een closing bracket <code>), ] of } </code> van hetzelfde type. 
Er zijn drie paren: <code>(), {} en [ ]</code>.  
Een paar is niet in balans als de set van brackets die het omsluit niet overeen komt. Bijvoorbeeld <code>{ [ ( ] ) }</code> is niet in balans omdat de content tussen de <code>{</code> en <code>}</code> niet in balans is.

Een voorbeeld van gebalanceerde brackets zijn:  
<code>[ ]{ }( )</code>  
<code>[ ( { } ) ]{ }( )</code>  
<code>( { ( ) { } [ ] ) [ ]</code>

### Resultaat
Schrijf een programma dat de gebruiker vraagt een set brackets in te voeren.  
Zorg ervoor dat de gebruiker alleen brackets kan invoeren, andere tekens zijn niet toegestaan.  
Wanneer de bracket invoer in balans is, print het programma "Ja".  
Wanneer de bracket invoer niet in balans is, print het programma "Nee".

#### Voorbeeld
```shell
Voer een set brackets in: 
[ { } { } ( { ( ) } ) ] 
Ja 

Voer een set brackets in:
[afdh] 
Onjuiste invoer 

Voer een set brackets in: 
[ {  ] 
Nee
```