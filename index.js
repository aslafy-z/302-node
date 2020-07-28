var http   = require('http');

module.exports = function (opts) {
  var opts = opts || {};
  var ip     = opts.ip     || '0.0.0.0',
      port   = opts.port   || 8080,
      code   = opts.code   || 302,
      target = opts.target || 'https://www.google.com';

  console.log('Starting', code, 'redirect server...');
  http.createServer(handler).listen(port, ip);
  console.log('  Redirecting to:', target);
  console.log('  Listening on:  ', ip + ':' + port);

  function handler (req, res) {
    res.writeHead(code, { Location: target });
    res.end();
  }
}
