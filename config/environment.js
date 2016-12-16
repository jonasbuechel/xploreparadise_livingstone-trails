/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'xpp-livingstone-trails',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    
    googleFonts: [
      'Raleway:400,500',
      'Oswald:300,400'
    ],
    
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com"
    },
    
    resizeServiceDefaults: {
      debounceTimeout    : 200,
      heightSensitive    : true,
      widthSensitive     : true,
      injectionFactories : [ 'view', 'component']
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      contactForm:{
        endpoint: 'http://www.xploreparadise.com/php/mail.php'
      }
    },
    "ember-facebook-pixel":{
      id: null
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV["ember-facebook-pixel"] = {
      id: 433599846841570
    };
    
    ENV["rootURL"] = '/the-livingstone-trails/';
  }

  return ENV;
};
