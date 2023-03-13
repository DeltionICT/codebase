---
layout: h2_toc
title: Webpagina
key: 2513
difficulty: basic
date: 2023-03-13
author: jsiewers, pvangemert, adalmolen, jheuvelman
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


## Introductie

Een website wordt geschreven in HyperText Markup Language (HTML) en
Cascading Stylesheets (CSS).

Met HTML geeft je de structuur van je pagina aan zoals: de tekst die op
de pagina moet staan. In welke volgorde onderdelen van een pagina moeten
verschijnen? CSS gebruik je om daarna te opmaak van de pagina op te
geven. Welke fonts moeten er voor de tekst gebruikt worden? Welke
kleuren worden er getoond?

HTML bestanden herken je vaak aan de .html of .htm extensie. CSS
bestanden herken je aan de .css extensie. Let op dit zijn standaarden
maar een ontwikkelaar kan daar van afwijken.

In deze opdracht maak je kennis met HTML en CSS en zul jij je eerste
webpagina schrijven.

## Backlog

-   als web developer moet ik de basis van HTML kennen zodat ik de
    source van webpagina’s kan lezen en begrijpen;
-   als web developer moet ik de basis van HTML kenen zodat ik
    webpagina’s kan ontwerpen en schrijven;
-   als web developer moet ik de basis van HTML kennen zodat ik de
    structuur van een webpagina kan ontwerpen en aanpassen;
-   als web developer moet ik de basis van CSS kennen zodat ik de source
    van webpagina’s kan lezen en begrijpen;
-   als web developer moet ik de basis van CSS kennen zodat ik
    webpagina’s kan ontwerpen en schrijven;
-   als web developer moet ik de basis van CSS kennen zodat ik de opmaak
    van webpagina’s kan ontwerpen of aanpassen;
-   als student moet ik html en css beheersen zodat ik andere studenten
    kan helpen bij vragen.

## Kennismaken met HTML

HTML is the standard markup language for creating Web pages.  
HTML stands for Hyper Text Markup Language.  
HTML is the standard markup language for creating Web pages.  
HTML describes the structure of a Web page.  
HTML consists of a series of elements.  
HTML elements tell the browser how to display the content.  
HTML elements label pieces of content such as ’this is a heading’,  
’this is a paragraph’, ’this is a link’, etc.

In onderstaande listing zie je een webpagina geschreven in HTML.

``` html
<!-- Mijn eerste HTML -->
<!DOCTYPE html>
<html lang="nl"> 

<head>
    <meta charset=utf8>
</head> 

<body> 
<h1>Hello World</h1> 
<p> 
Hallo wereld. 
</p> 

</body> 
</html>
```

In de volgende taak schrijf jij jouw eerste html pagina.

#### Taak : Maak jouw eerste HTML pagina

-   voorbereiding;
    1.  maak de folder op jouw computer;
    2.  plaats een git repository in deze folder;
    3.  gebruik een code editor (zoals <code>VScode</code> of <code>Notepad++</code>) om de
        code van listing <a href="#index01" data-reference-type="ref"
        data-reference="index01">[index01]</a> in het bestand te
        plaatsen;
    4.  commit in <code>Git</code>;
-   bekijk de webpagina;
    1.  start een webbrowser zoals <code>Edge</code>, <code>Safari</code>, <code>Opera</code>,
        <code>Chromium</code>, <code>Chrome</code> of <code>Firefox</code>.
    2.  navigeer naar  
        <http://localhost/helloworld>
    3.  Navigeer naar  
        <http://localhost/helloworld/index.html>

Je hebt nu een jouw eerste webpagina geschreven. Maar weet je ook wat je
in deze pagina geschreven hebt? In de volgende taak doe je onderzoek
naar de verschillende onderdelen van de webpagina.

#### Taak : Leer HTML

1.  zoek op het internet wat <code>html tags</code> zijn; "HTML tags are the hidden
    keywords within a web page that define how your web browser must
    format and display the content." 

2.  zoek op het internet wat <code>html elements</code> zijn: "HTML bestaat uit een
    serie elementen die u kunt gebruiken om verschillende onderdelen van
    uw inhoud te verpakken of te omhullen zodat die er op een bepaalde
    manier gaat uitzien of zich gedragen." 

3.  zoek uit wat de functies van de volgende tags zijn.

    -   \<DOCTYPE\>
    -   \<html\>
    -   \<head\>
    -   \<meta\>
    -   \<body\>
    -   \<h1\>
    -   \<p\>

#### Taak : Verdiep jouw kennis over HTML

-   een paginatitel toevoegen;

    1.  voeg <code><title> HelloWorld! </title></code> in de head van toe

    2.  refresh de pagina in de browser.

    3.  wat is er veranderd?

    4.  vervang <code>HelloWorld!</code> in de title tag door een zelf gekozen
        tekst

    5.  refresh de pagina in de browser.

    6.  wat is er veranderd?

-   een paragraaf toevoegen;

    1.  voeg na de bestaande paragraaf (<code><p>...</p></code>) drie nieuwe
        paragrafen toe. Vul de paragrafen met Lorem Ipsum; "Lorem Ipsum
        is slechts een proeftekst uit het drukkerij- en zetterijwezen.
        Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds
        de 16e eeuw, ..." 

        -   Je kunt Lorem Ipsum laten maken op <https://nl.lipsum.com/>

    2.  refresh de pagina in jouw browser.

    3.  wat is er veranderd?

    4.  voeg nog een aantal paragrafen toe

    5.  refresh de pagina in jouw browser

    6.  wat is er veranderd?

-   als de wijzigingen bevallen, commit deze dan in <code>Git</code>;

## Verdiepen in HTML

Je hebt nu een hele kleine introductie gehad in HTML. De komende weken
breidt je jouw kennis over HTML uit. Gebruik de komende weken om HTML te
leren op <a href="Codecademy.com" class="uri">Codecademy.com</a>.

#### Taak : Leer meer over HTML

-   navigeer naar  
    <https://www.codecademy.com/catalog/language/html-css>

-   start de gratis ’Learn HTML’ cursus;

-   pas de kennis die je in deze cursus leert toe in jouw eigen
    webpagina;

-   vergeet ook niet steeds de aangepast versie te committen in <code>Git</code>;

In onderstaande lijst staan een aantal links naar meer informatie over
HTML.

-   "HTML Tutorials. And Stuff."  
    <https://www.htmldog.com/>

-   " The world’s largest web developer site"  
    <https://www.w3schools.com/html>

-   "HTML Tutorial"  
    <https://qhmit.com/html/tutorial>

-   <https://www.codecademy.com/>

-   <https://www.w3.org/Style/Examples/011/firstcss.nl.html>

## Kennismaken met CSS

"CSS is the language we use to style an HTML document. CSS describes how
HTML elements should be displayed." 

"CSS stands for Cascading Style Sheets. CSS describes how HTML elements
are to be displayed on screen, paper, or in other media. CSS saves a lot
of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files" 

De webpagina die je nu gemaakt hebt is nogal saai. Waarschijnlijk
bestaat het uit zwarte tekst op een witte achtergrond. Moderne websites
zien er echter veel beter uit met gekleurde achtergronden, aangepaste
fontstylen, prachtige foto’s, animaties, overgangen, etc. Om een website
op te maken heb je een tweede taal nodig, nml. cascading style sheets
(CSS).

In onderstaande listing zie je een simpel voorbeeld van een CSS bestand.

``` css
h1 {color: orange}
    body {background-color: red}
```

De CSS in listing <a href="#css01" data-reference-type="ref"
data-reference="css01">[css01]</a> maakt de achtergrond van een
webpagina rood en de tekst in een H1 header oranje.

In de volgende taken voeg je CSS toe aan jouw webpagina.

#### Taak : Voeg CSS toe aan HTML pagina

1. voorbereiding;
    a.  maak de folder op jouw computer;
    b.  gebruik een code editor (zoals <code>VScode</code> of </code>Notepad++</code>) om de code
        in listing <a href="#css01" data-reference-type="ref"
        data-reference="css01">[css01]</a> in het bestand te plaatsen;
    c.  commit de wijziging in <code>Git</code>;

2. koppel het css bestand aan jouw html bestand;
    a.  pas aan door in de head-tag de volgende tag op te nemen:  
        <code><link rel="stylesheet" type="text/css" href="css/style.css"></code> 
3. bekijk de webpagina
    a.  start een webbrowser en navigeer naar <http://localhost/helloworld>
    b.  is de webpagina nu voorzien van kleur?
        -   welke kleuren?

4. pas de kleuren aan  
    a. zoek op internet naar een overzicht van CSS kleuren    
    b. wijzig de kleur van het <code>h1</code>-element in achtereenvolgens de volgende kleuren... 

    * <code>gray</code>
    * <code>violet</code> 
    * <code> slateblue</code> 
    * <code>rgb(255,0,0)</code> 
    * <code>rgb(0,255,0)</code> 
    * <code>rgb(0,0,255)</code> 
    * <code>rgb(255,255,255)</code> 
    * <code>rgb(0,0,0,0)</code>
  

    c. test iedere kleur door de CSS aan te passen en de browser te verversen met F5  
    d. pas de kleur van de body aan in enkele zelf gevonden cq. bedachte kleuren  
    e. test iedere kleur door de browser te verversen met F5    
    f. bekijk de pagina ook eens met een andere browser dan jouw standaard browser. Zie je verschillen in de manier waarop de pagina getoond wordt?  
    g. commit elke kleur in <code>git</code>, zorg voor een beschrijvende omschrijving  

5. pas de fontgroote aan

    a.  voeg de volgende regel toe aan <code>p {font-size: 40pt}</code>  
    b.  ververs de browser met F5
    c.  wat is er veranderd?
    d.  commit de wijziging in <code>git</code>, zorg voor een beschrijvende omschrijving

Je hebt nu een begin gemaakt met CSS. Hopelijk zie je nu al dat CSS je
helpt om op een makkelijke manier de opmaak van een website te bepalen.

In de volgende taak onderzoek jij een aantal standaard CSS properties.

#### Taak : Onderzoek CSS

1.  zoek op het internet naar voorbeelden van CSS bestanden.
2.  onderzoek in ieder geval de volgende properties.

    -   color
    -   background-color
    -   background-image
    -   font-family
    -   font-size
    -   text-align
    -   borders
    -   margin

## Verdiepen in CSS

je hebt nu een hele kleine introductie gehad in CSS. De komende weken
breid jij jouw kennis over CSS uit. Gebruik de komende weken om CSS te
leren op <a href="Codecademy.com" class="uri">Codecademy.com</a>.

#### Taak : Leer meer over CSS

-   navigeer naar  
    <https://www.codecademy.com/catalog/language/html-css>
-   start de gratis ’Learn CSS’ cursus;
-   pas de kennis die je in deze cursus leert toe in jouw eigen en
    bestanden
-   vergeet niet de aangepaste versie te committen in <code>Git</code>;

In onderstaande lijst staan een aantal links naar meer informatie over
CSS.

-   <https://nl.wikipedia.org/wiki/Cascading_Style_Sheets>
-   <https://htmldog.com/>
-   <https://www.w3schools.com/css>
-   "Getting started with the web"  
    <https://developer.mozilla.org/nl/docs/Learn/Getting_started_with_the_web/CSS_basisbegrippen>

-   "Strato, CSS voor beginners"  
    <https://www.strato.nl/blog/css-voor-beginners-een-stylesheet-maken/>

-   "Smashing magazine, Mastering CSS principles"  
    <https://bit.ly/3hlWPjm> 

## Eindtaak

Je hebt nu basiskennis van HTML en CSS. Met deze kennis kun jij een
eenvoudige websites maken. In de volgende taken willen wij graag zie wat
jij allemaal al kunt met HTML en CSS. Laat maar zien wat je kunt en
verbaas ons, hou je niet in. :-)

#### Taak : webpagina CV

-   Maak een webpagina met daarop jouw Curriculum Vitea
-   Gebruik HTML om de pagina in te delen.
-   Gebruik CSS om de pagina op te maken.
-   Plaats een (pas)foto van jezelf op de pagina.
-   Deel de code via GitHub met de docenten.
-   Overleg met de docenten of je op de goede weg bent.
-   Maak een afspraak voor een reviewmoment als beide taken klaar zijn.

## Afronding

-   Gebruik de rubric om te bepalen of je een voldoende of goed haalt
    voor deze opdracht. Overleg met docenten of studenten als je
    twijfelt.

-   Deel de code van webpagina van je CV met de docenten als dit nog
    niet gedaan is.

-   Vraag een reviewmoment aan bij een docent.

-   Bereid je voor op het review moment:

    -   Weet wat je wilt vertellen.

    -   Ken de code van de gemaakt webpagina’s uit je hoofd.

    -   Bereidt je voor op vragen om de code (HTML en CSS) aan te
        passen.

-   Kom op tijd in het reviewmoment.

-   Na goedkeuring door een docent:

    1.  Plaats de code (HTML en CSS) van webpagina CV in een word
        document.

    2.  Upload beide documenten in Cumlaude.

-   Plaats je CV pagina op je hosting omgeving.

## Planning Webpagina

Je kunt onderstaande sjabloon gebruiken voor jouw eigen planning. Neem
onderstaande sjabloon daarvoor over in jouw favoriete planningtool en
voeg waar gewenst eigen regels toe. Zet de verschillende acties daarna
op de juiste data in jouw agenda.

PS: Je kunt taken niet altijd na elkaar te plannen. Je zult taken ook
moeten laten overlappen. Dit geldt ook voor taken in de verschillende
opdrachten.

| **Actie**                | **Datumstart** | **Datumklaar** | **Klaar** |
|:-------------------------|:---------------|:---------------|:----------|
| Maak eerste webpagina    |                |                |           |
| Leer meer over webpagina |                |                |           |
| Leer CSS                 |                |                |           |
| Leer meer over CSS       |                |                |           |
| Maak webpagina CV        |                |                |           |
| Maak webpagina verslag   |                |                |           |
| Reviewmoment             |                |                |           |

## Rubric Webpagina

## Opdracht

| *G=Goed \| V=Voldoende \| M=Matig \| O=Onvoldoende*                    |     |     |     |     |
|:-----------------------------------------------------------------------|:----|:----|:----|:----|
|                                                                        | *G* | *V* | *M* | *O* |
| Ik heb de webpagina CV gemaakt                                         |     |     |     |     |
| Ik heb de webpagina van een zelf gekozen verslag gemaakt               |     |     |     |     |
| Ik heb git gebruikt tijdens deze opdracht                              |     |     |     |     |
| Ik heb de code die ik wil bespreken met de docenten gedeeld via GitHub |     |     |     |     |

## Kennis

| *G=Goed \| V=Voldoende \| M=Matig \| O=Onvoldoende* |     |     |     |     |
|:----------------------------------------------------|:----|:----|:----|:----|
|                                                     | *G* | *V* | *M* | *O* |
| Ik kan uitleggen wat Lorem Ipsum is                 |     |     |     |     |
| Ik kan uitleggen waarom Lorem Ipsum gebruikt wordt  |     |     |     |     |

#### HTML

| *G=Goed \| V=Voldoende \| M=Matig \| O=Onvoldoende* |     |     |     |     |
|:----------------------------------------------------|:----|:----|:----|:----|
|                                                     | *G* | *V* | *M* | *O* |
| Ik kan het DOCTYPE element uitleggen                |     |     |     |     |
| Ik kan het HTML element uitleggen                   |     |     |     |     |
| Ik kan het HEAD element uitleggen                   |     |     |     |     |
| Ik kan het META element uitleggen                   |     |     |     |     |
| Ik kan het BODY element uitleggen                   |     |     |     |     |
| Ik kan het H1 element uitleggen                     |     |     |     |     |
| Ik kan het H2 element uitleggen                     |     |     |     |     |
| Ik kan het P element uitleggen                      |     |     |     |     |

#### CSS

| *G=Goed \| V=Voldoende \| M=Matig \| O=Onvoldoende*                      |     |     |     |     |
|:-------------------------------------------------------------------------|:----|:----|:----|:----|
|                                                                          | *G* | *V* | *M* | *O* |
| Ik kan de rgb functie van CSS uitleggen                                  |     |     |     |     |
| Ik kan de color property van CSS uitleggen                               |     |     |     |     |
| Ik kan de background-color property van CSS uitleggen                    |     |     |     |     |
| Ik kan de background-image property van CSS uitleggen                    |     |     |     |     |
| Ik kan de font-family property van CSS uitleggen                         |     |     |     |     |
| Ik kan het verschil tussen family-name en generic-family uitleggen       |     |     |     |     |
| Ik kan het verschil tussen serif en sans-serif fonts uitleggen           |     |     |     |     |
| Ik kan het verschil tussen proportional en monospace fonts uitleggen     |     |     |     |     |
| Ik kan de font-size property van CSS uitleggen                           |     |     |     |     |
| Ik kan het verschil tussen px, pt, pc, em en rem bij font-size uitleggen |     |     |     |     |
| Ik kan de text-align property van CSS uitleggen                          |     |     |     |     |
| Ik kan de border property van CSS uitleggen                              |     |     |     |     |
| Ik kan de margin property van CSS uitleggen                              |     |     |     |     |

## CV pagina

|                                                                 |                                                                                           |                                                                                      |                                                                        |
|:----------------------------------------------------------------|:------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|:-----------------------------------------------------------------------|
| **HTML en CSS**                                                 |                                                                                           |                                                                                      |                                                                        |
| Ik kan uitleggen hoe mijn webpagina werkt                       |                                                                                           |                                                                                      |                                                                        |
| *Goed*                                                          | *Voldoende*                                                                               | *Matig*                                                                              | *Onvoldoende*                                                          |
| Ik heb HTML en CSS **plus** extra technieken gebruikt           | Ik heb HTML en CSS gebruikt                                                               | Ik heb alleen HTML gebruikt maar geen CSS                                            | Ik heb geen pagina geschreven **of** pagina is niet in HTML geschreven |
| Ik kan werking van pagina foutloos en zonder hapering uitleggen | Ik moet soms, niet hinderlijk, nadenken over werking van pagina                           | Ik moet veel nadenken of antwoorden opzoeken bij uitleg over pagina                  | Ik kan HTML en CSS in pagina niet uitleggen                            |
| **Parate kennis**                                               |                                                                                           |                                                                                      |                                                                        |
| Ik kan mijn kennis over HTML en CSS direct toepassen            |                                                                                           |                                                                                      |                                                                        |
| *Goed*                                                          | *Voldoende*                                                                               | *Matig*                                                                              | *Onvoldoende*                                                          |
| Ik kan een gevraagde wijziging direct doorvoeren in webpagina   | Ik kan een gevraagde wijziging na enig, niet hinderlijk, nadenken doorvoeren in webpagina | Ik kan een gevraagde wijziging na lang, hinderlijk, nadenken doorvoeren in webpagina | Ik kan een gevraagde wijziging niet doorvoeren in webpagina            |

## Verslag webpagina

|                                                                  |                                                                                           |                                                                                      |                                                                        |
|:-----------------------------------------------------------------|:------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|:-----------------------------------------------------------------------|
| **HTML en CSS**                                                  |                                                                                           |                                                                                      |                                                                        |
| Ik kan uitleggen hoe mijn webpagina werkt                        |                                                                                           |                                                                                      |                                                                        |
| *Goed*                                                           | *Voldoende*                                                                               | *Matig*                                                                              | *Onvoldoende*                                                          |
| Ik heb HTML en CSS gebruikt. Alle opmaak heb ik in CSS geplaatst | Ik heb HTML en CSS gebruikt. Sommige opmaak is in (deprecated) HTML code geplaatst        | Ik heb alleen HTML gebruikt maar geen CSS                                            | Ik heb geen pagina geschreven **of** pagina is niet in HTML geschreven |
| Ik kan werking van pagina foutloos en zonder hapering uitleggen  | Ik moet soms, niet hinderlijk, nadenken over werking van pagina                           | Ik moet veel nadenken of antwoorden opzoeken bij uitleg over pagina                  | Ik kan HTML en CSS in pagina niet uitleggen                            |
| **Parate kennis**                                                |                                                                                           |                                                                                      |                                                                        |
| Ik kan mijn kennis over HTML en CSS direct toepassen             |                                                                                           |                                                                                      |                                                                        |
| *Goed*                                                           | *Voldoende*                                                                               | *Matig*                                                                              | *Onvoldoende*                                                          |
| Ik kan een gevraagde wijziging direct doorvoeren in webpagina    | Ik kan een gevraagde wijziging na enig, niet hinderlijk, nadenken doorvoeren in webpagina | Ik kan een gevraagde wijziging na lang, hinderlijk, nadenken doorvoeren in webpagina | Ik kan een gevraagde wijziging niet doorvoeren in webpagina            |
