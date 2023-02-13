---
title: Zwabbertje-casus
difficulty: medium
date: 2022-03-01
technology: scrum, all
author: rkerssies
---


# {{ title }}

<img src="{{ '/_assets/projecten/project-laptop.png' | url }}" style="width:10%;">

## De casus
Schoonmaakbedrijf Het Zwabbertje is gespecialiseerd in het reinigen van kantoorpanden. Om te controleren of dit ook goed gedaan wordt, wordt dagelijks  gecontroleerd hoe de schoonmaakwerkzaamheden zijn uitgevoerd. Er wordt gecontroleerd op de volgende punten:
*	Vloer
*	Stoelen
*	Tafels
*	Kasten
*	Overig meubilair
*	Vensterbanken
*	Toiletten
*	Wastafel

Bij de controle wordt voor elk punt een beoordelingsresultaat gegeven. Dit kan het volgende zijn:
*	0: niet te beoordelen
*	1: onvoldoende
*	2: matig
*	3: voldoende
*	4: goed

Bij een beoordeling 0 voor een tafel kan het voorkomen dat degene die aan de tafel heeft 
gewerkt nog allemaal rommel heeft laten liggen. Het schoonmaken van de tafel kan zodoende niet worden beoordeeld.

Iedere ruimte heeft een bepaalde schoonmaaktijd (afhankelijk van de grootte en het aantal schoon te maken objecten). Verschillende ruimten kunnen ook verschillende objecten hebben (een toiletruimte heeft andere schoon te maken objecten dan een kantoorruimte). Elke ruimte heeft een minimum beoordeling, afhankelijk van de schoon te maken objecten. Voor sommige objecten in een ruimte geldt dat ze schoon moeten zijn (cruciaal). Is bijvoorbeeld de in een toiletruimte de wc niet schoon en de rest wel, dan is het schoonmaakresultaat toch onvoldoende.
Het Zwabbertje heeft 15 schoonmakers in dienst. Elke schoonmaker wordt voor 1 of meer ruimten ingepland.
De applicatie heeft de volgende functionele eisen:
*	Beheer van gegevens van bedrijven (toevoegen, wijzigen, verwijderen).
*	Beheer van gegevens van ruimten (toevoegen, wijzigen, verwijderen).
*	Beheer van gegevens van objecten (toevoegen, wijzigen, verwijderen).
*	Schoonmaakobjecten aan een ruimte kunnen koppelen.
*	Beheer van gegevens van schoonmaakmedewerkers (toevoegen, wijzigen, verwijderen).
*	Een weekplanning voor een schoonmaker kunnen maken en ook kunnen wijzigen.
*	Schoonmaakresultaten van objecten in een ruimte kunnen vastleggen voor een dag. De som van de schoonmaakresultaten van de objecten in een ruimte is de beoordeling van het schoonmaakresultaat van een ruimte.

Van elke ruimte moeten de volgende overzichten kunnen worden gemaakt (gedurende een in te stellen periode):
*	Dagelijkse beoordelingen van de schoonmaakwerkzaamheden, en de schoonmaakmedewerker die hiervoor verantwoordelijk was.
*	Dagelijkse beoordeling van alle schoonmaakwerkzaamheden van alle ruimten in het gehele pand (met de schoonmaakmedewerkers die hiervoor verantwoordelijk zijn).

Van elke schoonmaakmedewerker moeten de volgende overzichten kunnen worden gemaakt (gedurende een in te stellen periode):
*	Dagelijkse beoordeling van de ruimten die hij/zij heeft schoongemaakt.
*	Het aantal uren dat dagelijks gewerkt is, en het totaal aantal uren in de periode. Bij het dagelijks aantal uren moet ook te zien zijn bij welk bedrijf deze uren zijn gemaakt.

Voorbeeld:
___________
Ruimte 3.02 heeft de volgende objecten:<br>
Vloer<br>
Tafel 3.021<br>
Tafel 3.022<br>
Stoel 3.023<br>
Stoel 3.024<br>
Minimum schoonmaakresultaat: 15 (5 * 3 punten)<br>
____________

Na beoordeling:
____________
Vloer		: 2<br>
Tafel 3.021	: 3<br>
Tafel 3.022	: 3<br>
Stoel 3.023	: 1<br>
Stoel 3.024	: 4<br>
Schoonmaakresultaat ruimte 3.02: 13<br>
Schoonmaakresultaat: onvoldoende.<br>
_______________

> ##### Voorkennis
> * OOP, databases, queries, API, git
> * Kennis van projectmatig werken en/of Scrum


## Uitvoering
* Het project wordt uitgevoerd m.b.v. de SCRUM-methodiek, in een team van vier developers.
* Er wordt DevOps gebruikt als projectmanagement-tool (docenten zijn stakeholders)
* Ontwerp met wireframes, userstories per functionaliteit, elke userstory bevat gedetailleerde taken,
  professioneel gebruik git-hub, dailystandups, restrospective.
* elke sprint opleveren met een productreview en retrospective (team)
* code-review


> {{technologiesTags}}

