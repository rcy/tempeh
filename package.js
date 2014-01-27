Package.describe({
  summary: "Simple site builder based on iron-router"
});

Package.on_use(function (api, where) {
  api.use('iron-router', 'client');
  api.use('templating', 'client');

  api.add_files('lib/client/util.js', 'client');
  api.add_files('lib/client/router.js', 'client');
  api.add_files('lib/client/templates.html', 'client');
});

// Package.on_test(function (api, where) {
//   api.use(['tinytest', 'test-helpers'], ['client', 'server']);
//   // api.add_files([''], ['client', 'server']);
//   // api.export([''], ['client', 'server']);
// });
