'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'emb-lib-finder',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }, 
    // ...
    firebase: {
      apiKey: "AIzaSyDo5zUuxkOoghdggYfN0gUeLgjXwspV7GI",
      authDomain: "libraryfinder-f16fd.firebaseapp.com",
      databaseURL: "https://libraryfinder-f16fd-default-rtdb.europe-west1.firebasedatabase.app/",
      projectId: "libraryfinder-f16fd",
      storageBucket: "libraryfinder-f16fd.appspot.com",
      messagingSenderId: "792441439008",
      appId: "1:792441439008:web:c2d60b0f889bc9b291cd45",
      measurementId: "G-WQ73RQX9MB"
    },


    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

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
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
