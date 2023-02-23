---
key: 2440
title: Intake; Ubuntu
difficulty: basic
date: 2023-01-02
technology: 
author: rkerssies
---


# {{ title }}

<img src="{{ '/_assets/omgevingen/newbie.png' | url }}" style="width:13%; border-radius:10px;">

Welkom bij het ICT-Lyceum. Je zit nu in een intake-moment en krijgt de tijd om een beroepservaring op te doen.
Hopelijk kom je er zo achter of dit beroep als ICT-beheerder (Expert-IT of All-round) bij jou past.


> ##### Doel
> * Ervaren of de opleiding en het beroep van ICT-beheerder bij jou past
> * Werken met virtuele computers (gesimuleerde hardware)
> * Een ervaring in het installeren van een operatingsysteem
> * Kennismaken specificaties voor computerhardware
> * Een ervaring met gevirtualiseerde hardware
> * Een ervaring op doen met een ander Operatingsysteem dan Windows, namelijk Linux.
> * Moment om vragen te stellen aan docenten en studenten over de opleiding, de sfeer en het beroep 


***Een gevirtualiseerde desktop opzetten:***
Binnen de ICT-beheer wordt veel gewerkt met VMWare. 
Met VMWare kun je onder andere op je eigen PC/Laptop “virtuele computers” aanmaken. 
Hierbij wordt hardware gesimuleerd door software. Op deze ‘virtuele computers’ 
kun je een besturingssysteem installeren, zoals Windows 10/11, Windows Server, Linux, etc. 
Deze ‘virtuele computers’ zijn in het bedrijf in te zetten als echte computers en/of servers.

## De opdracht ###
In deze opdracht ga je een Linux-distributie naar keuze installeren op een virtuele computer in VM-ware. 
VM-ware is één van de bedrijven die virtualisatie software maakt. 
Die na de installatie ook toegang tot het Internet heeft, controleer dit na de installatie.<br>

#### Voorbereiding ####
Voordat je gaat beginnen, zorg je ervoor dat de PC in het lokaal ook toegang heeft tot het Internet. 
* Hierbij moet je ervoor zorgen dat de IP-instellingen op de PC op automatisch staan ingesteld en 
dat de netwerkkabel aangesloten is op de geschikte poort aan de achterkant van de PC.  
* De andere kant van de kabel moet op een oneven-poort in een muur-outlet komen (Bijvoorbeeld 33, 47, etc. 
* De poorten die beginnen met een letter kun je niet gebruiken, dus bijvoorbeeld A11, D3).

#### Ubuntu installatie "schijf" downloaden ####
Voor de installatie van de Linux distributie naar keuze, moet je een zogenoemd
ISO-bestand te downloaden vanaf het Internet. 
Dit bestand bevat de installatiebestanden van het gekozen besturingssysteem.<br> 
Een van de meest gebruikte Linux distributies is [Ubuntu desktop]({{ 'https://ubuntu.com/desktop' | url }}), 
dus ben je hier nog niet bekend met Linux.
* Download Ubuntu-desktop, in de downloads-map komt een .iso-bestand te staan.

#### De virtuele "computer" opzetten en installatie Ubuntu #### 
Ga zelf op onderzoek uit (google) hoe je virtuele computer kunt aanmaken in 
VMWare workstation en hoe je het gekozen besturingssysteem vervolgens kunt installeren hierop.<br>
<img src="{{ '/_assets/omgevingen/vm-ware.jpg' | url }}" style="width:50%;"><br>
* Maak een virtuele machine aan die voldoet aan de volgende specificaties:
    *	CPU: 				1 Processor met 2 cores
    *	RAM-geheugen: 		2GB (2048 MB)
    *	Harde schijf: 		20GB
    *	Eén netwerkkaart: 	ingesteld op NAT
    *	Eén CD/DVD speler 
* Koppel de gedownloade ISO-file aan de "CD/DVD-speler" 
* Start de installatie procedure van Ubuntu en volg de instructies. Kies "Installeer Ubuntu", NIET de "Tryout".
* Ga eens op ontdekking uit wat Ubuntu-Linux allemaal voor jou te bieden heeft. 😊<br>
  <img src="{{ '/_assets/omgevingen/ubuntu.jpg' | url }}" style="width:50%;">


> ##### Op te leveren
> * een gevirtualiseerde Linux-installatie 
> * jouw feedback of de opleiding bij jou past 
