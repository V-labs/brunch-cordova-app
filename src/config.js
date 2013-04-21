exports.config = {
  paths: {
    "public": '../www'
  },
  files: {
    javascripts: {
      defaultExtension: 'js',
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^vendor/,
        'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/,
        'test/javascripts/test-vendor.js': /^test(\/|\\)(?!vendor)/
      },
      order: {
        before: [
          'vendor/scripts/console-helper.js', 
          'vendor/scripts/zepto-1.0.js',
          'vendor/scripts/deferred.js',
          'vendor/scripts/zepto-jquery-support.js',
          'vendor/scripts/underscore-1.4.4.js', 
          'vendor/scripts/backbone-1.0.0.js', 
          'vendor/scripts/backbone-mediator.js', 

          'vendor/scripts/bootstrap/bootstrap-tooltip.js', 
          'vendor/scripts/bootstrap/bootstrap-transition.js', 
          'vendor/scripts/bootstrap/bootstrap-affix.js', 
          'vendor/scripts/bootstrap/bootstrap-alert.js', 
          'vendor/scripts/bootstrap/bootstrap-button.js', 
          'vendor/scripts/bootstrap/bootstrap-carousel.js', 
          'vendor/scripts/bootstrap/bootstrap-collapse.js', 
          'vendor/scripts/bootstrap/bootstrap-dropdown.js', 
          'vendor/scripts/bootstrap/bootstrap-modal.js', 
          'vendor/scripts/bootstrap/bootstrap-popover.js', 
          'vendor/scripts/bootstrap/bootstrap-scrollspy.js', 
          'vendor/scripts/bootstrap/bootstrap-tab.js', 
          'vendor/scripts/bootstrap/bootstrap-typeahed.js'
        ]
      }
    },
    stylesheets: {
      joinTo: 'stylesheets/app.css',
      order: {
        before: [
          'vendor/styles/bootstrap/bootstrap.less',
          'vendor/styles/bootstrap/_responsive.less'
        ]
      }
    },
    templates: {
      defaultExtension: 'hbs',
      joinTo: 'javascripts/app.js'
    }
  }
};