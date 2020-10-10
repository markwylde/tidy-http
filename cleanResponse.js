function cleanResponse (response) {
  return {
    getOrigialResponse: () => response,

    writable: response.writable,
    destroyed: response.destroyed,
    finished: response.finished,
    _hasBody: response._hasBody,
    _header: response._header,
    _headerSent: response._headerSent,
    statusCode: response.statusCode,
    statusMessage: response.statusMessage
  };
}

module.exports = cleanResponse;
