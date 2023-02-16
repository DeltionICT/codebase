---
title: HTML Formulier
key: 2005
difficulty: basic
date: 2023-01-10
author: jsiewers
technology: html
---

# {{ title }}

> #### Voorkennis
> Basis HTML kennis over formulieren
> #### Doelen
> Leer een formulier te maken met html

## Resultaat
Een formulier gemaakt in HTML zoals in onderstaand voorbeeld


<div class="html">
    <h1>Basic HTML Form</h1>
    <form method="post" action="http://cscie12.dce.harvard.edu/echo">
        <fieldset style="padding:16px;background-color:white">
            <legend>Name</legend>
            <p>
                <label for="fname">First Name </label>
                <br/>
                <input   type="text" name="fname" id="fname" size="30" /> </p>
            <p>
                <label for="lname">Last Name </label>
                <br/>
                <input  type="text" name="lname" id="lname" size="30" /> </p>
        </fieldset>
        <fieldset style="padding:16px;background-color:white">
            <legend>Other Questions</legend>
            <p>
                Choose a drink:
                <br/>
                <input   type="radio" name="drink" id="coffee" value="coffee" />
                <label for="coffee">coffee</label>
                <br/>
                <input  checked="checked" type="radio" name="drink" id="tea" value="tea" />
                <label for="tea">tea</label>
                <br/>
                <input   type="radio" name="drink" id="hotchoc" value="hot_chocolate" />
                <label for="hotchoc">hot chocolate</label>
                <br/>
            </p>
            <p> What ice cream do you like?
                <br/>
                <input   type="checkbox" name="icecream" id="icecream_chocolate" value="chocolate" />
                <label for="icecream_chocolate">Chocolate</label>
                <br/>
                <input   type="checkbox" name="icecream" id="icecream_hcp" value="herrell's chocolate pudding" />
                <label for="icecream_hcp">Chocolate Pudding</label>
                <br/>
                <input  checked="checked" type="checkbox" name="icecream" id="icecream_cpb" value="chocolate peanut butter" />
                <label for="icecream_cpb">Chocolate Peanut Butter</label>
                <br/>
                <input   type="checkbox" name="icecream" id="icecream_vanilla" value="vanilla" />
                <label for="icecream_vanilla">Vanilla</label>
                <br/>
                <input   type="checkbox" name="icecream" id="icecream_strawberry" value="strawberry" />
                <label for="icecream_strawberry">Strawberry</label>
            </p>
            <p>
                <label for="school">Select a school:</label>
                <br/>
                <select   name="school" id="school">
                    <optgroup label="ACC">
                        <option>Boston College</option>
                        <option>Clemson</option>
                        <option>Duke</option>
                        <option>Florida State</option>
                        <option>Georgia Tech</option>
                        <option>Louiville</option>
                        <option>Miami</option>
                        <option>North Carolina</option>
                        <option>North Carolina State</option>
                        <option>Notre Dame</option>
                        <option>Pitt</option>
                        <option>Syracuse</option>
                        <option>Virginia</option>
                        <option>Virginia Tech</option>
                        <option>Wake Forest</option>
                    </optgroup>
                    <optgroup label="Big 10">
                        <option>Illinois</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Maryland</option>
                        <option>Michigan</option>
                        <option>Michigan State</option>
                        <option>Minnesota</option>
                        <option>Nebraska</option>
                        <option>Northwestern</option>
                        <option>Ohio State</option>
                        <option>Penn State</option>
                        <option>Purdue</option>
                        <option>Rutgers</option>
                        <option>Wisconsin</option>
                    </optgroup>
                    <optgroup label="Big XII">
                        <option>Baylor</option>
                        <option>Iowa State</option>
                        <option>Kansas</option>
                        <option>Kansas State</option>
                        <option>Oklahoma</option>
                        <option>Oklahoma State</option>
                        <option>Texas</option>
                        <option>Texas Christian</option>
                        <option>Texas Tech</option>
                        <option>West Virginia</option>
                    </optgroup>
                    <optgroup label="Ivy League">
                        <option>Brown</option>
                        <option>Columbia</option>
                        <option>Cornell</option>
                        <option>Dartmouth</option>
                        <option selected 00="selected">Harvard</option>
                        <option>Penn </option>
                        <option>Princeton</option>
                        <option>Yale</option>
                    </optgroup>
                    <optgroup label="Pac 12">
                        <option>Arizona</option>
                        <option>Arizona State</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Oregon</option>
                        <option>Oregon State</option>
                        <option>Stanford</option>
                        <option>UCLA</option>
                        <option>USC</option>
                        <option>Utah</option>
                        <option>Washington</option>
                        <option>Washington State</option>
                    </optgroup>
                </select>
            </p>
            <p>
                <label for="comments">Please provide comments:</label>
                <br/>
                <textarea   rows="5" cols="32" name="comments" id="comments"></textarea>
            </p>
        </fieldset>
        <p>
            <input   type="submit" />
        </p>
    </form>
</div>

## Uitleg 
[Uitleg over het maken van formulieren vind je hier](https://www.edutorial.nl/html/formulieren/#formulieren)