---
key: 2527
title: C# OOP Verdieping
difficulty: medium
date: 2023-03-21
author: kscheening
technology: cscharp
---

<style>
c { color: darkcyan; font-weight: bold;}
m { color: crimson; font-weight: bold;}
v { color: gold; }
o { color: lightslategray; font-style: italic;}
</style>

> ##### Voorkennis
> * programmeer-basics
> * programmeertaal: C#

> ##### Doel
> * leren en toepassen van drie van de vier pilaren van Object Oriented Programming in de C# taal:<br> 
     - Encapsulation <br>
     - Inheritance <br>
     - Polymorphism

Als je meer met ASP.net wilt gaan doen is het noodzakelijk dat je meer kennis opdoet van OOP (Object Oriented Programming) met C#; want alles draait op OOP principes als je met ASP.net gaat werken!

Omdat deze principes abstract in nature zijn en snel te veel kunnen worden, worden deze concepten geintroduceerd in opgedeelde uitleg filmpjes en maak je een Textbased Adventure Game via een commandline applicatie! Waarom specifiek een game? De mechanieken van een game lenen zich heel goed uit voor de verschillende onderdelen van OOP.

***Opdrachten***

>**Vantevoren**
>
>*Voordat je begint met de eerste opdracht:*
>
>Volg de [instructie video](https://youtu.be/IHGcqp-KoSs) om een start te maken met de textbased adventure game. Alle opvolgende opdrachten breiden deze start uit met nieuwe mechanieken en leer je verschillende principes van OOP programmeren. Eind resultaat is dus 1 werkende text based adventure game!
>


Uiteindelijk ben je vrij om opdrachten uit te breiden of eigen mechanics toe te voegen. Hoe uitgebreider jij het maakt hoe beter het een centerpiece kan zijn in jouwn portfolio!

<br>

 ## **Opdracht 1 - Humble Beginnings**
 
 Voordat je verder gaat moet je het volgende hebben gedaan: het instantiëren van een enemy object en deze kunnen we beschadigen door een commando uit te typen. Heb je dat nog niet, volg dan de video in het *Vantevoren* blok hierboven.

 Heb je deze onderdelen al wel klaar dan heb je al een kleine start gemaakt met een text based adventure game! Maar we kunnen het nog zeker geen 'echte' game noemen. Wat je nu hebt gemaakt ga je uitbreiden tot een werkende game door de vijf opdrachten uit te voeren; en ondertussen leer je ook nog eens OOP programmeren in C#! 
 
Breid wat je tot nu toe hebt met het volgende uit:
 
 <alt>Maak een nieuwe klasse genaamd <c>Player</c>. Zorg ervoor dat beide de <c>Player</c> en <c>Enemy</c> klassen dezelfde variabelen hebben (<v>name, health en damage</v>). Instantieer een <c>Player</c> object op dezelfde manier als <c>Enemy</c>. Deze <c>Player</c> object gebruiken we om alle waardes van de speler bij te houden. Wanneer je als speler <v>damage</v> doet met een aanval commando, gebruik dan de <v>damage</v> variabele van het <c>speler object</c> in plaats van 10. Nadat de speler heeft aangevallen, valt de enemy de speler aan en doet het zijn <v>damage</v> variabele als schade aan de speler.</alt>
 

>**Extra** <br>
>Experimenteer met <c>Random()</c> om een variatie in <v>health</v> en <v>damage</v> te implementeren.
 
 Een keer aanvallen en aangevallen worden is niet heel spectaculair. Stop daarom het geven en krijgen van schade in een loop zodat beide de speler en vijand kunnen blijven vechten tot een van de twee dood is. Dit betekend dus dat je meerdere keren commando's kan invoeren. Voeg een nieuwe <v>boolean variabele gameOver</v> en laat de loop, loopen tot <v>gameOver</v> waar is.

 >Het herhalen van acties en mechanics om tot een bepaalt doel te komen noemen we ook wel een gameloop.

 Als de vijand is verslagen stopt de gameloop met een <o>‘MONSTER VANQUISHED!’</o> bericht. Als de speler is verslagen stopt de gameloop met een <o>‘YOU DIED!’</o> bericht. Zorg voor wat opvulling tussen acties met <code>WriteLine</code> (omschrijf wat de speler/vijand doet en wat het gevolg is. Bijv: <o>players attacks! Dealt 10 damage!</o> Met de volgende code kan je kleur toevoegen aan de tekst en tekstachtergrond (Blue en White als voorbeeld):

>    <code>
>        Console.BackgroundColor = ConsoleColor.Blue;<br>
>        Console.ForegroundColor = ConsoleColor.White;
>    </code>
<br>
 Maak er wat moois van! <br>

>**Extra** <br>
>Probeer alvast de <code>playerInput</code> in een switch case te stoppen, met ‘Attack’ en ‘Use item’ als cases. Voor nu kan je bij ‘Use item’ de speler een waarde laten ‘healen’ (health weer terug krijgen. Dit mag met een vaste waarde maar ook met <c>Random()</c>).
 
---

 ## **Opdracht 2 - And they won't stop coming!**
 Bekijk de videos van [Inheritance](https://youtu.be/su9ltheuewQ), [Constructors](https://youtu.be/WAa4v31M4V4) en [Getters&Setters](https://youtu.be/a004FjChyaE). <br>
 
 Maak eerst een superklasse <c>Entity</c> zoals in de video en laat de <c>Player</c> en <c>Enemy</c> klasse hiervan overerven. Geef de <c>Player</c> klasse een <v>maxHealth</v> variabele. Deze variabele gebruik je als grens (zodat de speler niet meer HEALED dan mag). Als je 'healen' al hebt gemaakt zorg er dan voor dat deze grens gebruikt gaat worden.
 
 Zet de variabelen van <c>Player</c> en <c>Enemy</c> om naar private en geef beide klassen een constructor voor deze variabelen. Wijzig het aanmaken van een speler en enemy zodat het gebruik maakt van de constructor (en dat het dus maar uit een lijn per <c>object</c> bestaat).
 
 Zorg ervoor dat alle gedeelde variabelen tussen <c>Player</c> en <c>Enemy</c>, <m>getters</m> en <m>setters</m> krijgen in de superklasse <c>Entity</c> (zoals <m>GetName()</m> of <m>SetHealth()</m>). Maak alleen unieke <m>getters</m> en <m>setters</m> aan in <c>Player</c> of <c>Enemy</c> als het om een variabele gaat die niet gedeelt is. Denk verder goed om goeie benamingen van de <m>getters/setters</m> en maak gebruik van argumenten en returnwaardes waar nodig. Wijzig de code in de <c>Main</c> zodat het gebruik maakt van deze getters en setters, inplaats van directe referenties naar de variabelen.
 
 Met het verplaatsen van het aanmaken van de enemy naar bovenin de gameloop kan je er voor zorgen dat bij elke loop er een nieuwe <c>Enemy</c> aangemaakt wordt. Zorg ervoor dat bij het verslaan van een <c>Enemy</c>, er een nieuwe wordt aangemaakt aan het begin van de loop (dus pas wanneer de huidige enemy is verslagen.)
 >TIP: de Enemy variabele moet NIET in de loop, het initialiseren ervan wel!. 
 
 De loop stopt nu dus alleen wanneer de speler dood gaat.
 
  >**Extra** <br>
  Geef nieuwe <c>Enemies</c> een random <v>health</v> en <v>damage</v> waarde (wees gebalanceerd!)
  >>**bonus**: geef nieuwe <c>Enemies</c> een random naam uit een naam verzameling (randomize de index)
 
 Je kan nu eindeloos vechten tegen enemies tot jij, de speler, dood gaat. <br><br>
 
 Voeg nu de volgende functionaliteit toe (je zou nu de kennis moeten hebben om dit zelf te implementeren. X en Y zijn waardes die je zelf 'gebalanceerd' bepaalt):
 
 >Geef de speler een <v>level</v> en een <v>experience</v> variabele; geef alleen level de waarde 1. Bij elke verslagen vijand krijgt de speler een X aantal exp erbij (via een <m>setter</m>). Wanneer de <v>experience</v> hoger is dan Y gaat de speler LEVELUP (via een <m>setter</m>). Bij elke LEVELUP worden de volgende variabelen gewijzigd:
>
>>* level van de speler +1
>>* maxHealth van de speler + Random tussen 5 en 10
>>* health krijgt de waarde van maxHealth
>>* damage van de speler + Random tussen 1 en 3
>>* De Y grens voor een levelup * 1.2 
>>* exp gaat weer terug naar 0
>
>**Resultaat** <br>
Je kan nu eindeloos vechten tegen vijanden en ga je een level omhoog gaan wanneer X aantal vijanden zijn verslagen (en je zo steeds sterker wordt). <br>
**Let op!**: zorg dat het uitlezen en wijzigen van variabelen altijd via <m>getters</m> en <m>setters</m> gaat.

---

 ## **Opdracht 3 - I command you to...**
 Voor deze opdracht ga je de mechanics die je op dit moment hebt gemaakt, opschonen en wat uitbreiden.  Kijk eerst de video [Enums](). Na de videos weet je hoe je enums kan aanmaken en gebruiken in combinatie met een switchcase. Voeg een enum toe voor de volgende gamestates:
 
  ><code>COMBAT <br>
  >STORY <br>
  >GAMEOVER</code>
  
 Voeg een variabele voor de <v>gamestate</v> toe aan Program.cs. Maak het gehele combat segment zo dat het in een eigen methode/functie zit en alleen aangeroepen wordt als de gamestate COMBAT is. Maak nog twee extra methodes toe voor:
 
>STORY - comment een todo voor story segmenten (je hoeft hier dus nog geen logica voor te schrijven)<br>
>GAMEOVER - wanneer de speler zijn health op 0 of lager komt wordt de gamestate omgezet naar GAMEOVER. 

Voeg in de <m>gameover</m> methode wat writelines toe over hoe de speler dood gaat en meld <o>"Game Over"</o>.
Het resultaat moet als volgt zijn: 

>als de gamestate op COMBAT staat wordt de combat uitgevoerd zoals voorheen en kan de speler commando's geven om aan te vallen en/of items gebruiken (als je dat hebt geprogrammeerd), waarna de vijand de speler aanvalt. Er moet een functie zijn voor het wijzigen van de gamestate wanneer dat evt. nodig is. Dit moet altijd aan het einde van de gameloop gebeuren zodat de volgende loop methodes wordt bepaalt. Als de speler dood is word de gamestate omgezet naar GAMEOVER en word de gameover logica uitgevoerd.
 
Wijzig de enemy naar een <v>enemy verzameling</v> zodat de speler tegen 2, 3 of zelfs 10 enemies tegelijk kan vechten. <c>Enemies</c> die aangemaakt worden met dezelfde naam (zoals Goblin) moeten een nummer aan hun naam toegevoegd krijgen (dus Goblin1, Goblin2). Breidt de commando's van de speler uit zodat er ook een naam opgegeven kan worden van de vijand om aan te vallen (bijv. Attack Goblin1). Nadat de speler is geweest krijgt elke vijand in de verzameling een beurt om de speler aan te vallen. Doe dit via een foreach loop om door de <v>enemy verzameling</v> te loopen. Zorg er voor dat de juiste writelines zijn toegevoegd.
 
>**Resultaat** <br>
Er kunnen meerdere vijanden tegelijk verschijnen en worden samengevoegd in de intro (bijv.: A wild Goblin and Giant Rat appeared!). De speler kan in zijn aanval commando een naam meegeven voor welke vijand hij/zij wilt aanvallen. Daarna krijgt elke vijand een beurt om de speler aan te vallen. Dit blijft herhalen tot de speler dood is of alle vijanden zijn verslagen; in dit 
geval worden er weer nieuwe vijanden aangemaakt en begint het gevecht opnieuw!).
 
---
## **Opdracht 4 - Are they getting stronger?**

Kijk de video over [Polymorfisme](). We gaan variatie in de vijanden brengen doormiddel van polymorfisme.

Creëer twee nieuwe klassen <c>TankEnemy</c> en <c>BlitzEnemy</c> en laat deze overerven van <c>Entity</c>.  Beide vijanden delen alle variabelen en methodes die er al zijn, maar hebben de volgende verschillen:

>De <c>TankEnemy</c> heeft een extra <v>variabele armorValue</v>. Elke keer als deze vijand schade krijgt, gaat het eerst van de <v>armorValue</v> af, voordat het van zijn <v>health</v> af gaat.
>
>De <c>BlitzEnemy</c> heeft elke keer als het aanvalt een kans om nog een keer aan te vallen. Deze kans begint hoog, maar wordt bij elke aanval kleiner.
>
>Polymorph beide damage en aanval methodes zodat ze wel dezelfde methode naam en argumenten houden maar dat het de bovengenoemde functionaliteiten implementeert.

Laat deze nieuwe vijanden, samen met de originele, ook verschijnen in de gameloop bij gevechten doormiddel van kans.
 

---

## **Opdracht 5 - In a single file line, please!**
Kijk eerst het filmpje [QueuesandStacks](https://youtu.be/gdHm_txelq8); je weet dan wat <c>Queues</c> en <c>Stacks</c> zijn en hoe je deze moet gebruiken. 

Voor deze opdracht gaan je wat meer order creëren in de combat, met name de volgorde van wie als eerste acties mag uitvoeren!
 
Voeg aan <c>Entity</c> een nieuwe variabele <v>speed</v> met een default waarde van 1 toe. Zorg ervoor dat dit meegenomen wordt in de <m>constructor</m> en <m>getters</m> en <m>setters</m>. Aan Program.cs voeg je een queue toe van het type <c>Entity</c>. Maak een nieuwe methode/functie <m>CombatSetup()</m>, voor het opzetten van deze queue. Deze methode moet dus entiteiten in de queue stoppen wat de volgorde van beurten tijdens combat bepaalt. Wijzig de combat code zodat het gebruikt maakt van deze queue. Zodra een entiteit zijn actie(s) heeft gedaan wordt hij uit de queue gehaald (en weer gequeued) en krijgt de volgende entiteit zijn beurt. 
 
Voeg aan <m>CombatSetup()</m>, een nieuwe tijdelijke verzameling van entiteiten toe. Voordat de entiteiten aan de queue worden toegevoegd worden ze eerst in deze verzameling gestopt. Voer een sorteer algoritme op deze lijst uit, gebaseerd op de speed variabele van de entiteiten (snelste vooraan). Als dit klaar is worden de entiteiten op deze gesorteerde volgorde toegevoegd aan de queue.

Je kan zelf bepalen wat voor sortering gebruikt gaat worden, maar een mooie start in deze wereld is de [BubbelSort](https://www.geeksforgeeks.org/bubble-sort/).
 
>**Eindresultaat** <br>
Voordat combat begint worden alle entiteiten in het gevecht gesorteerd op hun snelheid. Deze volgorde wordt overgenomen in de combat queue, waardoor er een variërende volgorde in beurten ontstaat: snellere entiteiten zijn als eerste aan de beurt!
>>**Bonus** <br>
Voeg een mechanic toe dat de speed variabele van de entiteiten versneld/vertraagd kunnen worden tijdens combat. Bijvoorbeeld: wanneer een entiteit geraakt wordt met ice magic dan wordt zijn speed gehalveerd (waardoor hij dus later aan de beurt is). Hiervoor moet je dus alle entiteiten opnieuw sorteren nadat iedereen aan de beurt is geweest. Als je hier een dynamischere manier voor kan bedenken dan is dat bonus punten!

---

## **Opdracht 6 - What happens next?**
Maak eerst een backup van jouw huidige project; deze opdracht is namelijk een flinke ingreep! Deze opdracht vraagt ook inzicht in code architectuur en volgorde!
 
Kijk de video over [Linkedlists](https://youtu.be/bqwXngdIliY); je hebt dan de kennis om je eigen verzameling te schrijven volgens het linkedlist principe. 

Maak een nieuwe folder "Datastructures" aan. Maak binnen deze folder de benodigde klassen voor een linkedlist (zoals in de video). Via een aparte klasse <c>StoryManager</c> ga je jouw text based adventure game afmaken: 
 
De <c>toryManager</c> regelt de gameflow; per node in de linkedlist kijkt het of er een verhaal verteld moet worden of dat er combat moet starten. Dit kan je op de volgende manier doen. Voeg aan de node klasse een boolean <v>isCombat</v> toe. Deze variabele kan je op false zetten waar alleen een string uitgeschreven moet worden (story segment) en true wanneer de combat code moet starten zoals je het nu hebt geschreven. Vanuit de <c>GameManager</c> moet er eerst gekeken worden of de huidige linkedlist node een combat node is, om daarna de gamestate te veranderen naar de bijbehorende state (en zo dus de juiste code uitgevoerd wordt). Hier komt dus die gamestate switch goed van pas!
 
Als voorbeeld
>De GameManager kijkt naar de huidige gamestate: deze staat op STORY en kijkt naar de huidige linkedlist node. De isCombat boolean staat op false en de print methode van de huidige linkedlist node wordt uitgevoerd. De node data wordt via een Console.WriteLine uitgeschreven naar de console en de opvolgende node word nu de huidige node. 
> 
>De GameManager kijkt opnieuw naar de huidige gamestate: deze staat nog steeds op STORY en word er weer eerst gekeken naar de huidige linkedlist node. Hier is de isCombat boolean wel waar; de gamestate wordt gewijzigd naar COMBAT en de huidige node word alvast vervangen met de volgende node (deze node wordt nog niet gebruikt totdat combat voorbij is!). 
> 
>De GameManager kijkt opnieuw naar de huidige gamestate: deze staat op COMBAT en word vervolgens de combat code uitgevoerd tot dat alle vijanden verslagen zijn. Bij het verslaan van alle vijanden word de gamestate weer gewijzigd naar STORY en gaat het weer verder zoals gewoon.
 
Voeg een aantal nodes toe om een basic verhaal te vertellen met halverwege wat combat (minimaal drie nodes voor introductie, combat, afsluiting). 
 
>Bonus: voeg een keuze toe aan nodes. Geef de speler de opdracht om een keuze te maken na een kort verhaal. Houd het op twee keuzes die elk wijzen naar twee verschillende next nodes. Of deze nodes combat of story zijn mag je zelf bepalen. Beide routes wijzen naar dezelfde next node om de splitting weer samen te voegen.