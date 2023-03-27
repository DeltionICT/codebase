---
title: Installatie Arduino IDE & Knipperend LED
key:  2545
difficulty: basic
date: 2023-03-27
author: adalmolen
technology: arduino
---




> ##### Voorkennis
> * Basis programmeren 
> * Programmeertaal: C/C++ 

> ## Dit ga je leren
> * Installeren en instellen Arduino IDE
> * Aansluiten van een Arduino UNO op laptop/computer
> * Een basis programma om een LED te laten knipperen
> * Uploaden van een programma naar de Arduino UNO

## Uitvoering
Keuzedeel programmeren van Microcontrollers voer je alleen uit


### Installatie en aansluiten
* Ga naar [Arduino](https://www.arduino.cc/en/software) en download daar de laatste versie van Arduino IDE
* Installeer de gedownloade software
* Sluit de Arduino UNO aan op je laptop of computer (via USB kabel)
* Start Arduino IDE op
* Selecteer ==Arduino UNO== via menu ==Hulpmiddelen== &rarr; ==Board:== 
* Selecteer ==COMx (Arduino/Arduino UNO)== via menu ==Hulpmiddelen== &rarr; ==Poort:==
* Schakel ==Regelnummers weergeven== in via ==Bestanden== &rarr; ==Voorkeuren==

**Tussenresultaat**
Je hebt nu de benodigde tools geïnstalleerd en de Arduino UNO aangsloten op je laptop/computer. Op de Aruino UNO zijn standaard 4 LED's aanwezig:
- ON, deze brand zodra je de Arduino aansluit op USB of externe voeding
- Tx, deze knippert zodra de Arduino data verstuurd via de USB naar de IDE
- Rx, deze knippert zodra je data verstuurd naar de Arduino
- L, deze LED is intern aangesloten op pin 13, hier later meer over. Deze gaat alleen aan zodra hier een HIGH signaal naar gestuurd wordt.

### Knipperend LED L
Zodra je de Arduino IDE gestart hebt, krijg je een scherm die vrij leeg is. Het enige wat er staat is wat hieronder getoond wordt.
'''cpp
void setup() {
    // put your setup code here, to run once:
}

void loop() {
    // put your main code here, to run repeatedly:
}
'''
Belangrijk is dat alle programma's die je gaat schrijven voor de Arduino altijd een blok ==setup== heeft en een blok ==loop==. Als deze blokken ontbreken, zal de code niet gecompileerd worden en kan je programma niet geupload worden.

Open via ==Bestanden== &rarr; ==Voorbeelden== &rarr; ==01.Basic== het voorbeeld programma ==Blink==.
Als je alles goed hebt gedaan, zie je een nieuw venster met onderstaande code:
'''cpp
/*
  Blink

  Turns an LED on for one second, then off for one second, repeatedly.

  Most Arduinos have an on-board LED you can control. On the UNO, MEGA and ZERO
  it is attached to digital pin 13, on MKR1000 on pin 6. LED_BUILTIN is set to
  the correct LED pin independent of which board is used.
  If you want to know what pin the on-board LED is connected to on your Arduino
  model, check the Technical Specs of your board at:
  https://www.arduino.cc/en/Main/Products

  modified 8 May 2014
  by Scott Fitzgerald
  modified 2 Sep 2016
  by Arturo Guadalupi
  modified 8 Sep 2016
  by Colby Newman

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/Blink
*/

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
  delay(1000);                      // wait for a second
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
  delay(1000);                      // wait for a second
}
'''
**Uitleg code**
Het bovenste deel tussen de /* en */ is commentaar, hierin staat wel nuttige informatie, maar heeft geen effect op de code.
*setup*
- pinMode, met pinMode bepalen we of een pin werkt als een INPUT of OUTPUT. Bij INPUT komt er een signaal binnen van bijvoorbeeld een temperatuursensor. Bij OUTPUT gaat er een signaal naar een electronisch component bijvoorbeeld een LED. Deze gaat dan branden.
- LED_BUILTIN, is een voorgedefinieerde verwijzing naar digitale pin 13. Je mag ook 13 gebruiken.
- OUTPUT, mode van de geselecteerde pin is OUTPUT

*loop*
- digitalWrite, hiermee stuur je naar de gekozen pin een HIGH (aan) of LOW (uit) signaal
- HIGH, Signaal aan
- LOW, Signaal uit
- delay, pauzefunctie, De duur is in miliseconden (1000 is 1 seconden)

#### Uploaden van programma.
In het venster van Arduino IDE zie je 3 knoppen:
- &#10004; Compileert de code om zo fouten vooraf te ontdekken
- &rarr; Compileert de code en upload deze naar de Arduino
- &#9658; met een bugje, compileren, uploaden met debug mogelijkheid

Voor dat je code gaat uploaden naar de Arduino, klik je eerst op &#10004; zodat je zeker weet dat er geen fouten in je code zit. Als het resultaat zonder error is, kan je klikken op &rarr; om de code te uploaden naar de Arduino.

Tijdens het uploaden zie je de ledjes Rx en Tx knipperen. Zodra de upload klaar is, zie je led L elke seconde aan of uit gaan. Om te laten zien dat je niet de Arduino software nodig hebt en dat de Arduino UNO ook zelfstandig werkt, koppel je de Arduino af van je laptop en sluit je de Arduino IDE af. Sluit daarna de Arduino UNO weer aan op de USB kabel en nu moet led L weer knipperen.

Gefeliciteerd, je hebt de eerste opdracht van het keuzedeel Programmeren met Microcontrollers afgerond!


> {{technologiesTags}}
