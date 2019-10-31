const path = require('path');
const express = require('express');
const debug = require('debug');

const log = debug('dev');

const app = express();

const port = process.env.PORT || 3000;

app.use('/', express.static(`${__dirname}/../dist`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => log(`Listening on port ${port}`));
