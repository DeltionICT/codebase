---
title: Webservices | Local domainnames
difficulty: basic
date: 2022-02-11
author: rkerssies
technologies: webservices
---

# {{ title }}
<img src="{{ '/_assets/themas/webserver.png' | url }}" style="width:10%;">


## Domain-names maken op een local-server
Het doel is om de volgende url;
```http://localhost/mvc2022/public```
om te zetten naar:
```http://mvc2022.rk```

____________________________________
### Mac
Open host-file in een text-editor (nano);
```shell
% sudo nano /etc/hosts
````
Breid de file uit met de laatste regel van dit voorbeeld;
```javascript
    ### Host Database
    ## localhost is used to configure the loopback interface
    ## when the system is booting.
    ## Do not change this entry.
    127.0.0.1 mvc2022.rk
```
Sla de veranderingen op en REBOOT de webserver !
____________________________________
### Windows
Open host-file in een text-editor; 
```shell
    C:\Windows\System32\drivers\etc\hosts   (hidden)
```

Breid de file uit met de laatste regel van dit voorbeeld;
```javascript
    ### Host Database
    ## localhost is used to configure the loopback interface
    ## when the system is booting.
    ## Do not change this entry.
    127.0.0.1 mvc2022.rk
```
Sla de veranderingen op en REBOOT de webserver !

____________________________________
### Alle webservers
Voorbeeld hostfile 

Open de vhost-conf file in een text-editor. 
De file kan worden gevonden in de XAMPP applicatie-folder;
```shell
~/etc/extra/httpd-vhosts.conf
```
Voeg het volgende tekstblok toe en pas de folders aan naar het pad waarin het project staat.
In dit voorbeeld is de complete projectfolder in een geheel ander folder geplaatst buiten de htdocs-folder van XAMPP.
De index.php file staat in de public-folder.
```javascript
<VirtualHost *:80>
    ServerName mvc2022.rk
    DocumentRoot "/Users/developer/projectsphp/mvc2022/public"
    <Directory "/Users/developer/projectsphp/mvc2022/public" >
            Options Indexes FollowSymLinks Includes execCGI
            AllowOverride All
            Require all granted
    </Directory>
</VirtualHost>
```

De website is nu te benaderen met de url ```http://mvc2022.rk```

## Clean URL's opzetten

Door een .htaccess file toe te voegen in de root-folder van het project.
Voeg daarin de volgende code toe;
```shell
#Options +FollowSymLinks -MultiViews
RewriteEngine On
# dont rewrite real files and folder
# RewriteCond %{SCRIPT_FILENAME} !-d
# RewriteCond %{SCRIPT_FILENAME} !-f

# rewrites default from clean URL to get-values
 RewriteRule ^([^/]+)/([^/]+)/([^/.]+)/([^\.]+)/?$ ./index.php?p0=$1&p1=$2&p2=$3&p3=$4 [L,NC,QSA]
 RewriteRule ^([^/]+)/([^/]+)/([^\.]+)/?$ ./index.php?p0=$1&p1=$2&p2=$3 [L,NC,QSA]
 RewriteRule ^([^/]+)/([^\.]+)/?$ ./index.php?p0=$1&p1=$2 [L,NC,QSA]
 RewriteRule ^([^\.]+)/?$        ./index.php?p0=$1 [L,NC,QSA]

```
Sla de .htaccess file op.
De domainname kan nu maximaal 4 parameters aan.
In het voorbeeld wordt een clean url met 3 parameters is getoond:
```http://mvc2022.rk/cars/edit/1```

Ook kan er nog met QSA (query striing append) worden gewerkt zal in het volgende voorbeeld:
```http://mvc2022.rk/cars/all?orderby=brand&direction=desc```
________________________________
* Externe resources
[Extra uitleg Windows]({{ 'https://ecompile.io/blog/localhost-custom-domain-nameje' | url }}) 
[Extra uitleg Windows]({{ 'https://www.freecodecamp.org/news/how-to-find-and-edit-a-windows-hosts-file/' | url }}) 
[Extra uitleg Mac>]({{ 'https://www.mdahosting.com/where-is-the-hosts-file-on-a-mac/' | url }}) 
