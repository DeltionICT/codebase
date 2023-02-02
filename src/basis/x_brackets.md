---
title: Brackets
difficulty: expert #basic | medium | expert
date: 2023-01-02
---

#### {{ course-title }}

# {{ title }}

> ### Voorkennis
> Programmeertaal: naar keuze

### Omschrijving
Een bracket wordt gezien als één van de volgende karakters: (, ), {, },
\[, \]. Twee brackets worden gezien als aan paar als de opening bracket
(bijv. (, \[ of {) links staat van een closing bracket (bijv. ), \] of
}) van hetzelfde type. Er zijn drie paren: (), {} en \[\]. Een paar is
niet in balans als de set van brackets die het omsluit niet overeen
komt. Bijvoorbeeld, {\[(\])} is niet in balans omdat de content tussen
de { en } niet in balans is.

Een voorbeeld van gebalanceerde brackets zijn: \[\]{}(), \[({})\]{}() en
({(){}\[\]})\[\].

### Resultaat
Schrijf een programma dat de gebruiker vraagt een set brackets in te
voeren. Zorg ervoor dat de gebruiker alleen brackets kan invoeren,
andere tekens zijn niet toegestaan. Wanneer de bracket invoer in balans
is, print het programma "Ja". Wanneer de bracket invoer niet in balans
is, print het programma "Nee".

***Voorbeeld:***  
Voer een set brackets in: \[{}{}({()})\] Ja Voer een set brackets in:
\[afdh\] Onjuiste invoer Voer een set brackets in: \[{\] Nee
