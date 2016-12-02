const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example
const pgp = require('pg-promise')();
const db_pg = pgp(cn);

app.get('/api/ping', (req, res) => {
  const param = req.query.q;
  db_pg.any("select * from test_table", [true])
    .then(function (data) {
        // success;
        res.json(data);
    })
    .catch(function (error) {
        // error;
        console.log(error);
    });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
