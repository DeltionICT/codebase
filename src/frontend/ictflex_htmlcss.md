---
layout: h2_toc
title: HTML en CSS
key: 2514
difficulty: basic
date: 2023-03-14
author: jsiewers, jheuvelman, adalmolen, pvangemert
technology: html, css
---



> #### Voorkennis
> * Je hebt je docentenopleiding afgerond
> * Je kunt werken met een computer

> #### Dit ga je leren
> * Je gaat aan de hand van een template een nieuwe opdracht maken voor een module
> * Markdown: Je maakt gebruik van markdown om de opdracht vorm te geven
> * Testen: Je test de nieuwe opdracht in een lokale omgeving
> * Indienen van een pull-request

## Opdracht
Dit beschrijft wat je moet doen en wat er van je wordt verwacht

## Resultaat
Dit is het gewenste resultaat
Hier wordt aangegeveen wat je moet opleveren en waar.

## Evaluatie
Dit is een rubrics of checklist  waaraan je kunt zien of de opdracht juist is uitgevoerd

 



## Introductie

In eerdere projecten hebben we kennis gemaakt met de basisstructuren van
HTML en CSS. In deze opdracht gaan we onze kennis van HTML/CSS verder
uitbreiden.

## Backlog

-   Als webdeveloper wil ik mijn kennis over HTML en CSS vergroten,
    zodat ik mooie websites kan bouwen;
-   Als student moet ik brede kennis van HTML en CSS hebben zodat ik
    mijn examen (proeve van bekwaamheid, PVB) kan halen;
-   Als student wil ik opdrachten maken met HTML en CSS zodat ik kan
    leren hoe ik HTML en CSS in de praktijk kan toepassen;
-   Als webdeveloper wil ik HTML en CSS kunnen lezen en begrijpen, zodat
    ik code van anderen kan beoordelen op bruikbaarheid in eigen
    projecten;
-   Als webdeveloper moet ik clean code schrijven zodat collega’s mijn
    code makkelijker kunnen begrijpen en onderhouden;

## Basis HTML-elementen

Om mooie en functionele HTML-pagina’s te kunnen maken is het belangrijk
om de basiselementen van HTML goed te begrijpen. In vorige projecten heb
je al geoefend met HTML en CSS. Deze opdracht gaat hiermee verder. Het
doel van deze opdracht is dat je steeds meer komt te weten over HTML en
CSS zodat je dit kunt toepassen in de webpagina’s of webapplicaties die
je gaat ontwikkelen.

De volgende onderdelen worden in de komende pagina’s behandeld.

-   Tabellen
-   Formulieren
-   `Div`’s
-   `id` of `class`
-   Elementen selecteren
-   `Float` en `clear`

## Tabellen

We beginnen met het behandelen van de techniek van HTML-tabellen.
Vroeger werd deze techniek ook gebruikt om de lay-out van een
HTML-pagina te bepalen, maar door de komst van nieuwe web-technieken
wordt dit tegenwoordig niet meer geaccepteerd. Voor de lay-out van een
HTML-pagina gebruiken we Div’s en CSS, deze worden verderop in deze
opdracht behandeld. Met Div’s en CSS kunnen we namelijk de webpagina’s
die we maken gestructureerd en flexibel opbouwen en deze ook geschikt
maken voor desktop en mobiele apparaten.

Tabellen kunnen in HTML gebruikt worden om data overzichtelijk weer te
geven. Om een tabel met HTML te maken gebruiken we de `<table>` tag.
Tabellen worden in HTML opgebouwd in rijen en kolommen en een tabel mag
opgesplitst worden in drie secties: een koptekst `(header)`, een
voettekst `(footer)` en de tabel zelf `(body)`. De basis van een
HTML-tabel is dus als volgt:

``` html
<table>
	<thead>.............</thead>
	<tbody>.............</tbody>
	<tfoot>.............</tfoot>
</table>
```

Om een tabel met HTML te maken gebruiken we de volgende tags:

-   `<table>` - Hiermee kunnen we een nieuwe tabel maken.

-   `<tr>` - Hiermee kunnen we een nieuwe rij beginnen.

-   `<td>` - Hiermee maken we een nieuwe datacel (kolom) in de tabel.

-   `<th>` - Deze is hetzelfde als `<td>`, maar wordt gebruikt voor een
    titelveld.

-   `colspan` - Met het colspan attribuut kunnen we aangeven hoeveel
    kolommen een element breed is. Colspan voegt dus kolommen samen.

-   `rowspan` - Met het rowspan attribuut kunnen we aangeven hoeveel
    rijen een element breed is. Rowspan voegt dus rijen samen.

Op de website <https://www.w3schools.com/html/html_tables.asp>  kun je
meer informatie vinden over tabellen en het gebruik hiervan. Zoek dit
uit.

#### Taak 1 : Maak een tabel

1.  Gebruik je favoriete editor en neem de tabel van listing
    <a href="#opdracht01table" data-reference-type="ref"
    data-reference="opdracht01table">[opdracht01table]</a> over. Plaats
    deze in een bestand op een logische plek in je htdocs folder.

2.  Start de webpagina en kijk naar het resultaat.

3.  Pas de tabel aan en maak zes rijen en drie kolommen. Zet daarin jouw
    eigen top vijf van mooiste auto’s.

4.  Pas de tabel aan, zodat je kunt klikken op de naam van de auto,
    zodra je erop klikt word je doorgestuurd naar de webpagina van het
    desbetreffende automerk.

5.  Maak in elke rij een vierde kolom aan. Plaats in deze kolom een foto
    van de desbetreffende auto. (Gebruik google voor het vinden van de
    juiste foto, denk aan het auteursrecht). Zorg ervoor dat het formaat
    van elke foto die je gebruikt hetzelfde is.

6.  Commit en push!

``` html
<table>
   <thead>
   <tr>
      <td></td>
      <th>Merk</th>
      <th>Model</th>
      <th>Type</th>
   </tr>
   </thead>
   <tbody>
      <tr>
      <th>Rij 1</th>
      <td>Kolom 1 - Rij 1</td>
      <td>Kolom 2 - Rij 1</td>
      </tr>
      <tr>
      <th>Rij 2</th>
      <td>Kolom 1 - Rij 2</td>
      <td>Kolom 2 - Rij 2</td>
      </tr>
   </tbody>
   <tfoot>
      <th colspan="3">Een voorbeeld tabel</th>
   </tfoot>
</table>
```

## Formulieren

Vaak wordt er op websites gebruik gemaakt van formulieren. Denk
bijvoorbeeld aan contact- of bestelformulieren. Deze formulieren kunnen
bezoeker op de webpagina invullen, waarna de ingevulde gegevens
opgeslagen worden in een database of per mail verstuurd worden.

#### Taak 2a : Beginnen met formulieren

#### Onderzoek

Zoek uit wat de functie van de volgende tags is. Gebruik indien nodig
het internet of de kennis van een medestudent of docent.

-   Form

-   Label

-   Placeholder

-   Input type tekst

-   Input type radio

-   Input type checkbox

-   Textarea

-   Input type submit

-   Input type reset

#### Gebruik kennis

-   Maak een nieuwe HTML-pagina in je htdocs folder en voeg hieraan het
    formulier uit listing <a href="#form01" data-reference-type="ref"
    data-reference="form01">[form01]</a> toe.

-   Pas de code aan, zodat bij de form action je eigen e-mailadres staat
    in plaats van
    <a href="student@st.deltion.nl" class="uri">student@st.deltion.nl</a>

-   Sla het bestand op en open de pagina in de browser.

-   Wat gebeurt er als je op de “submit” button klikt?

``` html
<form action="mailto:student@st.deltion.nl" 
	method="post">

	<label for="fname">Voornaam:</label>
	<br>

	<input type="text" id="fname" name="fname" 
		placeholder="Voornaam" value="">
	<br>

	<label for="lname">Achternaam:</label>
	<br>

	<input type="text" id="lname" name="lname" 
		placeholder="achternaam" value="">
	<br>
	<br>

	<input type="submit" value="Submit">
</form>
```

-   Breidt het formulier uit met de volgende drie velden: Adres,
    Postcode en Plaats.

-   Open het formulier in de browser en controleer of het werkt.

-   Zijn de aanpassingen goed doorgevoerd en ben jij tevreden? Commit en
    push deze dan in GIT.

Formulieren in html zijn uitgebreid en er zijn veel opties die we kunnen
gebruiken. Om deze opties te ontdekken gaan we onderstaande opdrachten
uitvoeren. Maak gebruik het internet wanneer je tags tegenkomt die je
nog niet kent.

#### Taak 2b : Verder met formulieren
Open met je favoriete editor het formulier uit de vorige taak en breidt dit formulier uit door
onderstaande opdrachten uit te voeren:

-   Maak een nieuw veld en geef deze de naam “geboortedatum”, gebruik
    hiervoor de tag `input type=”date”`.

-   Maak een nieuw veld en geef deze de naam “E-mailadres”, gebruik
    hiervoor de tag `input type=”email”`.

-   Maak een nieuw veld aan en geef deze de naam “geslacht”, gebruik
    hiervoor de tag `input type=”radio”`

-   Maak een nieuw veld aan en geef deze de naam “opmerking”, gebruik
    hiervoor de tag `textarea`

-   Maak een nieuw veld aan en geef deze de naam “inschrijven voor de
    nieuwsbrief”. Gebruik hiervoor de tag input `type=”checkbox”`

-   Onderzoek wat de mogelijkheden zijn van de tag `required`, en maak
    met deze tag alle velden verplicht voor invoer

-   Onderzoek wat de mogelijkheden zijn van de tag `maxlength` en
    gebruik deze tag op de volgende velden:

    -   maxlength voornaam, achternaam en plaatst is 100

    -   maxlength postcode is 6

    -   maxlength opmerking is 400

-   Zorg ervoor dat het formulier gebruikersvriendelijk is en dat het er
    qua vormgeving goed uitziet (gebruik css). Controleer de invoer. Ben
    je tevreden? Commit en push de wijzigingen dan in Git!

## Div

Een div is een HTML-element die we kunnen gebruiken om delen van een
webpagina in te sluiten zoals bijvoorbeeld een navigatiemenu, een
paragraaf of een nieuwsbalk. Met div’s kunnen we dus onderdelen op de
webpagina op een bepaalde positie plaatsen. Het op de juiste manier
gebruik maken van div’s maakt dat de website flexibel en logisch
opgebouwd is.

Div is een afkorting van division. Het positioneren en opmaken van div’s
gebeurt met CSS. Een div kunnen we bijvoorbeeld een hoogte, breedte of
een kleur meegeven. Meer informatie over het gebruik van div’s kun je
vinden op: <https://www.w3schools.com/tags/tag_div.ASP> 

Bestudeer deze pagina en zoek uit wat de mogelijkheden zijn om div’s te
gebruiken.

## id of class?

Net zoals aan andere elementen op je pagina kun je aan het div een id of
een class meegeven. Als webdeveloper is het belangrijk om te weten wat
het verschil tussen een id en een class is. Wanneer we een element
identificeren met het attribuut `id=` dan maken we hiervan een uniek
element. We mogen geen twee elementen met hetzelfde id benoemen. Doordat
we het element uniek gemaakt hebben, kunnen we hieraan een bepaalde
opmaak toekennen.  
Bijvoorbeeld:

``` html
<div id="logo">  
```

Wanneer we meerdere elementen dezelfde opmaak willen geven dan krijgen
ze allemaal dezelfde class.  
Bijvoorbeeld:

``` html
<div id="logo" class="rood">
<div id="contentHeader" class="rood">
```

## Elementen selecteren

Met CSS-commando’s kunnen we HTML-elementen selecteren om er vervolgens
stijlen aan toe te wijzen. Om een uniek element te selecteren gebruiken
we in CSS de id van het element. Wanneer we dus in het vorige voorbeeld
het element `<div id=”logo”>` willen selecteren dan kunnen we dat in CSS
doen met een `#`.  
Bijvoorbeeld:

``` css
#logo{
    width:250px;
    }
```

Het kan ook voorkomen dat we meerdere elementen dezelfde opmaak willen
geven. Hiervoor kunnen we de class gebruiken classes kunnen we in CSS
selecteren met een . (punt). Als we bijvoorbeeld alle elementen die de
`class=”rood”` hebben willen voorzien van een rode tekst dan kunnen we
dat in CSS als volgt doen:

``` css
.rood{
    color:red;
    }
```

Meer informatie hierover kun je vinden op:
<https://www.w3schools.com/css/css_selectors.asp>  Bestudeer deze
pagina.

## Float en clear

Met de eigenschap van float kunnen we bepalen of een element op de
pagina zwevend weergegeven moet worden. We kunnen met deze eigenschap
bijvoorbeeld een aantal div’s naast elkaar plaatsen. Ook is het met deze
eigenschap mogelijk om teksten rondom afbeeldingen te laten lopen. De
float eigenschap kan toegepast worden in CSS. Wanneer we bijvoorbeeld de
gemaakte div met het id logo aan de linkerkant willen laten zweven dan
kunnen we dat in CSS als volgt doen:

``` css
#logo{
    float:left;
    }
```

De clear eigenschap wordt vaak in combinatie met de float eigenschap
gebruikt. Deze eigenschap bepaald aan welke kant van het element geen
float element mag staan. Wanneer we dus het clear element gebruiken dan
wordt het volgende element onder het bovengenoemde float element
geplaatst. De beste manier om dit goed te begrijpen en toe te passen is
door er mee te oefenen.

Dit kun je doen op de volgende webpagina’s:

-   <http://websitesmetstijl.nl/naslag/css-float.html> 

-   <https://www.w3schools.com/cssref/pr_class_float.asp> (

Bestudeer de mogelijkheden van float en clear. Zorg ervoor dat je deze
begrijpt en kunt toepassen. Tijdens de code review moet je dit kunnen
uitleggen.

#### Taak 3 : Display en positionering

Om goed te weten wat de mogelijkheden van html en CSS zijn is het
belangrijk om display en positionering goed te begrijpen, zodat je weet
wat de technische mogelijkheden hiervan zijn. Het helpt je ook om op een
creatieve manier mooie websites te bouwen. Volg de cursus display en
positioning van codecademy op:
<https://www.codecademy.com/learn/learn-css/modules/learn-css-display-positioning>


## Responsive webdesign

Responsive webdesign is een vorm van ontwerpen en bouwen van websites
waarbij rekening gehouden wordt met verschillende soorten devices.
Tijdens het ontwerpen en bouwen van de website wordt er dus rekening mee
gehouden dat de website goed zichtbaar is op zowel desktops, laptops,
tablets en smartphones. Het is natuurlijk mogelijk om voor elk device
een andere website te bouwen, maar met responsive webdesign bouwen we
één website waarvan de vormgeving zich aanpast naar de grootte van het
scherm en de mogelijkheden van de browser die de bezoeker gebruikt. De
grootte van het scherm wordt bij responsive webdesign ook wel de
viewport genoemd.

Meer informatie over responsive webdesign en viewport kun je vinden op:
<https://www.w3schools.com/html/html_responsive.asp> 

## CSS - Flexbox techniek

Met de CSS flexbox techniek is het mogelijk om snel en gemakkelijk de
lay-out van blokken op je website te regelen. Bij het gebruik van deze
techniek maakt het niet uit hoe breed de blokken zijn. Deze techniek
zorgt ervoor dat de blokken automatisch op de meest logische en
efficiënte manier gebruik maken van de beschikbare ruimte.

#### Taak 4a : Bestudeer de CSS-flexbox techniek

Bestudeer de css-flexbox techniek op onderstaande websites. Oefen ermee
en zorg dat je deze manier begrijpt, zelf kunt toepassen en ook kunt
uitleggen tijdens de code review.

-   <https://netspecialist.nl/html-en-css/486-de-flexbox-technologie> 

-   <https://www.w3schools.com/css/css3_flexbox.asp> 

### Taak 4b : Flexbox Froggy

In deze taak maak je alle opgaven van Flexbox Froggy. Via deze leuke
game leer je namelijk de verschillende structuren die je met flexboxes
kan opzetten, en daar heb je later veel aan!

-   Maak alle opdrachten binnen de Flexbox Froggy game op:
    <https://flexboxfroggy.com/>

## Clean code

Wanneer je code schrijft dan ga je hierop regelmatig aanpassingen of
wijzigingen doorvoeren. Het is daarom belangrijk dat je code logisch in
elkaar zit, zodat je deze makkelijk kunt lezen en begrijpen (clean
code).

Je kunt je natuurlijk afvragen wat het nut van clean code is. Als het
maar werkt, hoe de code eruitziet maakt toch niet uit? Toch is het wel
belangrijk om de code clean te schrijven. Als je in een team met
meerdere software developers aan een project werkt, dan werkt vaak
iedereen op zijn eigen manier. Je ziet dan vaak in de code meerdere
stijlen van verschillende programmeurs door elkaar. Hierdoor is het
lastig om fouten in de code te vinden of wijzigingen in de code aan te
brengen. Clean code is dus code waarin je de stijl van de verschillende
programmeurs niet ziet. In het team zijn dan namelijk afspraken gemaakt
over de stijl van de code.

In de projecten die je in de toekomst als team gaat uitvoeren is het dus
belangrijk om hierover afspraken te maken en elkaar ook op deze
afspraken te controleren en te houden.

Afspraken die programmeurs hierover maken wordt vaak vastgelegd in een
document. We noemen deze afspraken ook wel code conventions. Zo worden
er bijvoorbeeld afspraken gemaakt over:

-   Naamgeving van variabelen;

-   Naamgeving van bestanden;

-   Naamgeving van Functies en Procedures;

-   Gebruik van tabs of spaties bij inspringen;

-   Aantal tabs of spaties bij inspringen;

-   Afspraken over de plek van verschillende bestanden.

Bovenstaand zijn een aantal voorbeelden, maar er valt veel meer te
zeggen over clean code. Wanneer we gaan zoeken op
<a href="bol.com" class="uri">bol.com</a> dan zien we dat er zelfs
complete boeken over dit onderwerp geschreven zijn. Meer informatie over
clean HTML- en CSS-code kun je vinden op:
<https://www.w3schools.com/html/html5_syntax.asp> . Bestudeer deze
pagina en zorg ervoor dat de projecten die je in de toekomst gaat maken
in clean code geschreven zijn.

Een ander interessant artikel over clean code kun je vinden op:
<https://x-team.com/blog/principles-clean-code> .

#### Taak 5 : The next Google

In deze taak gaan we de homepagina van Google nabouwen.

#### Opdracht:

-   Bouw de homepagina van Google na. De zoekbalk hoeft niet te werken.

-   Steel geen code van Google, maar schrijf alles zelf.

-   Schrijf clean code.

-   Ben je klaar, commit en push!

## Webpagina layout en design

#### Standaard layout

De meeste webdesigners zijn in de loop van de jaren websites gaan
ontwerpen volgens vaste patronen:

-   Banner en navigatie aan de bovenkant.

-   Een paar artikelen die de content vormen.

-   Een kolom aan de rechterkant voor reclame of nieuws.

-   Een voettekst aan de onderkant met bedrijfsinformatie.

In veel gevallen ziet het er dan in grote lijnen uit als in figuur
<a href="#fig:stndlayout" data-reference-type="ref"
data-reference="fig:stndlayout">10.1</a>:

<figure>
<img src="Artwork/opdracht-layout-webpagina.jpg" id="fig:stndlayout"
alt="Standaard webpagina layout" />
<figcaption aria-hidden="true">Standaard webpagina layout</figcaption>
</figure>

Als webdesigner/webdeveloper/programmeur ben je natuurlijk vrij om je
eigen ontwerp te maken en hierin je eigen creativiteit te gebruiken.

In deze opdracht gaan we een basis neerzetten met HTML/CSS waarin we
bovenstaande structuur proberen aan te houden. We gebruiken hiervoor de
volgende HTML-elementen:

-   `<nav>`

-   `<main>`

-   `<section>`

-   `<div>`

-   `<footer>`

#### Taak 6 : Layout

1.  Bestudeer bovengenoemde HTML-elementen op:
    <https://www.w3schools.com/html/html_layout.asp> 

2.  Maak de layout zoals hierboven afgebeeld is na met HTML en CSS. Wees
    hierin creatief, bedenk zelf de kleuren, achtergronden en plaats een
    eigen logo (Denk aan het auteursrecht).

3.  Vergeet niet de add en commit in Git niet.

## Navigatie

In het vorige project heb je al kennis gemaakt met de volgende HTML-tags

-   `<ul>`

-   `<ol>`

-   `<li>`

-   `<a>`

Hiermee kunnen lijsten en links gemaakt worden. Deze HTML-tags worden
ook gebruikt om navigatie menu’s te maken.

#### Taak 7 : Website met navigatie

1.  Bestudeer bovengenoemde HTML-tags op:
    <https://www.w3schools.com/css/css_navbar.asp> 

2.  Gebruik de code van de gemaakte website uit taak 6 en breid deze uit
    door onderstaande opties toe te voegen.

3.  Maak een website over een onderwerp naar eigen keuze. Denk
    bijvoorbeeld een website over je favoriete sport, je hobby, je
    studie, of iets dergelijks. Zorg ervoor dat de website minimaal de
    volgende onderdelen bevat

    -   Een nette lay-out.

    -   Een navigatiestructuur met minimaal 5 pagina’s.

    -   De website bevat minimaal één tabel.

    -   De website bevat een contactformulier.

    -   De website bevat teksten, foto’s en linkjes naar andere
        pagina’s.

4.  Zorg voor clean code, maak logisch gebruik van Div’s, id’s en
    classes.

5.  Laat in deze opdracht zien dat je de genoemde onderdelen uit deze
    opdracht beheerst door de geleerde technieken toe te passen.

6.  Test je website in verschillende browsers en check of alle linkjes
    goed werken.

7.  Tijdens de code review moet je kunnen uitleggen hoe de code werkt en
    waarom je voor bepaalde oplossingen gekozen hebt.

8.  Vergeet de add en commit in Git niet.

## Responsive webdesign frameworks

In dit project hebben je meer geleerd over HTML en CSS. Ook hebben we
gekeken naar responsive webdesign.

We hebben dit gedaan door vanaf scratch te beginnen met het bouwen van
de webpagina. Er zijn ook zogenaamde frameworks die het makkelijk maken
om responsive websites te ontwikkelen. Deze frameworks bevatten een
groot aantal gereedschappen en bibliotheken met code die we kunnen
gebruiken. Door gebruik te maken van een framework is het mogelijk om
sneller en makkelijker een responsive website te ontwikkelen. Een veel
gebruikt framework voor responsive webdesign is bootstrap.

Tijdens dit project gaan we daar nog niet mee werken, maar het is wel
belangrijk om te weten dat er frameworks zijn en wat de mogelijkheden
hiervan zijn.

In de toekomst als software developer zul je namelijk vaak gebruik maken
van frameworks. Meer informatie over het bootstrap framework kun je o.a.
vinden op:

-   <https://www.w3schools.com/bootstrap5/>  

-   <https://getbootstrap.com/>  

## Afronding

-   Controleer met de rubric of je een voldoende of goed haalt voor de
    opdracht.

-   Bespreek een reviewmoment bij een docent.

-   Deel de code van de opdracht via GitHub met de docenten.

    -   Push de code naar een repository op GitHub.

    -   Deel de repository met de docenten

-   Bereid je voor op het reviewmoment.

-   Na goedkeuring van een docent:

    1.  Plaats de code van elke taak in een word document.

    2.  Upload word documenten in Cumlaude.

## Planning

Je kunt onderstaande sjabloon gebruiken voor jouw eigen planning. Neem
onderstaande sjabloon daarvoor over in jouw favoriete planningtool en
voeg waar gewenst eigen regels toe. Zet de verschillende acties daarna
op de juiste data in jouw agenda.

PS: Je kunt taken niet altijd na elkaar te plannen. Je zult taken ook
moeten laten overlappen. Dit geldt ook voor taken in de verschillende
opdrachten.

| **Actie**                                 | **Datumstart** | **Datumklaar** | **Klaar** |
|:------------------------------------------|:---------------|:---------------|:----------|
| Bestudeer tabellen                        |                |                |           |
| Maak taak 1 - een tabel                   |                |                |           |
| Bestudeer formulieren                     |                |                |           |
| Maak taak 2a en 2b - formulieren          |                |                |           |
| Bestudeer Divs                            |                |                |           |
| Bestudeer IDs en Classes                  |                |                |           |
| Bestudeer Elementen selecteren            |                |                |           |
| Bestudeer Float en Clear                  |                |                |           |
| Maak taak 3 - codecademy                  |                |                |           |
| Bestudeer Responsive design               |                |                |           |
| Bestudeer CSS Flexbox                     |                |                |           |
| Maak taak 4b - flexbox froggy game        |                |                |           |
| Bestudeer Clean code                      |                |                |           |
| Maak taak 5 - the next Google             |                |                |           |
| Bestudeer Webpagina layout en design      |                |                |           |
| Maak taak 6 en 7 - website met navigatie  |                |                |           |
| Bestudeer Responsive webdesign frameworks |                |                |           |
| Afronding                                 |                |                |           |

## Rubric HtmlCss

#### Taak 1 - tabellen

|                                                                            |                                                                      |                                                                                            |                                      |
|:---------------------------------------------------------------------------|:---------------------------------------------------------------------|:-------------------------------------------------------------------------------------------|:-------------------------------------|
| **Werking**                                                                |                                                                      |                                                                                            |                                      |
|                                                                            |                                                                      |                                                                                            |                                      |
| *Goed*                                                                     | *Voldoende*                                                          | *Matig*                                                                                    | *Onvoldoende*                        |
| De HTML-pagina laadt foutloos                                              |                                                                      |                                                                                            | De HTML-pagina werkt niet            |
| **Layout**                                                                 |                                                                      |                                                                                            |                                      |
|                                                                            |                                                                      |                                                                                            |                                      |
| *Goed*                                                                     | *Voldoende*                                                          | *Matig*                                                                                    | *Onvoldoende*                        |
| Alle rijen en kolommen staan goed                                          | De meeste rijen en kolommen staan goed                               | De meeste rijen en kolommen staan niet goed                                                | De rijen en kolommen staan niet goed |
| **Code review**                                                            |                                                                      |                                                                                            |                                      |
|                                                                            |                                                                      |                                                                                            |                                      |
| *Goed*                                                                     | *Voldoende*                                                          | *Matig*                                                                                    | *Onvoldoende*                        |
| Ik kan de werking van de source code foutloos en zonder hapering uitleggen | Ik moet soms (niet hinderlijk) nadenken over werking van source code | Ik moet veel nadenken of antwoorden opzoeken bij uitleg van werking van source code pagina | Ik kan source code niet uitleggen    |

## Taak 2 - Formulieren

|                                                                                |                                                                                      |                                                                                            |                                   |
|:-------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------|:----------------------------------|
| **Werking**                                                                    |                                                                                      |                                                                                            |                                   |
|                                                                                |                                                                                      |                                                                                            |                                   |
| *Goed*                                                                         | *Voldoende*                                                                          | *Matig*                                                                                    | *Onvoldoende*                     |
| De HTML is correct en het formulier is juist gemaakt. Alle velden zijn correct | De HTML is correct en het formulier is juist gemaakt. Bijna alle velden zijn correct |                                                                                            | De HTML-pagina werkt niet         |
| Code review                                                                    |                                                                                      |                                                                                            |                                   |
|                                                                                |                                                                                      |                                                                                            |                                   |
| *Goed*                                                                         | *Voldoende*                                                                          | *Matig*                                                                                    | *Onvoldoende*                     |
| Ik kan de werking van de source code foutloos en zonder hapering uitleggen     | Ik moet soms (niet hinderlijk) nadenken over werking van source code                 | Ik moet veel nadenken of antwoorden opzoeken bij uitleg van werking van source code pagina | Ik kan source code niet uitleggen |

#### Taak 5 - the next Google

|                                                                                                          |                                                                                                               |                                                                                            |                                   |
|:---------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------|:----------------------------------|
| **werking**                                                                                              |                                                                                                               |                                                                                            |                                   |
|                                                                                                          |                                                                                                               |                                                                                            |                                   |
| *Goed*                                                                                                   | *Voldoende*                                                                                                   | *Matig*                                                                                    | *Onvoldoende*                     |
| De website werkt foutloos en voldoet aan alle genoemde eisen en gebruikte HTML en CSS bevat geen fouten. | De website werkt foutloos en voldoet aan alle genoemde eisen en gebruikte HTML en CSS bevat bijna geen fouten | De website werkt maar geeft fouten tijdens het uitvoeren                                   | De website werkt niet             |
| **Code review**                                                                                          |                                                                                                               |                                                                                            |                                   |
|                                                                                                          |                                                                                                               |                                                                                            |                                   |
| *Goed*                                                                                                   | *Voldoende*                                                                                                   | *Matig*                                                                                    | *Onvoldoende*                     |
| Ik kan de werking van de source code foutloos en zonder hapering uitleggen                               | Ik moet soms (niet hinderlijk) nadenken over werking van source code                                          | Ik moet veel nadenken of antwoorden opzoeken bij uitleg van werking van source code pagina | Ik kan source code niet uitleggen |

#### Taak 6 en 7 - website met navigatie

|                                                                                                          |                                                                                                               |                                                                                            |                                                                                |
|:---------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------|
| **werking**                                                                                              |                                                                                                               |                                                                                            |                                                                                |
|                                                                                                          |                                                                                                               |                                                                                            |                                                                                |
| *Goed*                                                                                                   | *Voldoende*                                                                                                   | *Matig*                                                                                    | *Onvoldoende*                                                                  |
| De website werkt foutloos en voldoet aan alle genoemde eisen en gebruikte HTML en CSS bevat geen fouten. | De website werkt foutloos en voldoet aan alle genoemde eisen en gebruikte HTML en CSS bevat bijna geen fouten | De website werkt maar geeft fouten tijdens het uitvoeren                                   | De website werkt niet                                                          |
| **Code review**                                                                                          |                                                                                                               |                                                                                            |                                                                                |
|                                                                                                          |                                                                                                               |                                                                                            |                                                                                |
| *Goed*                                                                                                   | *Voldoende*                                                                                                   | *Matig*                                                                                    | *Onvoldoende*                                                                  |
| Ik kan de werking van de source code foutloos en zonder hapering uitleggen                               | Ik moet soms (niet hinderlijk) nadenken over werking van source code                                          | Ik moet veel nadenken of antwoorden opzoeken bij uitleg van werking van source code pagina | Ik kan source code niet uitleggen                                              |
| **Onderzoek / opleveringsgesprek**                                                                       |                                                                                                               |                                                                                            |                                                                                |
| I                                                                                                        |                                                                                                               |                                                                                            |                                                                                |
| *Goed*                                                                                                   | *Voldoende*                                                                                                   | *Matig*                                                                                    | *Onvoldoende*                                                                  |
| k kan het verschil tussen een id en een class uitleggen                                                  |                                                                                                               |                                                                                            | Ik kan het verschil tussen een id en een class niet uitleggen                  |
| Ik kan uitleggen wat de CSS flexbox techniek is                                                          |                                                                                                               |                                                                                            | Ik kan niet uitleggen wat de CSS flexbox techniek is                           |
| Ik kan uitleggen wat responsive webdesign is                                                             |                                                                                                               |                                                                                            | Ik kan niet uitleggen wat responsive webdesign is                              |
| Ik kan uitleggen wat clean code is, en wat hiervan het nut is                                            |                                                                                                               |                                                                                            | Ik kan niet uitleggen wat clean code is, en wat hiervan het nut is             |
| Ik kan uitleggen wat een framework is en wat het nut van een framework is                                |                                                                                                               |                                                                                            | Ik kan niet uitleggen wat een framework is en wat het nut van een framework is |
| Ik kan bootstrap duiden als functionaliteit                                                              |                                                                                                               |                                                                                            | Ik kan bootstrap niet duiden als functionaliteit                               |
