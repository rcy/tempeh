Util = {
  templateNameFromPath: function (path) {
    var components;
    var name;
    var template;

    if (path) {
      components = _.compact(path.toLowerCase().split('/'));
      name = components[0] + components.slice(1).map(function(part) { return part[0].toUpperCase() + part.slice(1) }).join('');
      template = Template[name];
      if (template) {
        return name;
      }
    } else {
      // we are looking at /
      if (Template['home'])
        return 'home';
      else
        return 'coreHelp';
    }
    console.warn('No <template name="' + name + '">...</template> was found!');
  }
};
