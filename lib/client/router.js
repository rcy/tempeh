Router.configure({
  layoutTemplate: Template['layout'] ? 'layout' : 'coreLayout'
});

Router.map(function () {

  // core pages
  this.route('core', {
    path: '/v',
    template: 'coreHelp'
  });

  // user templates
  this.route('template', {
    path: '/:name(*)',
    before: function () {
      var path = this.params.name;
      var name = Util.templateNameFromPath(path);
      Session.set('page', name);
    },
    action: function () {
      var page = Session.get('page');
      if (page && Template[page]) {
        this.render(page);
      } else {
        this.render(Template['notFound'] && 'notFound' || 'coreNotFound');
      }
    },
    unload: function () {
      Session.set('page');
    }
  });
});
