var loopback = require('loopback');
var boot = require('loopback-boot');
//var fs = require('fs');

// Load the necessary modules and middleware for HTTPS
//var http = require('http');
//var https = require('https');

//var privateKey  = fs.readFileSync('./cert/key.pem', 'utf8');
//var certificate = fs.readFileSync('./cert/cert.pem', 'utf8');
//var credentials = {key: privateKey, cert: certificate};

// Get an app server instance from LoopBack
var app = module.exports = loopback();

app.enable('trust proxy')

// -- Add your pre-processing middleware here --
//app.use( function(req, res, next) {
//  if (req.secure) {
//   next();
//  } else {
//    console.log('https://' + req.headers.host + req.url)
//    res.redirect('https://' + req.headers.host + req.url);
//  }
//});

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});



