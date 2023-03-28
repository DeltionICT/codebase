---
title: OOP Public & Private
key: 2603
difficulty: basic
date: 2023-03-24
author: rkerssies
technology: ide, html, css, php, functions, csharp, oop
---


<img src="{{ '/_assets/api/PHP-logo.png' | url }}" style="width:10%;">
<img src="{{ '/_assets/api/c-sharp.png' | url }}" style="width:10%;">

> #### Voorkennis
> * Classes met methods maken
> * Objecten van classes maken en methods daarop aanroepen

> #### Dit ga je leren
> * De herbruikbaarheid van classes en methods vergroten
> * Methods aanroepen binnen andere methods
> * Methods alleen binnen de classe beschikbaar stellen (private)
> * Meerdere (sub)resultaten (proporties) in een method makkelijk beschikbaar maken voor hergebruik BINNEN de class (private)
> * Meerdere (sub)resultaten (proporties) in een method makkelijk beschikbaar maken voor hergebruik BUITEN de class (public)

[php public]({{ 'https://www.w3schools.com/php/keyword_public.asp' | url }})<br>
[php private]({{ 'https://www.w3schools.com/php/keyword_private.asp' | url }})<br>
[php protected]({{ 'https://www.w3schools.com/php/keyword_protected.asp' | url }})


## Opdracht
Houdt de volgende structuur aan in je code:
* lezen van classes
* objecten maken en logica uitvoeren en het renderen van gegevens
* tonen van html-structuur en het weergeven van de gerenderde gegevens.
* werk met een 'single-point of entry' (bijv: index.php of index.cshtml)

Een voorbeeld van het gebruik van class met private en public properties en methods;
```php
<?php
    // reading classes with methods
    class clsCalc
    {
        public failMessage   = '';
        private failValues   = [];
    
        public function som( $pX, $pY=1 )		
        {
            if($this->check($pX) && $this->check($pY) ) {
                return ( $pX + $pY );
            }
            return $this->failValues;

        }
        
        private function check( $pX )		
        {
            if(is_numeric($pX))  {
                return true;
            }
            $this->failValues[] = $pX;
            $this->failMessage .= 'failed value is: '.$pX.'.<br>';
            return false;
        }
    }
    // initiating an object from a clasess and logic
    $objectSom = new clsCalc();	                    // make an object 
    $renderedSome =  $objectSom->som(10);	        // call methode on object (must be public)
    echo $objectSom->failMessage.'<br>';            // no fails, is empty
    
    $objectSom1 = new clsCalc();	                
    $renderedSome1 =  $objectSom1->som('hallo');	// call methode on object (must be public), $renderSome1 contains an array
    echo $objectSom1->failMessage.'<br>';           // no fails, contains a string; 'failed value is: hallo.<br>'
    
    // not possible:  $objectSom->check(10);        // call on private method is NOT possible
    // not possible:  $objectSom->failValues;       // call on private property is NOT possible
?>
<html>
```

1. Maak een uitgebreide IP-calculator 
* Maak method 'setIp'om het ip-adres op te geven, de invoer te controleren en deze beschikbaar stelt aan alle ander methods.
  Bij foutieve invoer wordt een property "failMessage" gezet met een passende foutmelding.
* Maak een method 'setSubnet' om het subnetmask op te geven, de invoer te controleren en deze beschikbaar stelt aan alle ander methods.
  Bij foutieve invoer wordt een property "failMessage" gezet met een passende foutmelding.
* Maak een method 'getNetwerk' die het netwerkdeel bepaald op basis van ip-adres uit de property en het opgegeven subnetmask in het setSubnet-method.
  Het ip-adres is achteraf ook op het object op te vragen.
* Maak een method 'getBroadcast' die het broadcast-ip bepaald op basis van ip-adres uit de property en het opgegeven subnetmask in het setSubnet-method.
* Maak een method 'getAmounthost' die het aantal mogelijke ip-adressen bepaald op basis van ip-adres uit de property en het opgegeven subnetmask in het setSubnet-method.
* Maak een method 'getIpNetwork' dat het ip-adres bepaald voor de netwerk-kaart op basis van ip-adres uit de property en het opgegeven subnetmask in het setSubnet-method.

* Maak een formulier dat op basis input-velden en checkboxen de gewenste resultaten teruggeeft en toont.
* Als er foutieve informatie of onmogelijke situaties ontstaan worden de fouten verzameld en allemaal in een lijst getoond. 

## Resultaat
Methods binnen een class die elkaar kunnen aanroepen.<br>
Uitwisselen van proporties binnen methods van een class en evt. deze beschikbaar maken buiten de class. 
Elk object krijgt verschillende parameters mee en geeft correcte resultaten terug.



## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br>
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd
