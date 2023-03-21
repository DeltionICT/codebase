---
title: ASP.net C# Verdieping
difficulty: expert
date: 2023-03-21
author: kscheening
technology: cscharp, .netCore, Razor
---

# {{ title }}

> ##### Voorkennis
> * programmeer-basics
> * programmeertaal: C#
> * front- & backend kennis

> ##### Doel
> * Het opzetten van een simpele ASP.net applicatie (frontend en backend) inclusief CRUD functionaliteiten met Razor pages.

Om te leren hoe je een ASP.net webapplicatie kan opzetten en realiseren kan je de volgende lessenreeks volgen van [Microsoft](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/?view=aspnetcore-7.0)!

***Opdracht***

Om een goeie basis te krijgen in ASP.net ga je een kleine school webshop maken waarin studenten verdiende punten kunnen inleveren tegen beloningen. Studenten kunnen een eigen account hebben (die gekoppeld is aan een docent) en procuten kopen met een virtuele balans. 

Dit balans kan opgewaardeerd worden door een administrator/docent of door acties (denk aan Twitch rewards bijvoorbeeld). De producten die “gekocht” kunnen worden zijn voordelen binnen een school; denk bijvoorbeeld 1 keer een les mogen skippen, een gratis lunch of een toets beginnen met een 3.5.  Wat deze beloningen zijn mag je zelf bepalen (maar wees reëel).  

>**Vereisten** 
> * -Er moeten verschillende rollen aanwezig zijn met de volgende bevoegdheden:
>> - Administrator: Heeft alle rechten en kan beloningen toevoegen/wijzigen/verwijderen.
>> - Docent: Heeft een overzicht van alle gekoppelde studenten, kan opdrachten aanmaken /wijzigen/verwijderen en aanvinken voor studenten en individueel punten geven.
>> - Student – Kan opdrachten en zijn virtuele balans inzien en kan punten inleveren voor beloningen
> * Een ‘shop’ waarin een student zijn punten kan spenderen aan voordelen/beloningen. 
> * Wanneer een student iets koopt krijgt de gekoppelde docent/mentor een notificatie.
> * Een student heeft een geschiedenis van alle aankopen die hij heeft gedaan: 
>> - Een docent en admin kan deze lijst ook inzien 
>
>**Bonus**
>
> Studenten zijn gekoppeld aan een klas en kunnen gezamenlijk sparen voor een klas brede beloning. Deze beloningen kosten veel en moeten afgekocht worden: elke student in de klas kan een gedeelte van dit bedrag afkopen. Wanneer de kost op 0 staat heeft de klas deze beloning gekocht.

De frontend design mag je volledig zelf bepalen. Houd het wel strak, overzichtelijk en gebruikersvriendelijk. Bekijk de verschillende themas van User Experience voor een goeie basis in designkeuzes!