Package.describe({
  summary: "Simple site builder"
});

Package.on_use(function (api, where) {
  api.use('iron-router', 'client');
  api.use('templating', 'client');

  api.add_files('lib/client/util.js', 'client');
  api.add_files('lib/client/router.js', 'client');
  api.add_files('lib/client/templates.html', 'client');
});
