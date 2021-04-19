import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL() {
    return `https://api.efhmedia.ga/api/posts.json`; // json dosyanın urli
  }
}
