# tidy-http
[![Build Status](https://travis-ci.org/markwylde/tidy-http.svg?branch=master)](https://travis-ci.org/markwylde/tidy-http)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/markwylde/tidy-http)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/markwylde/tidy-http)](https://github.com/markwylde/tidy-http/releases)
[![GitHub](https://img.shields.io/github/license/markwylde/tidy-http)](https://github.com/markwylde/tidy-http/blob/master/LICENSE)

## Example Usage
### With callbacks
```javascript
const finalStream = require('tidy-http/cleanRequest');

const server = http.createServer((request, response) => {
  const cleanedRequest = clean.cleanRequest(request);
})
```

## License
This project is licensed under the terms of the MIT license.
