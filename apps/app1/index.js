const express = require('express')
const app = express()

function route(req, res) {
  res.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>App 1</title>
        </head>
        <body>
          <h1 style="color: green">App 1</h1>
          <p>Anything under /app1 will be served by this app</p>
        </body>
      </html>
    `);
}

app.get('/app1', route);
app.get('/app1/*', route);

app.listen(3000, () => console.log('App 1 is running on port 3000\nVisit http://localhost:3000/app1'));