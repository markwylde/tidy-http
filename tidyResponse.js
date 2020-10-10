function tidyResponse (response) {
  return {
    getOrigialResponse: () => response,

    writable: response.writable,
    finished: response.finished,
    _hasBody: response._hasBody,
    _header: response._header,
    _headerSent: response._headerSent,
    statusCode: response.statusCode,
    statusMessage: response.statusMessage
  };
}

module.exports = tidyResponse;
