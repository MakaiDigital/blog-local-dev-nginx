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
          <title>App 2</title>
        </head>
        <body>
          <h1 style="color: red">App 2</h1>
          <p>Anything under /app2 will be served by this app</p>
        </body>
      </html>
    `);
}

app.get('/app2', route);
app.get('/app2/*', route);

app.listen(4000, () => console.log('App 2 is running on port 4000\nVisit http://localhost:4000/app2'));