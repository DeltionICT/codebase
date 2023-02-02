---
title: -js22- Tafels
difficulty: basic #basic | medium | expert
date: 2023-01-31
---

#### {{ course-title }}
# {{ title }}
<style>
    .voorkennis { border:1px solid gray; border-radius:3px; padding:4px; margin:1em 0;}
    .cd_block { 
        background: #f4f4f4;
        border: 1px solid #ddd;
        border-left: 3px solid #f36d33;
        color: #666;
        page-break-inside: avoid;
        font-family: monospace;
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 1.6em;
        max-width: 100%;
        overflow: auto;
        padding: 1em 1.5em;
        display: block;
        word-wrap: break-word;
    }

    .cd { 
        background: #f4f4f4;
        color: #666;
        page-break-inside: avoid;
        font-family: monospace;
    }
    .opdracht, .uitbreiding {
        font-size: 120%;
    }
    h1, h2, h3, h4 {
        margin: 1em 0 .2em 0;
    }

    ul {
        margin: .2em 0 .2em 0;
    }

</style>
<div>
    <h3>Programmeertaal: 
        <span style="font-style: italic; color:darkred;">Javascript</span>
    </h3>
    <h3>Voorkennis:</h3>
    <div class="voorkennis">
        <ul>
            <li>
                <span class="cd">document.getElementById(id)</span> met
                <span class="cd">.innerHTML</span> en
                <span class="cd">.value</span>
            </li>
            <li>JS functions (<a href="https://www.w3schools.com/js/js_functions.asp" target="_blank">w3schools</a>)</li>
            <li>JS for-loop  (<a href="https://www.w3schools.com/js/js_loop_for.asp" target="_blank">w3schools</a>)</li>
        </ul>
    </div>
</div>

 <h3>Opdracht:</h3>
<div class="opdracht">
    Maak een input-vak waar je een getal in kan typen met daaronder een button.<br>
    Wanneer je op de button drukt wordt de tafel daaronder weergegeven.<br>
</div>

<img src="https://std.stegion.nl/_codebase_img/js22_tafels.png" alt="Voorbeeld tafel" style="width:300px">

<h3>Uitbreiding:</h3>
<div class="uitbreiding">
    <ul>
        <li>Voeg 2 inputs toe waarin je kan aangeven waar de tafel moet starten (standaard = 1) en stoppen (standaard = 10)</li>
        <li>voeg een wis-button toe die de output leeg maakt en ook het getal-vak.</li> 
        <li>Zorgt dat de cursor (de focus) na wissen in dat getal-vak staat.</li>
    </ul>
</div>
