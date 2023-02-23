---
title: Elfproef
difficulty: medium #basic | medium | expert
date: 2023-01-02
author: kstarreveld
key: all
technologies: all
---



# {{ title }}

> #### Voorkennis:  
> * Programmeertaal naar keuze
> * string functies ( strlen,  substr)

> #### Doelen:  
> * leren hoe je strings doorloopt en opsplitst ( Van string naar array)
> * leren hoe je van character naar getal gaat om er mee te rekenen.
> * leren een iets moeilijkere berekening te maken mbv. de modulo functie ( mod of symbool: %)


### opdracht 
* Schrijf een programma dat de controle op bankrekeningnummers ( de laatste 9 cijfers van een IBAN nummer) uitvoert.   ( de elf proef). 

* Om te controleren of een bankrekeningnummer echt is, worden de cijfers van het nummer vermenigvuldigd met respectievelijk 9,8,7, enz… 
Daarna worden alle producten bij elkaar opgeteld, als deze som een veelvoud van 11 is, is het banknummer correct. Het programma stopt als een 0 wordt ingevoerd. En er moet gecontroleerd worden of er wel echt negen cijfers zijn opgegeven. 
 
> #### Voorbeeld:. 
> Bankrekeningnummer  = 199858535
>
> 1 * 9 =  9  
> 9 * 8 = 72  
> 9 * 7 = 63   
> 8 * 6 = 48   
> 5 * 5 = 25   
> 8 * 4 = 32   
> 5 * 3 = 15  
> 3 * 2 =  6  
> 5 * 1 =  5  
>
>
> Alles bij elkaar optellen: 
> 9+72+63+48+25+32+15+6+5 = 275    
>   275 delen door 11  
>   275/11 geeft 25. 
> dus 199858535 is een correct banknummer    
> Om te kijken of er een rest na deling is gebruik je mod operator  (van modulo:  % )   
> In code:     
> ```shell
> int rest = 275 % 11;
> ```