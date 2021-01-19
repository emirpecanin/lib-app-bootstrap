import EmberRouter from '@ember/routing/router';
import config from 'emb-lib-finder/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('contact');
  this.route('about');

  this.mount('admin', { path: '/admin' });
  this.mount('books', { path: '/books' });
  this.mount('authors', { path: '/authors' });
  this.mount('libraries', { path: '/libraries'});
  this.mount('shop', { path: '/shop'});
});
