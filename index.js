module.exports = {
  name: 'ember-cli-list-view',

  included: function included(app) {
    app.import({
      development: 'vendor/list-view.js',
      production: 'vendor/list-view.min.js'
    });
  }
};
