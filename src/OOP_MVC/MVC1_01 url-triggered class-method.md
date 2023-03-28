---
title: MVC url-trigger
key: 2610
difficulty: medium
date: 2022-12-30
technology: html, php, functions, oop, dbq
author: rkerssies
---

<img src="{{ '/_assets/api/mvc.png' | url }}" style="width:10%;">

> ##### Voorkennis
> * programmeer-basics, git, functions, oop
> * Goed begrip van classes, objecten, methdos, parameters en private-public

> ##### Doel
> * Content laden en tonen op basis van url een 'query string' door gebruik te maken van classes en methods
> * Code schrijven volgens “best practices” en eerder geleerde technieken.

* Programmeertaal: PHP of een andere backend-taal
Voorbeelden van url's met een querystring;
`http://www.mysite.nl/index.php?controller=articles&action=index&id=3`<br>
`http://localhost/mynproject/index.php?controller=articles&action=index&id=3`

Een voorbeeld van het triggeren van een controller-class en action (method van een controller);
```php
// default controller and action 
     if(empty($_GET['controller']))	{
         $_GET['controller']  = 'home';
     }
     if(empty($_GET['action'])) 	{
         $_GET['action'] 	= 'index';
     }
		$controllerName     = ucFirst($_GET['controller']). 'Controller';
		include_once('./app/controllers/'.$controllerName.'.php');
		$oController 	    = new $controllerName();		// make an instance (object) of the controller
        $method             = $_GET['action'];
       $render              = $oController->$method();		// call the action on the controller-object
    return $render;
```
NB: een pad van een controller zal er bijv. als volgt uit moeten zien (case-sensitive):<br>
`./app/controllers/HomeController.php`



## Opdracht
1. Maak een map met daarin meerdere bestanden die elk 'content' bevatten. Bijv: home.php of users.php.<br>
   Zorg dat elke file één enkele class bevat. Deze klas MOET per taak een aparte method hebbben, bijvoorbeeld: index, add, update en delete.
   Elke nethod geeft content teruggeeft (return). Dit kan o.a. een tabel, formulier, afbeeldingen of stuk tekst zijn.<br>
2. Maak een index-bestand waarin geheel onderin de html-structuur staat en boven in alle logica. Deze logica levert variabelen met
   een combinatie van eigen stukken tekst en HTML-tags.
3. Maak een folder, bijvoorbeeld 'core', waarin alle logica komt te staan die minimaal nodig is de applicatie te laten werken.<br>   
   Maak hierin een bestand met een class die de get-waarden van de query-string gebruikt om:
    * een specifieke file uit de content-folder te 'includen'.
    * de een object van een class maakt en ook een enkele method binnen het object aanroept (de naamgeving op elkaar afstemmen)
    * het resultaat uit die ene aangeroepen object wordt teruggegeven aan de index in een enkele variabele.
4. Toon het resultaat dat in die variabele staat in de article-tag
5. Maak verschillende contentonderdelen die getoond kunnen worden (bijv. een: home-page, gallery of tabel).

## Op te leveren
Op basis van 'query strings' in de url wordt er specifieke content-bestand ingelezen,
een class en method aangeroepen en het resultaat daaruit getoond in de article-tag.
Door een menu met anker-tags kunnen de verschillende url's met query-strings worden aangeroepen die zo de keuze tussen verschillende content kan maken.


## Evaluatie
Vraag om een code-review om feedback op jouw aanpak en tips voor best-practices te krijgen.<br> 
Dit is een rubrics of checklist waaraan je kunt zien of de opdracht juist is uitgevoerd



Een alternatief op het aanroepen van een controller-class en een action:<br>
```php
class HomeController {
    function index($array) 
    {
       $txt = '';
       foreach($array as $w) {
           $txt . = $w;
       }
       return "<h1>Home</h1>".$txt;
    }
}

$controllerName = ucFirst($_GET['controller']). 'Controller';
include_once('./app/controllers/'.$controllerName.'.php');
$oController 	= new $controllerName();
call_user_func_array(array($oController, $_GET['action']), array("hallo", "hoi"));
```
