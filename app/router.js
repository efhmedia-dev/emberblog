import EmberRouter from '@ember/routing/router';
import config from 'efhmedia/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('category', { path: '/category/:category_id'});
  this.route('post', { path: '/post/:post_id'});
  this.route('user',  { path: '/user/:user_id'});
  this.route('404', { path: '/*' });
});
