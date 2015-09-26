# nodepop

## Deploy

Install dependencies
npm install

Configure
Review models/db.js to set database configuration

Init database
npm run installDB

## Start
npm start (now including nodemon & debug log)

## Test
npm test (pending to create, the cliente specified not to do now)

## JSHint
npm run hints

## JSCS
npm run jscs

## API v1 info

### Error example
    {
      "ok": false,
      "error": {
        "code": 401,
        "message": "Authentication failed. Wrong password."
      }
    }

### POST /usuarios/authenticate

Input Body: { email, clave}

Result: 

    {
      "ok": true, 
      "message": "Enjoy your token!", 
      "token": "..."
    }

### GET /anuncios

Input Query: 

start: {int} skip records
limit: {int} limit to records
sort: {string} field name to sort by
includeTotal: {bool} whether to include the count of total records without filters
tag: {string} tag name to filter
venta: {bool} filter by venta or not
precio: {range} filter by price range, examples 10-90, -90, 10- 
nombre: {string} filter names beginning with the string

Input query example: ?start=0&limit=2&sort=precio&includeTotal=true&tag=mobile&venta=true&precio=-90&nombre=bi

Result: 

    {
      "ok": true,
      "result": {
        "rows": [
          {
            "_id": "55fd9abda8cd1d9a240c8230",
            "nombre": "iPhone 3GS",
            "venta": false,
            "precio": 50,
            "foto": "iphone.png",
            "__v": 0,
            "tags": [
              "lifestyle",
              "mobile"
            ]
          }
          
        ]
      }
    }




