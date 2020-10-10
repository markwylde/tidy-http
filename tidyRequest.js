function tidyRequest (request) {
  return {
    getOrigialRequest: () => request,
    complete: request.complete,
    upgrade: request.upgrade,
    aborted: request.aborted,
    headers: request.headers,
    trailers: request.trailers,
    url: request.url,
    method: request.method,
    statusCode: request.statusCode,
    statusMessage: request.statusMessage
  };
}

module.exports = tidyRequest;
