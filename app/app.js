import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'emb-lib-finder/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  constructor(){
    super(...arguments);
    this.engines = {
      libraries: {
        dependencies: {
          services: [ 'store' ]
        }
      },
      authors: {
        dependencies: {
          services: [ 'store' ]
        }
      },
      books: {
        dependencies: {
          services: [ 'store', 'shop' ]
        }
      },
      admin: {
        dependencies: {
          services: [ 'store' ]
        }
      }, 
      shop: {
        dependencies: {
          services: ['store', 'shop']
        }
      }
    }
  }
}

loadInitializers(App, config.modulePrefix);
