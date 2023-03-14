---
layout: h2_toc
title: Beginnen met PHP
key: 2515
difficulty: basic
date: 2023-03-14
author: jsiewers, pvangemert, jheuvelman, adalmolen
technology: php
---

> #### Voorkennis
> * Je hebt de opdracht basis programmeren met succes afgerond

> #### Dit ga je leren
> * Het verschil tussen client en serverside programmeren
> * Applicaties leren bouwen met PHP
> * Code van anderen leren begrijpen en aanpassen in PHP
> * Het maken van onderhoudbare code

# Introductie

In eerdere projecten hebben we kennis gemaakt met de basisstructuren
programmeren. In deze opdracht gaan we onze kennis van PHP verder
uitbreiden.

## Vakdocenten

-   Jeroen Heuvelman - JHN - jheuvelman@deltion.nl
-   Andre Dalmolen - ADN - adalmolen@deltion.nl
-   Peter van Gemert - PGT - pgemert@deltion.nl
-   Jan Jaap Siewers - JJS - jsiewers@deltion.nl

# Backlog

-   Als webdeveloper wil ik weten wat het verschil is tussen server- en
    clientside programmeren.

-   Als webdeveloper wil ik mijn kennis over PHP vergroten, zodat ik
    mooie en functionele websites en webapplicaties kan bouwen

-   Als student moet ik brede kennis van PHP hebben zodat ik mijn examen
    kan halen.

-   Als student wil ik opdrachten maken met PHP zodat ik kan leren hoe
    ik PHP in de praktijk kan toepassen.

-   Als webdeveloper wil ik PHP kunnen lezen en begrijpen, zodat ik code
    van anderen kan beoordelen op bruikbaarheid in eigen projecten.

-   Als webdeveloper moet ik clean code schrijven zodat collega’s mijn
    code makkelijker kunnen begrijpen en onderhouden.

## Wat is PHP?

PHP is een server-side scripting taal die veel gebruikt wordt om
websites en webapplicaties te programmeren. PHP-code kan binnen
HTML-code geplaatst worden, waarbij de HTML-code op de cliënt en de
PHP-code op de server uitgevoerd wordt. Om dit beter te begrijpen is het
belangrijk om het client-server model te kennen en te begrijpen.

## Client-server model

Het client-server model is een model waarbij twee computers, een cliënt
en een server samenwerken om een programma of een website uit te voeren.
De cliënt doet een aanvraag (request) bij de server en de server geeft
vervolgens de gevraagde informatie terug aan de cliënt (response). Denk
bijvoorbeeld aan internetbankieren, de cliënt vraag bijvoorbeeld het
saldo van de bankrekening op. De server verwerkt deze vraag en geeft het
saldo terug aan de cliënt. Een korte uitleg over het client-server model
kun je vinden op: <https://www.youtube.com/watch?v=SwLdKeC8scE>

PHP-code kan binnen HTML-code geplaatst worden. De PHP-code dient dan
binnen de volgende tags geplaatst te worden:

``` php
<?php ...... ?>
```

#### Taak 1 – PHP-introductie

#### Voorbereiding

-   Maak in je /htdocs folder een nieuwe folder aan voor deze opdracht.

-   Zorg voor versiecontrole op deze folder.

-   Plaats een in deze folder en gebruik je favoriete editor om
    onderstaande code
    (listing <a href="#phpinfo" data-reference-type="ref"
    data-reference="phpinfo">[phpinfo]</a>) in dit bestand te plaatsen.

-   Commit

-   Start de webpagina op en kijk wat er gebeurt

``` php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        phpinfo();
    ?>
</body>
</html>  
```

De `phpinfo()`-functie is een standaard PHP-functie die de PHP
instellingen weergeeft op de webpagina.

De standaard aanroep van deze functie geeft alle informatie weer in de
browser. Als je een lege pagina of een foutmelding krijgt, dan is het
mogelijk dat je een typefout gemaakt hebt. Probeer dan de fout op te
sporen en zorg ervoor dat de pagina werkt. Het is met deze functie ook
mogelijk om een deel van de informatie op te halen. Dit kan door de
functie aan te roepen met een extra parameter. Om bijvoorbeeld alleen de
licentie informatie van PHP op te vragen kan dezelfde functie gebruikt
worden met de parameter `INFO-LICENSE`. De aanroep wordt dan als volgt:

``` php
phpinfo(INFO_LICENSE);
```

Er zijn meer parameters die je kunt meesturen. Meer hierover kun je
vinden op de volgende website:
<https://doc.bccnsoft.com/docs/php-docs-7-en/function.phpinfo.html>.

De functie die we in dit voorbeeld gebruikt hebben is een ingebouwde
functie van PHP. PHP heeft meerdere ingebouwde functies zoals:
`gettype`, `print_r`, `var_dump`, enz. Het is ook mogelijk om als PHP
programmeur zelf functies te schrijven. Het zelf schrijven van functies
komt verderop in deze opdracht aan de orde.

## Formulier afhandeling

Formulieren worden vaak gebruikt op websites en in webapplicaties. Denk
bijvoorbeeld aan contact- of bestelformulieren. Bezoekers kunnen deze
formulieren invullen en vervolgens worden de ingevulde gegevens bewaard
in een database of er wordt een mail gestuurd. De basis van
HTML-formulieren is inmiddels behandeld in een vorige opdracht. In deze
opdracht gaan we kijken hoe we ingevulde html-formulieren op de server
kunnen verwerken met PHP.

#### Taak 2 - formulieren

-   Maak in je /htdocs folder een nieuwe folder aan voor deze opdracht.

-   Zorg voor versiecontrole op deze folder.

-   Plaats een index.php in deze folder en gebruik je favoriete editor
    om onderstaande code in dit bestand te plaatsen.

-   Commit en push.

-   Start de webpagina en kijk wat er gebeurt.

-   Bestudeer de code. Wanneer er stukken code zijn die je niet
    begrijpt, zoek deze dan op of vraag een docent om hulp.

-   Breidt de code uit door de volgende talen en vertalingen toe te
    voegen: Frans, Spaans en Italiaans.

-   Voeg bij de landkeuze de optie “Maak uw keuze” toe. Deze wordt
    standaard geactiveerd bij het starten van de pagina. Zorg ervoor dat
    de bezoeker een melding krijgt wanneer hij het formulier wil
    versturen zonder dat hij een taalkeuze gemaakt heeft.

-   Zorg ervoor dat na het versturen van het formulier de juiste
    taalkeuze geselecteerd blijft in de selectbox.

-   Bestudeer hoe het switch statement werkt. Dat kan bijvoorbeeld op de
    volgende pagina: <https://www.w3schools.com/php/php_switch.asp>

-   Pas de code aan en vervang het if-statement door een
    switch-statement.

-   Zoek uit wat het verschil is tussen `<form method=”post”...` en
    `<form method=”get”...` Tijdens de code review moet je dit kunnen
    uitleggen.

-   Test je gemaakte programma. Ben je tevreden? Commit en push de
    wijzigingen dan in GIT!

``` php
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PHP opdracht - vertaler</title>
</head>
<body>

	<form method="post" action="">
	Naam: <input type="text" name="naam" placeholder="Uw naam" required /><br />
	Land:
	<select name="land">
		<option value="NL">Nederland</option>
		<option value="DE">Duitsland</option>
		<option value="EN">Engeland</option>
	</select>
	<br />
	<input type="submit" name="submit" value="gegevens versturen" />
	</form>

	<?php 
	if(isset($_POST["submit"])){
		$naam = $_POST["naam"];
		$land = $_POST["land"];
		if($land=='NL'){
			echo 'Goedemorgen '.$naam;
		}
		elseif($land=='DE'){
			echo 'Guten Morgen '.$naam;
		}
		elseif($land=='EN'){
			echo 'Good morning '.$naam;
		}
	}
	?>

</body>
</html>
	
```

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
<https://www.w3schools.com/html/html5_syntax.asp> (). Bestudeer deze
pagina en zorg ervoor dat de projecten die je in de toekomst gaat maken
in clean code geschreven zijn.

Een ander interessant artikel over clean code kun je vinden op:
<https://x-team.com/blog/principles-clean-code> ().

## Functies

Soms heb je stukjes code nodig die op meerdere plekken op je website of
in je programma gebruikt moeten worden. Denk bijvoorbeeld aan het
berekenen van een Btw-bedrag in een webshop. Je kan deze code dan op
verschillende plekken in je programma plaatsen, maar wanneer je dan wat
wilt aanpassen in dit stukje code, dan dien je dat op verschillende
plekken in je programma te doen. De kans dat je een fout maakt is dan
erg groot.

Om dit te voorkomen kun je gebruik maken van functies. Functies zijn
stukjes code die buiten de rest van het script geschreven worden. De
code in een functie wordt alleen aangeroepen wanneer jij daar expliciet
om vraagt.

Functies kunnen op verschillende manier gebruikt worden. De simpelste
manier is een functie die iets uitvoert. Hierbij kun je bijvoorbeeld
denken aan een functie die een melding op het scherm toont. Deze functie
kan er dan als volgt uit zien:

## Functie zonder parameter

``` php
function showMessage(){
    echo 'Het formulier is niet juist ingevuld...';
}
```

Om deze functie aan te roepen kan de volgende code gebruikt worden:

``` php
showMessage();
```

## Functie met parameter

Een andere manier is een functie die aangeroepen kan worden met een
parameter. Deze parameter wordt vervolgens in de functie gebruikt. Een
voorbeeld hiervan is:

``` php
function showMessage($msg){
    echo $msg;
}    
```

Deze functie kan aangeroepen worden door de parameter msg mee te sturen.
Het voordeel van deze functie is dus dat je hem meerdere keren kunt
gebruiken om verschillende teksten op het scherm af te drukken.

De aanroep van deze functie kan bijvoorbeeld als volgt zijn:

``` php
showMessage('Uw gegevens zijn niet correct ingevoerd...');
```

of

``` php
showMessage('Uw postcode is niet bij ons bekend...');
```

## Functie met returnwaarde

Een derde manier van het gebruik van functies is een functie die
aangeroepen wordt met één of meerdere parameters en die vervolgens iets
terug geeft. Een voorbeeld hiervan is bijvoorbeeld een functie die het
btw-bedrag uitrekent over een bepaald bedrag. Deze functie kan er als
volgt uitzien:

``` php
function berekenBtw($bedragExBtw){
    $btwbedrag = $btwBedragExBtw  * 0.21;
    return $btwBedrag;
}
```

Als we deze functie bestuderen dan zien we dat functie wordt aangeroepen
met de parameter bedragExBtw. De functie geeft vervolgens het btwBedrag
terug (`return`). Wanneer we met deze functie het btw-bedrag van € 100,-
willen uitrekenen dan dienen we deze functie als volgt aan te roepen:

``` php
$btwEindBedrag = berekenBtw(100); 
```

De functie geeft vervolgens de uitkomst terug en zal in dit geval € 21,-
returnen. Dus de variable btwEindBedrag zal in dit geval de waarde van
21 krijgen.

Op de website <https://www.w3schools.com/php/php_functions.asp> () kun
je meer informatie vinden over het gebruik van functies in PHP. Zoek dit
uit.

## Date/time functies

In applicaties wordt vaak gebruik gemaakt van datum en tijd. Denk
bijvoorbeeld aan het invoeren van een geboortedatum, afleverdatum of
factuurdatum. Om datum en tijd te gebruiken in een applicatie kunnen we
het date-object gebruiken. Met het date-object kunnen we bijvoorbeeld de
actuele datum en tijd opvragen of het aantal dagen tussen twee datums
berekenen. Om bijvoorbeeld de huidige datum en tijd op te vragen en op
het scherm te tonen kunnen we het volgende commando gebruiken:

``` php
$datum = new DateTime("now");
echo $datum->format('Y-m-d H:i:s');
```

Meer informatie over datum en tijd functies kun je vinden op:
<https://www.w3schools.com/php/php_ref_date.asp> (). Bestudeer deze
pagina.

## Arrays

Bij de meeste programmeertalen is het mogelijk om array’s gebruikt. Om
goed te kunnen programmeren is het dus belangrijk om te weten wat een
array is en hoe je deze kunt gebruiken. Een array kun je eigenlijk zien
als een variabele die meerdere waardes kan bevatten, een lijst van
waardes. Deze variabele bestaat dan uit meerdere rijen (entries) die
allemaal een waarde hebben. Het declareren/aanmaken van een array gaat
bijna hetzelfde als het declareren van een variabele. Bijvoorbeeld:

``` php
$weekdagen = array('Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag');
```

Elke waarde in de array heeft een nummer, de zogenaamde index. Het
eerste item in een array heeft nummer 0, het tweede nummer 1, enz. Om
uit bovenstaande array de zondag op het scherm te tonen kan het volgende
commando gebruikt worden.

``` php
echo $weekdagen[0];
```

Om uit bovenstaande array de Zaterdag op het scherm te tonen kan het
volgende commando gebruikt worden:

``` php
echo $weekdagen[6];
```

Er zijn verschillende methodes die gebruikt kunnen worden om met arrays
te werken. Zo is het bijvoorbeeld mogelijk om arrays te sorteren, items
aan een array toe te voegen of te verwijderen. Bestudeer de
mogelijkheden van arrays op de volgende pagina:
<https://www.w3schools.com/php/php_ref_array.asp> ().

## Opdrachten

#### Opdracht 1 : formulier pizza’s bestellen

Maak een pizza bestelformulier voor pizzeria "Pizza di mama". Het
formulier dient de volgende invoer velden te bevatten:

-   Naam

-   Adres

-   Postcode

-   Plaats

-   Besteldatum

-   Bezorgen of afhalen (keuze)

Op het formulier kunnen de volgende pizza’s besteld worden:


| Soort                  | Prijs per stuk |
|:-----------------------|:---------------|
| Pizza Margherita       | 12,50          |
| Pizza Funghi           | 12,50          |
| Pizza Marina           | 13,95          |
| Pizza Hawai            | 11,50          |
| Pizza Quattro Formaggi | 14,50          |


Na invullen van het formulier worden de ingevulde gegevens met PHP
verwerkt en op het scherm getoond. De volgende gegevens dienen getoond
te worden:

-   Naam, adres, postcode, plaats

-   Besteldatum en besteldag.

-   De bestelde pizza’s met aantal en prijs.

-   Totaalprijs van de bestelde pizza’s.

-   Bezorgkosten bedragen € 5,- per bestelling, wanneer de bezoeker
    kiest voor afhalen worden natuurlijk geen bezorgkosten berekend.

-   Op maandag is “pizza actie dag”, dan kosten alle pizza’s € 7,50 per
    stuk. Bereken aan de hand van de datum of de bestelling op maandag
    is en verwerk deze korting in het besteloverzicht.

-   Op vrijdag is het “pizza start weekend dag”, elke bestelling met een
    totaalprijs boven de € 20,- krijgt dan 15% korting. Bereken aan de
    hand van de datum of de bestelling op vrijdag is en verwerk deze
    korting in het besteloverzicht.

Maak deze opdracht met HTML, CSS en PHP. Je mag ook JavaScript
gebruiken. Pas de kennis toe die je tot nu toe geleerd hebt. Wees
creatief en verras ons. Controleer de invoervelden op juiste data, test
je formulier goed en laat het eventueel testen door een docent of een
klasgenoot. Zorg voor clean code, gebruik functies om de korting en de
bezorgkosten te berekenen. Alles getest en ben je tevreden? Commit en
push!

#### Opdracht 2 : rente berekenen

Maak een formulier dat er minimaal zo uitziet als hieronder weergegeven:

{{ 'https://static.edutorial.nl/lucy/php/opdracht8.jpg' | url | image: 'Opdracht 8 formulier', 20 }}  

<br>
Als op de knop "Bereken" wordt gedrukt, moet het volgende gebeuren:

-   Controleer de velden op de juiste invoer, bedrag en rentepercentage
    mogen niet leeg zijn en moeten numerieke waardes bevatten. De
    radiobutton moet aangeklikt zijn. Wanneer niet alle velden juist
    ingevoerd zijn moet dit op het scherm verschijnen.

-   Als aan bovengenoemde voorwaarden is voldaan, wordt de gemaakte
    keuze berekend en op het scherm getoond zoals hieronder. De formule
    voor berekening van het eindbedrag is:
    $nwbedrag = bedrag \\times  ( 1 + \\frac{rente}{100} )$

-   Zorg voor clean- en logische code.

#### Uitvoer Eindbedrag na 10 jaar  
<br>

{{ 'https://static.edutorial.nl/lucy/php/opdracht8-voorbeeld1.jpg' | url | image: 'Opdracht 8 uitvoer : Eindbedrag na 10 jaar', 20 }}  

<br>

#### Uitvoer Eindbedrag verdubbeld

<br>

{{ 'https://static.edutorial.nl/lucy/php/opdracht8-voorbeeld2.jpg' | url | image: 'Opdracht 8 uitvoer : Eindbedrag verdubbeld', 20 }}  

<br>

## Afronding

-   Beoordeel met de rubric of jij een voldoende of goed haalt voor deze
    opdract.

-   Deel de code van de verschillende taken via GitHub met de docenten.
    Gebruik hiervoor één repository waar alle code in staat.

-   Bespreek een reviewmoment bij een docent.

-   Bereid je voor op het reviewmoment:

    1.  Ken jouw code.

    2.  Weet waar de functionaliteit van jouw programma’s gecodeerd is.

    3.  Weet hoe jouw programma’s werken.

    4.  Verwacht vragen om de code aan te passen.

    5.  Verwacht vragen om de code uit te leggen.

-   Na goedkeuring:

    1.  Plaats de code in afzonderlijke word documenten. Geen
        schermafdrukken maar de daadwerkelijke tekts.

    2.  Upload de word documenten in Cumlaude.

## Planning PHP

Je kunt onderstaande sjabloon gebruiken voor jouw eigen planning. Neem
onderstaande sjabloon daarvoor over in jouw favoriete planningtool en
voeg waar gewenst eigen regels toe. Zet de verschillende acties daarna
op de juiste data in jouw agenda.

PS: Je kunt taken niet altijd na elkaar te plannen. Je zult taken ook
moeten laten overlappen. Dit geldt ook voor taken in de verschillende
opdrachten.

| **Actie**                                               | **Datumstart** | **Datumklaar** | **Klaar** |
|:--------------------------------------------------------|:---------------|:---------------|:----------|
| Bestudeer PHP                                           |                |                |           |
| Bestudeer formulier afhandeling                         |                |                |           |
| Bestudeer clean code                                    |                |                |           |
| Bestudeer functies                                      |                |                |           |
| Bestudeer date/time functies                            |                |                |           |
| Bestudeer arrays                                        |                |                |           |
| Maak opdracht 1 - formulier pizza’s bestellen           |                |                |           |
| Maak opdracht 2 - rente berekenen                       |                |                |           |
| Maak 7 opdrachen naar eigen keuze uit de opdrachtenbase |                |                |           |
| Oplevering                                              |                |                |           |

## Rubric PHP

#### Opdracht

| *G=Goed \| V=Voldoende \| M=Matig \| O=Onvoldoende*                       |     |     |     |     |
|:--------------------------------------------------------------------------|:----|:----|:----|:----|
|                                                                           | *G* | *V* | *M* | *O* |
| Ik heb de voorbeeldcodes overgenomen, en de bijbehorende taken uitgevoerd |     |     |     |     |
| Ik heb git gebruikt tijdens deze opdracht                                 |     |     |     |     |
| Ik heb de code die ik wil bespreken met de docenten gedeeld via GitHub    |     |     |     |     |

#### Opdracht 1 : Pizza’s bestellen

|                                                                                                                            |                                                                                                                                  |                                                                                   |                                                                          |
|:---------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------|:-------------------------------------------------------------------------|
| **Werking**                                                                                                                |                                                                                                                                  |                                                                                   |                                                                          |
|                                                                                                                            |                                                                                                                                  |                                                                                   |                                                                          |
| *Goed*                                                                                                                     | *Voldoende*                                                                                                                      | *Matig*                                                                           | *Onvoldoende*                                                            |
| Het formulier werkt foutloos. Alle velden worden gecontroleerd op invoer en het resultaat wordt goed getoond op het scherm | Het formulier werkt foutloos. Bijna alle velden worden gecontroleerd op invoer en het resultaat wordt goed getoond op het scherm |                                                                                   | Het formulier werkt niet.                                                |
| **Code review**                                                                                                            |                                                                                                                                  |                                                                                   |                                                                          |
|                                                                                                                            |                                                                                                                                  |                                                                                   |                                                                          |
| *Goed*                                                                                                                     | *Voldoende*                                                                                                                      | *Matig*                                                                           | *Onvoldoende*                                                            |
| Ik kan werking van source code foutloos en zonder hapering uitleggen                                                       | Ik moet soms (niet hinderlijk) nadenken voordat ik broncode kan uitleggen                                                        | Ik moet veel nadenken of antwoorden opzoeken voordat ik de broncode kan uitleggen | Ik kan de broncode niet uitleggen of het programma werkt niet (foutloos) |

#### Opdracht 2 : Rente berekenen

|                                                                                                                            |                                                                                                                                  |                                                                                   |                                                                          |
|:---------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------|:-------------------------------------------------------------------------|
| **Werking**                                                                                                                |                                                                                                                                  |                                                                                   |                                                                          |
|                                                                                                                            |                                                                                                                                  |                                                                                   |                                                                          |
| *Goed*                                                                                                                     | *Voldoende*                                                                                                                      | *Matig*                                                                           | *Onvoldoende*                                                            |
| Het formulier werkt foutloos. Alle velden worden gecontroleerd op invoer en het resultaat wordt goed getoond op het scherm | Het formulier werkt foutloos. Bijna alle velden worden gecontroleerd op invoer en het resultaat wordt goed getoond op het scherm |                                                                                   | Het formulier werkt niet.                                                |
| **Code review**                                                                                                            |                                                                                                                                  |                                                                                   |                                                                          |
|                                                                                                                            |                                                                                                                                  |                                                                                   |                                                                          |
| *Goed*                                                                                                                     | *Voldoende*                                                                                                                      | *Matig*                                                                           | *Onvoldoende*                                                            |
| Ik kan werking van source code foutloos en zonder hapering uitleggen                                                       | Ik moet soms (niet hinderlijk) nadenken voordat ik broncode kan uitleggen                                                        | Ik moet veel nadenken of antwoorden opzoeken voordat ik de broncode kan uitleggen | Ik kan de broncode niet uitleggen of het programma werkt niet (foutloos) |

#### Opleveringsgesprek

|                                                                                                             |                                                                                                              |                                                                                                                    |                                                                            |
|:------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------|
| **Kennis**                                                                                                  |                                                                                                              |                                                                                                                    |                                                                            |
|                                                                                                             |                                                                                                              |                                                                                                                    |                                                                            |
| *Goed*                                                                                                      | *Voldoende*                                                                                                  | *Matig*                                                                                                            | *Onvoldoende*                                                              |
| Ik kan het client-server model begrijpelijk en zonder haperingen uitleggen.                                 | Ik moet soms (niet hinderlijk) nadenken over de uitleg van het client-server model                           | Ik veel nadenken of antwoorden opzoeken bij het uitleggen van het client-server model                              | Ik kan het client-servermodel niet uitleggen.                              |
| Ik kan begrijpelijk en zonder haperingen uitleggen wat clean code is, en wat hiervan het nut is.            | Ik moet soms (niet hinderlijk) nadenken over de uitleg van clean code                                        | Ik moet veel nadenken of antwoorden opzoeken bij het uitleggen van clean code.                                     | Ik kan niet uitleggen wat clean code is, en wat hiervan het nut is.        |
| Ik kan begrijpelijk en zonder hapering uitleggen wat een array is.                                          | Ik moet soms (niet hinderlijk) nadenken over de uitleg van een array                                         | Ik moet veel nadenken of antwoorden opzoeken bij de uitleg van een array                                           | Ik kan niet uitleggen wat een array is.                                    |
| Ik kan begrijpelijk en zonder hapering uitleggen wat het verschil tussen een while- en een for lus is.      | Ik moet soms (niet hinderlijk) nadenken bij de uitleg van het verschil tussen een while-en een for lus       | Ik moet veel nadenken of antwoorden opzoeken bij de uitleg van het verschil tussen een while- en een for lus       | Ik kan het verschil tussen een while- en een for lus niet uitleggen.       |
| Ik kan begrijpelijk en zonder hapering uitleggen wat het verschil tussen een if-en een switch statement is. | Ik moet soms (niet hinderlijk) nadenken bij de uitleg van het verschil tussen een if-en een switch statement | Ik moet veel nadenken of antwoorden opzoeken bij de uitleg van het verschil tussen een if- en een switch statement | Ik kan het verschil tussen een if- en een switch statement niet uitleggen. |
| Ik kan begrijpelijk en zonder hapering uitleggen wat het verschil tussen een post en een get is             | Ik moet soms (niet hinderlijk) nadenken bij de uitleg van het verschil tussen een post en een get            | Ik moet veel nadenken of antwoorden opzoeken bij de uitleg van het verschil tussen een post en een get             | Ik kan het verschil tussen een post en een get niet uitleggen.             |
