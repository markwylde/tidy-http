# tidy-http
[![Build Status](https://travis-ci.org/markwylde/tidy-http.svg?branch=master)](https://travis-ci.org/markwylde/tidy-http)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/markwylde/tidy-http)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/markwylde/tidy-http)](https://github.com/markwylde/tidy-http/releases)
[![GitHub](https://img.shields.io/github/license/markwylde/tidy-http)](https://github.com/markwylde/tidy-http/blob/master/LICENSE)

The native request and response objects in node's http server contain a lot of information that
is not commonly used. This library will return a new object, with only useful fields.

## Installation
```bash
npm install tidy-http
```

## Example Usage
### With callbacks
```javascript
const finalStream = require('tidy-http/cleanRequest');

const server = http.createServer((request, response) => {
  const cleanedRequest = clean.cleanRequest(request);
})

/*
{
  complete: false,
  upgrade: false,
  aborted: false,
  headers: {
    host: 'localhost:8000',
    connection: 'close'
  },
  trailers: {},
  url: '/',
  method: 'GET',
  statusCode: null,
  statusMessage: null
}
*/
```

## License
This project is licensed under the terms of the MIT license.
