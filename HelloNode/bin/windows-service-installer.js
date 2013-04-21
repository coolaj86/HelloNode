var Service = require('node-windows').Service
  , path = require('path')
  , whattodo = process.argv[2]
  ;

console.log(__dirname);

// Create a new service object
var svc = new Service({
  name:'HelloNode',
  description: 'An installable node service',
  script: path.join(__dirname, 'server.js')
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
  console.log('install complete');
  svc.start();
});

svc.on('uninstall', function () {
  console.log('uninstall complete');
});

svc.on('alreadyinstalled', function () {
  console.log('alreadyinstalled');
  svc.start();
});

svc.on('invalidinstallation', function () {
  console.log('alreadyinstalled');
});

svc.on('start', function () {
  console.log('start');
});

svc.on('stop', function () {
  console.log('stop');
});

svc.on('error', function (err) {
  console.log('error', err);
});

if (!whattodo) {
  return;
} else if ('install' === whattodo) {
  svc.install();
} else if ('uninstall' === whattodo || 'remove' === whattodo) {
  svc.uninstall();
}
