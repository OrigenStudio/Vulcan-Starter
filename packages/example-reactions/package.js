Package.describe({
  name: 'example-reactions',
});

Package.onUse(function (api) {

  api.use([

    'promise',

    // vulcan core
    'vulcan:core@1.9.0',

    // vulcan packages
    'vulcan:voting@1.9.0',
    'vulcan:forms@1.9.0',
    'vulcan:accounts@1.9.0',
    
  ]);

  api.addFiles('lib/stylesheets/style.css');
  
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
