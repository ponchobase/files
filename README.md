# Project Title

Poncho on Base

## Description

Official Poncho Website

## Getting Started

* GIT repo: https://github.com/ponchobase/files

### Local

* XAMPP: https://www.apachefriends.org/download.html 
* XAMPP / xamppfiles/ etc / httpd.conf
```
Listen 91
```
* XAMPP / xamppfiles/ apache2 / conf / httpd.conf
```
<VirtualHost *:91>
    DocumentRoot "/Applications/XAMPP/xamppfiles/htdocs/ponchobase"
    ServerName local.ponchobase.com
    ServerAlias local.ponchobase.com
</VirtualHost>
```

### Production

* Change Git author: https://stackoverflow.com/a/43231587
* github-pages: https://github.com/ponchobase/files/deployments/github-pages

## Authors

* Poncho Dev Team

## Version History

* 0.1
    * Initial Release - Oct 8, 2024

## Acknowledgments

* [Font Awesome](https://fontawesome.com/)
* [jQuery](https://jquery.com/download/)
