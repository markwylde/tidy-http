const test = require('tape');
const http = require('http');

const tidyRequest = require('../tidyRequest');
const tidyResponse = require('../tidyResponse');

test('request is cleaned', t => {
  t.plan(2);

  const server = http.createServer((request, response) => {
    const cleanedRequest = tidyRequest(request);

    response.writeHead(200, { 'Content-Type': 'text/html' });

    t.ok(cleanedRequest.getOrigialRequest);
    delete cleanedRequest.getOrigialRequest;

    t.deepEqual(cleanedRequest, {
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
    });

    response.end();
    server.close();
  }).listen(8000);

  http.request('http://localhost:8000').end();
});

test('response is cleaned', t => {
  t.plan(2);

  const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    const cleanedResponse = tidyResponse(response);

    t.ok(cleanedResponse.getOrigialResponse);
    delete cleanedResponse.getOrigialResponse;

    t.deepEqual(cleanedResponse, {
      _hasBody: true,
      _header: cleanedResponse._header.includes('HTTP/1.1 200 OK\r\nContent-Type: text/html') && cleanedResponse._header,
      _headerSent: false,
      writable: true,
      finished: false,
      statusCode: 200,
      statusMessage: 'OK'
    });

    response.end();
    server.close();
  }).listen(8000);

  http.request('http://localhost:8000').end();
});
