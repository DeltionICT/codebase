---
title: OOP Classes & methods
key: 2600
difficulty: basic
date: 2023-03-24
author: rkerssies
technology: ide, html, css, php, functions, oop, csharp
---

<img src="{{ '/_assets/api/PHP-logo.png' | url }}" style="width:10%;">
<img src="{{ '/_assets/api/c-sharp.png' | url }}" style="width:10%;">

> #### Voorkennis
> * Kennis van de basics in een backend-taal
> * Zelf functions met parameters kunnen maken en toepassen  

> #### Dit ga je leren
> * Basics van OOP, het gebruik van classes en methods


## Opdracht
Houdt de volgende structuur aan in je code:
* lezen van classes
* objecten maken en logica uitvoeren en het renderen van gegevens
* tonen van html-structuur en het weergeven van de gerenderde gegevens. 
* werk met een 'single-point of entry' (bijv: index.php of index.cshtml)

Een voorbeeld van het gebruik van class als object;
```php
<?php
    // reading classes with methods
    class clsCalc
    {
        public function som( $pX, $pY=1 )		
        {
            return ( $pX + $pY );
        }
    }
    // initiating an object from a clasess and logic
    $objectSom = new clsCalc();	        // maak een object ofwel instantie 
    $renderedSome =  $objectSom->som(10);	// roep een methode aan op het object (methode van de class)
?>
<!-- showing html and rendered variables -->
<html> 
   <body>
       <?php echo $renderedSome; ?>
   </body> 
</html>
```

1. Maak een class met daarin één method. <br>
2. In de method wordt bij het aanroepen van die method een teller opgehoogd.<br>
3. Maak een object van de class aan en roep de method daarin aan. 
4. Toon het resultaat (return van de method) op het scherm.

## Resultaat
Het maken van classes met daarin methods. 
Van een class een object maken en een method daarop aanroepen.
Het kunnen renderen van gegevens.

## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br>
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd
