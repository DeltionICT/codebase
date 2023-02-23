---
title: Meelopen bij SD
difficulty: basic
date: 2023-01-02
technology: 
author: rkerssies
---


# {{ title }}

<img src="{{ '/_assets/basis/newbie.png' | url }}" style="width:13%; border-radius:10px;">

Welkom bij het ICT-Lyceum. Je komt vast een dagje meelopen.
Het idee is dat jij een SoftwareDeveloper beroepservaring krijgt, om te zien of het beroep bij jou past. 
Voor deze opdracht heb je ongeveer een dagdeel de tijd.


> ##### Doel
> * Ervaren of de opleiding en het beroep van softwareDeveloper bij jou past
> * Moment om vragen te stellen aan docenten en studenten over de opleiding, de sfeer en het beroep 


***Voor het eerst coderen:***
1. Installeer XAMPP op jouw laptop/PC. 
    [XAMPP downloaden]({{ 'https://www.apachefriends.org/download.html' | url }}) en installeren in C:\XAMPP 
2. Start de XAMPP-controller op en start de "Apache". Het wword "Apache" krijgt een groene achtergrondskleur.
3. Typ in de Windows-zoekbar: CMD<br>
    en open de Command prompt, ofewel de DOS-PROMPT; <br>
   <img src="{{ '/_assets/basis/windows_cmd.png' | url }}" style="width:40%;">
4. Download en installeer [NotePad++]({{ 'https://notepad-plus-plus.org/downloads/l' | url }})<br>
    Open de applicatie en maak een PHP-file aan met in de volgende folder: c:\tryout_php\01_test.php<br>
    Maak zo nodig de folder aan en schrijf de volgende code in de PHP-file;<br>
 `` <?php echo 'Mijn eerste PHP-code !'; ?>``
    Sla het bestand op.

5. Zorg dat de "prompt" staat in de folder C:\tryout_php door het volgende te typen afgesloten met een 'enter': cd tryout_php<br>
   Nu sta je met de prompt in de folder waarin jouw PHP-file staat.
6. De code in de PHP-file is met behulp van de PHP-service in XAMPP. De PHP-code in het bestand 01_test.php kan je uitvoeren door
 het volgende commando in de DOD-PROMPT te typen afgesloten met een enter;<br>
    php 01_test.php<br>
    <br>
    🎉🇳🇱Gefeliciteerd jouw eerste uitgevoerde PHP-code !  
<hr>

7. Probeer één van de opdrachten onder het menu-item "Basis" met één peper <img src="{{ '/_assets/green_pepper.svg' | url }}" style="width:20px;"><br>
    Bijvoorbeeld de opdrachten:
   * Hoofdletters
   * Deelbaar
   * Cirkel
   
    Hieronder staat een klein voorbeeld van code waarin verschillende mogelijkheden samenkomen: 
> 	$name = (string) readline("Your name: ");<br>
    if(strlen($name > 3))<br>
    {<br>
	    for($i=1; $i<=10; $i++)<br>
	    {<br>
		    echo $i.' de naam is: '.$name."\r\n";<br>
	    }<br>
    }<br>
    else {<br>
        echo 'er zijn te weinig karakters opgegeven';<br>
    }<br>
> 
NB: Deze code toont tien regels onder elkaar met een nummer, daarna de tekst "de naam is: " gevolgd door wat er is ingevoerd. 

Basis mogelijkheden met uitleg zijn: [If-else]({{ 'https://www.w3schools.com/php/php_if_else.asp' | url }}) en 
[Loops]({{ 'https://www.w3schools.com/php/php_looping.asp' | url }}).
Andere [mogelijkheden]({{ 'https://www.w3schools.com/php/php_ref_overview.asp' | url }}) , zoals
Math, String, Array, Date zijn onder deze link thematisch uitgewerkt. 

> ##### Op te leveren
> * een passend stukje code bij een 'kleine' uitdaging 
> * jouw feedback of de opleiding bij jou past 
