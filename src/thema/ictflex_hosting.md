---
layout: h2_toc
title: Hosting
key: 2512
difficulty: basic
date: 2023-03-13
author: jsiewers, pvangemert, adalmolen, jheuvelman
technology: hosting
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

In deze opdracht leer je de technieken die nodig zijn om een webpagina
op het internet aan een gebruiker te tonen. Je bent waarschijnlijk
bekend met een webbrowser en een webserver. Maar weet je ook wat deze
doen? Naast webbrowsers en webservers zijn er nog meer technieken nodig
om een webpagina aan een gebruiker te tonen. Ken je de volgende termen?

-   Backend
-   Frontend
-   CSS (Cascading stylesheet)
-   Database server
-   Firewall
-   HTML (HyperText Markup Language)
-   HTTP (HyperText Transfer Protocol)
-   HTTPS (HyperText Transfer Protocol Secure)
-   JS (Javascript)
-   JSON (javascript Object Notation)
-   PHP (Php: Hypertext Preprocessor)
-   Storage server
-   SQL (Structured Query Language)

Deze opdracht introduceert je met deze technieken en je gaat deze ook
gebruiken.

## Backlog

-   Als web developer moet ik weten welke technieken ervoor zorgen dat
    de gebruiker een webpagina kan bekijken.

-   Als web developer moet ik weten welke functies de laptop, desktop,
    smart phone of tablet heeft bij het bekijken van een webpagina zodat
    ik eventuele problemen kan onderzoeken en oplossen.

-   Als web developer moet ik weten welke functie een webserver heeft
    bij het bekijken van een webpagina zodat ik eventuele problemen kan
    onderzoeken en oplossen.

-   Als web developer moet ik weten welke functie een database server
    heeft bij het bekijken van een webpagina zodat ik eventuele
    problemen kan onderzoeken en oplossen.

## Het Web

#### Kennismaking

We beginnen ons verhaal met Bob. Bob wil graag weten welke docenten
werkzaam zijn bij de ict-flex opleiding. Hij weet dat hij daarvoor op de
website van ict-flex moet zijn. Gelukkig is Bob een man van de huidige
tijd en heeft hij een laptop waarmee hij het web op kan.

![Het Web](https://static.edutorial.nl/lucy/hosting/hetweb.png)

#### De laptop

Als eerste zet Bob zijn laptop aan waardoor het operating system start.
Bob heeft ooit de keuze gemaakt voor Windows, MacOS of Linux. Voor de
rest van dit verhaal maakt het niet uit welke OS hij gebruikt.

Om het internet op te kunnen heeft de laptop van Bob een uniek adres op
het internet nodig. Dit unieke adres noemen we het ip adres. Elke
systeem op het internet heeft een eigen uniek ip adres. Bob kan dit ip
adres handmatig instellen maar het is waarschijnlijker dat Bob gebruikt
maakt van DHCP(1). DHCP is een netwerkprotocol waarbij devices op het
netwerk automagisch een ip adres krijgen.

Bij het starten meldt de laptop van Bob zich op het netwerk en vraagt
aan een DHCP server om een ip adres. De DHCP server zal het verzoek
beoordelen en na goedkeuring een ip adres teruggeven. Als Bob zijn
laptop morgen weer aanzet, dan zal DHCP proberen hetzelfde ip adres
terug te geven. Als Bob zijn laptop nooit meer uitzet, dan zal zijn
laptop op geregelde tijden aan de DHCP server vragen of het ip adres nog
gebruikt kan worden. Afhankelijk van het antwoord van de DHCP server zal
de laptop hetzelfde ip adres blijven gebruiken of een ander ip adres
krijgen. Het is dus mogelijk dat de laptop van Bob gedurende de dag een
ander ip adres krijgt.

Nadat het ip adres is ingesteld start de firewall. Zonder extra
voorzorgsmaatregelen kan ieder systeem contact proberen te maken met de
laptop van Bob. Ook kan elke programma dat gestart wordt contact opnemen
met systemen op het internet. Om dit ongewenst contact tegen te gaan
heeft het operating system een firewall. De firewall beveiligt het
netwerk door al het netwerkverkeer van en naar de laptop van Bob te
controleren. Tijdens deze controle bepaalt de firewall of het verkeer
toegestaan dan wel verboden is. Niet toegestaan verkeer wordt
geblokkeerd, terwijl toegestaan verkeer doorgelaten wordt.

Nu is de laptop van Bob klaar om het internet op te gaan en kan Bob
inloggen.

## De webbrowser

Nadat Bob ingelogd is in zijn operating system start hij zijn
webbrowser.

"Een browser is een computerprogramma waarmee het mogelijk is om over
het wereldwijde web te surfen, dat wil zeggen websites op het internet
te bekijken. Webbrowsers zorgen ervoor dat webpagina’s gedownload kunnen
worden van het web en zetten de broncode om naar een grafische weergave
op het scherm."

Bob maakt misschien gebruik van de standaard browser van Windows,
namelijk Edge. Hij kan ook een extra browser geïnstaleerd hebben zoals
Chrome, Firefox, Chromium , Safari of Opera.

Voor Bob maakt het niet uit welke browser hij gebruikt. Ze laten
allemaal de inhoud van een webpagina zien.

Voor de ontwikkelaar van een webpagina is de keuze van een webbrowser
wel belangrijk. Hoewel ze allemaal de inhoud laten zien, doen ze dat
niet allemaal op dezelfde manier. Elke browser heeft zijn eigen manier
om een webpagina te tonen. Dit houdt in dat een webpagina er in
verschillende browsers verschillend uit kan zien.

## URL

In de browser typt Bob de URL van de ict-flex website:
<https://ict-flex.nl/over-ons>

"Een URL is niets meer dan een gestructureerde naam die verwijst naar
een stuk data. Voorbeelden hiervan zijn het unieke adres waarmee de
locatie van een webpagina op internet wordt aangegeven..."

De browser zal de url opsplitsen in verschillende elementen en deze
gebruiken in zijn communicatie met de webserver. De url
<https://ict-flex.nl/over-ons> bevat de volgende informatie voor de
webbrowser (en het operating system).

| Element     | Type       | Uitleg                                                           |
|:------------|:-----------|:-----------------------------------------------------------------|
| https       | Protocol   | Manier waarop browser en server met elkaar communiceren          |
| ict-flex.nl | Autoriteit | De naam van de webserver waar verbinding mee gemaakt moet worden |
| over-ons    | Resource   | De gegevens die opgevraagd worden                                |

#### Protocol

"A network protocol is an established set of rules that determine how
data is transmitted between different devices in the same network.
Essentially, it allows connected devices to communicate with each other,
regardless of any differences in their internal processes, structure or
design."

Een network protocol is te vergelijken met een taal. Zodra mensen
dezelfde taal spreken kunnen zij met elkaar praten. Computers kunnen met
elkaar communiceren als ze dezelfde protocol(len) gebruiken.

Voor Bob is het handig als zowel zijn browser als de webserver dezelfde
protocollen spreken. Gelukkig zijn deze protocollen aanwezig: HTTP(2)
en HTTPS(3).

#### Autoriteit

De autoriteit in de url bevat de informatie over de server waar de
webpagina staat. De autoriteit bestaat uit de volgende deelelementen:

-   Domeinnaam
-   Subdomein
-   Portnummer
-   Usernaam en Wachtwoord

#### Domeinnaam

"Een domeinnaam is een unieke naam op internet."
"Een domeinnaam of domein is de naam van een website en een deel van de
URL die bezoekers gebruiken om een website te bezoeken."
Voorbeelden van domeinen zijn google.nl, google.com, google.co.uk,
deltion.nl, ict-flex.nl.

#### Subdomein

Voor de domeinnaam staat soms een subdomein. Het meest gebruikt
subdomein is waarschijnlijk www (4). Met een subdomein kun je een
website opdelen in verschillende onderdelen. Zo laat www.google.nl de
zoekfunctie van Google zien. maps.google.nl laat je de kaartfunctie van
Google zien. translate.google.nl brengt je naar de vertaalfunctie van
google.
www.deltion.nl is de standaard website van het Deltion College.
rapid.deltion.nl is een subdomein waar je de RAPiD webapplicatie kunt
vinden.

#### Poortnummer

Met het poortnummer geef je aan met welk proces op de server contact
moet worden gezocht. HTTP verkeer gaat over poort 80. Deze hoef je ook
niet op te geven. HTTPS gaat over poort 443 en ook deze hoef je niet op
te geven.

Alleen in uitzonderlijke gevallen zul je tegenkomen dat een website op
een andere poort beschikbaar is. Je ziet dan staan dat je een
poortnummer moet opgeven in de url. Het poortnummer komt dan achter de
domeinnaam in de url.

#### Usernaam en wachtwoord

Als laatste kun je ook een usernaam en wachtwoord in de autoriteit
opnemen. Deze usernaam en wachtwoord werd gebruikt om direct op een
website in te loggen. Deze manier van inloggen wordt tegenwoordig niet
meer gebruikt omdat het niet veilig is.

#### Complete autoriteit

Een uitgebreide autoriteit ziet er dan bijvoorbeeld als volgt uit:
<https://peter:welkom01@www.petervg.nl:8080>

#### Taak : Een eigen domeinnaam
Hou het netjes en professioneel!!

1.  Bedenk drie domeinnamen Hou de namen netjes en professioneel!!

2.  Controleer of de domeinnamen nog vrij zijn Gebruik daarvoor websites
    van <https://www.sidn.nl> of <a href="who.is" class="uri">who.is</a>

3.  Zijn de door jouw gekozen domeinen nog vrij?

#### Taak : Bestaande domein controleren 
Gebruik <https://who.is> en <https://sidn.nl> om de volgende vragen te beantwoorden.

1.  Beantwoord de volgende vragen over het deltion.nl domein

    -   Sinds wanneer is het deltion.nl domein actief?

    -   Bij welk bedrijf is het domein geregistreerd?

    -   Wie is het contactpersoon binnen Deltion voor het Deltion.nl
        domein?

2.  Beantwoord de volgende vragen over het microsoft.nl domein

    -   Sinds wanneer is het microsoft.nl domein actief?

    -   Bij welk bedrijf is het domein geregistreerd?

3.  Beantwoord de volgende vragen over het youtube.com domein

    -   Sinds wanneer is het youtube.com domein actief?

    -   Bij welk bedrijf is het domein geregistreerd?

#### Resource

De resource geeft aan welke gegevens er opgevraagd worden. De resource
is niet verplicht. Als de resource niet opgegeven is zal een browser
automatisch ontvangen van de webserver. Dit is echter een instelling van
de webserver en kan door de beheerder aangepast worden.

Bob heeft wel een resource opgegeven. Hij wil namelijk de over-ons
pagina zien.

#### Communicatie

De laptop van Bob maakt nu contact met de server ict-flex.nl. Via
DNS(5) wordt de naam ict-flex.nl omgezet naar het unieke ip adres van
de webserver. De webbrowser vraagt daarna via het https protocol (op
poort 443) om de over-ons pagina op de webserver.

## Webserver

Via het internet en het web komt het verzoek van Bob binnen bij de
webserver.

"De term webserver kan verwijzen naar zowel een softwareprogramma
waarmee websites via het internet toegankelijk gemaakt kunnen worden,
als het fysieke computersysteem dat de hiervoor benodigde systeembronnen
(hardware) levert en meestal in een serverkast in een datacenter wordt
geplaatst."

"Een webserver is een computer die is gekoppeld aan het internet. Op
deze computer bevinden zich bestanden, afbeeldingen of webpaginas die
door derden via het internet geraadpleegd kunnen worden."

"Webserver-software zorgt primair voor de afhandeling van
HTTP-verzoeken, oftewel de communicatie tussen server en client bij de
overdracht van gegevens en bestanden zoals webpagina’s en afbeeldingen.
Moderne webservers beschikken over de mogelijkheid om meerdere websites
vanaf één IP-adres aan te bieden (virtual hosting), en kunnen naast het
overbrengen van statische bestanden (zoals afbeeldingen en JavaScript)
ook dynamische webpagina’s genereren, direct met behulp van een module
of indirect als proxy server naar andere software, zoals een interpreter
of database."

De bekendste webserver software zijn:

-   Apache <https://httpd.apache.org/>

-   IIS <https://www.iis.net/>

-   Nginx <https://www.nginx.com/>

Zoals we weten wil Bob de over-ons pagina zien. De server zoekt nu naar
de over-ons pagina.

#### Storage server

In een “echt” datacenter staan de html bestanden niet op de webserver
maar op een storage server. De webserver zal dus op de storage server
zoeken naar de over-ons pagina. De communicatie tussen de webserver en
de storage server gaat dmv. networkprotocollen zoals NFS(6), CIFS(7),
of SAN(8).

NFS en CIFS worden ook wel NAS(9) genoemd. Een bekende leverancier van
NAS systemen voor thuisgebruik is Synology
(<https://www.synology.com/nl-nl>)

#### PHP

De webserver zal de inhoud van de over-ons pagina controleren. Als het
bestand PHP code bevat, dan zal de webserver de PHP code uitvoeren. Door
het uitvoeren van deze code zullen er delen van de webpagina met HTML
code gevuld worden. PHP is een zogenaamde backend taal waarmee
webpagina’s dynamisch gevuld worden met gegevens. Het uitvoeren van PHP
gebeurt altijd op de webserver.

#### Database en SQL

In veel gevallen staat de informatie die aan de webpagina toegevoegd
wordt in een database. PHP heeft daarom libraries waarmee verbinding
gemaakt kan worden met de database server. Dmv. de SQL-taal(10) kan de
PHP code informatie uit de database halen. Deze informatie wordt dan
door de PHP code verwerkt en uiteindelijk aan de webpagina toegevoegd.

Bekende database software zijn:

-   MySQL <https://www.mysql.com/>

-   MariaDB <https://mariadb.org/>

-   Oracle DB <https://www.oracle.com/nl/database/>

-   SQL server
    <https://www.microsoft.com/nl-nl/sql-server/sql-server-downloads>

-   PostgreSQL <https://www.postgresql.org/download>

-   SQLite <https://www.sqlite.org/index.html>

#### External services

In sommige gevallen staat de benodigde informatie niet op de eigen
servers van een bedrijf maar op servers van andere bedrijven. Denk
bijvoorbeeld aan weer-, verkeers- en beursinformatie. Deze informatie is
niet via SQL op te vragen omdat de ict-flex server geen verbinding heeft
met de database server van het externe bedrijf.

Via een API(11) call kan deze informatie toch van een externe service
opgevraagd worden. "Een API maakt communicatie en het uitwisselen van
informatie mogelijk tussen verschillende (software) systemen."

"Een API (voluit: application programming interface) is een basis waarop
computerprogramma’s met elkaar kunnen communiceren. Wanneer een
computerprogramma een ingang en een set afspraken aanbiedt kan andere
software deze gebruiken om informatie en instructies met dit programma
uit te wisselen."

Een API levert gegevens meestal terug in JSON (12) formaat maar ook
XML(13) is gangbaar.

"\[JSON\] is een standaard om informatie gestructureerd op te slaan en
uit te wisselen, vergelijkbaar met XML."

De PHP code kan deze JSON of XML gegevens verwerken en in de webpagina
plaatsen.

#### Communicatie

Zodra de webserver klaar is het met maken van de over-ons pagina zal het
deze pagina via het overeengekomen protocol terug sturen naar de client.

## Browser

De browser ontvangt de over-ons pagina van de webserver.

#### HMTL

De webpagina is geschreven in de HTML taal. Deze taal vertelt de browser
hoe de webpagina is opgebouwd. Waar moet tekst komen te staan. Waar komt
een plaatje. De locatie van het menu en de opties in het menu worden in
HTML bepaald.

#### CSS

CSS bepaald de opmaak van de webpagina. Welke achtergrond kleur heeft de
website. In welk font moet de pagina getoond worden.

#### JavaScript

De browser controleert of de ontvangen pagina ook JavaScript code bevat.
Eventuele JavaScript code wordt door de browser uitgevoerd. Door het
uitvoeren van JavaScript krijgt de over-ons pagina zijn uiteindelijke
inhoud en opmaak.

Met JavaScript wordt vaak de DOM(14) aangepast.

"Het DOM (Document Object Model) is een representatie van elk element op
een pagina in een boomstructuur. De browser gebruikt het DOM om elk
element op een pagina te tonen. Het bevat zowel de elementen als de
inhoud van een element."

De over-ons pagina wordt nu op het scherm van Bob getoond.

#### Bob

Bob kan nu eindelijk lezen wie er allemaal bij de ict-flex opleiding
werken.

Wanneer Bob op een nieuwe link op de pagina klikt, dan wordt de volgende
pagina weer volgens bovenstaande verhaal opgehaald.

## Opgave

Je weet nu hoe het web werkt. Het is daarom tijd dat je er ook gebruik
van maakt. Doel van deze opgave is dat je een domein op het internet
krijgt. Je kunt deze website gebruiken om je kennis en kunde aan de
wereld te tonen op een zogenaamde portfolio site. Deze portfolio kun je
gebruiken tijdens het solliciteren naar een BPV(stage)-plek of een baan.

### Taak : Eigen domein op het internet

1.  Bedenk een persoonlijke domeinnaam.

    -   Bedenk een domainnaam die bij je past

    -   Kies een domainnaam die netjes is en maatschappelijk
        geaccepteerd.  
        Bedenk je goed dat je dit domain gebruikt om te solliciteren.

2.  Registreer je domein bij Studenten Webhost
    (<https://studentenwebhost.nl/product/vergelijk>). Kies voor de
    Premium Developer optie.

3.  Bij de docent kun je een kortingscode krijgen.

#### Taak : Inhoud

1.  Vul de website met informatie over jezelf

## Afronding

-   Gebruik de rubric om te controleren of jij een voldoende of goed
    haalt voor deze opdracht. Overleg met studenten of docenten als je
    hieraan twijfelt.

-   Bereid je voor op een gesprek met een docent.

    1.  Weet hoe je domein heet

    2.  Weet hoe je het domein hebt aangevraagd

    3.  Weet hoe je data op het domein hebt gezet

    4.  Kijk goed naar de rubric!

-   Laat aan een docent zien dat je domein online is

## Rubric Hosting

#### Kennis over het web

| *G=Goed \| V=Voldoende \| M=Matig \| O=Onvoldoende*           | *G* | *V* | *M* | *O* |
|:-----------------------------------------------------------|:----|:----|:----|:----|
| Ik kan de functie van een webbrowser uitleggen             |     |     |     |     |
| Ik kan de functie van een webserver uitleggen              |     |     |     |     |
| Ik kan uitleggen wat het HTTP protocol doet                |     |     |     |     |
| Ik kan uitleggen wat het HTTPS protocol doet               |     |     |     |     |
| Ik kan uitleggen waar Javascript gebruikt wordt op het web |     |     |     |     |
| Ik kan uitleggen waar PHP gebruikt wordt op het web        |     |     |     |     |
| Ik kan uitleggen wat de functie van HTML is                |     |     |     |     |
| Ik kan uitleggen wat de functie van CSS is                 |     |     |     |     |
| Ik kan uitleggen wat de functie van SQL is                 |     |     |     |     |

#### Eigen domein

     

| *G=Goed \| V=Voldoende \| M=Matig \| O=Onvoldoende*             | *G* | *V* | *M* | *O* |
|:-------------------------------------------------------------|:----|:----|:----|:----|
| Ik kan mijn persoonlijke domein laten zien                   |     |     |     |     |
| Ik kan uitleggen hoe ik mijn website gevuld heb              |     |     |     |     |
| Ik kan laten zien dat ik gegevens op de website kan wijzigen |     |     |     |     |

#### Voetnoten
[1] DHCP - Dynamic Host Configuration Protocol  
[2] HTTP - HyperText Transfer Protocol  
[3] HTTPS - HyperText Transfer Protocol Secure  
[4] www - world wide web  
[5] DNS - Domain Name System  
[6] NFS - Network File System  
[7] CIFS - Common Internet File System  
[8] SAN - Storage Area Network  
[9] NAS - Network Attached Storage  
[10] SQL - Structured Query Language  
[11] API - Application programming interface  
[12] JSON - JavaScript Object Notation  
[13] XML - Extensible Markup Language  
[14] DOM - Document Object Model

