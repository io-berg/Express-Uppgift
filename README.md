# Express-Uppgift

### Table of Content

- [Introduction](#Introduction)
- [Startup](#Startup)
- [Project Requirements](#Project-Requirements)

## Introduction

A simple app to track products created with Node.js, Express and React.

## Startup

To run this project, Clone it and install each part locally and run them using npm:

```
$ cd ./server
$ npm i
$ npm run dev
```

Open a new terminal

```
$ cd ./client
$ npm i
$ npm run dev
```

## Project requirements

Krav för godkänt:

- [x] 1. Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] 2. Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [x] 3. Datan som API:et hanterar sparas lokalt i serverfilen
- [x] 4. APIét ska svara med 404 om datan saknas.
- [x] 5. Git & GitHub har använts
- [x] 6. Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] 7. Uppgiften lämnas in i tid!

Krav för väl godkänt:

- [x] 1. Alla punkter för godkänt är uppfyllda
- [x] 2. All data skall vara sparad i en JSON-fil istället för i serverfilen
- [x] 3. Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [x] 4. Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
     - [x] GET: used at http://localhost:5173/ to load all products
     - [x] GET/Id: used at http://localhost:5173/product/id to load specific product
     - [x] POST: used at http://localhost:5173/admin/product/create to add a new product
     - [x] PUT: http://localhost:5173/admin/product/edit/id to update a product properties
     - [x] DELETE: used at http://localhost:5173/admin to delete a product)
- [x] 5. Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
