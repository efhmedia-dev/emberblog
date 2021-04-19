import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostRoute extends Route {
  @service store;

  async model(params) {
    try {
      const result = await this.store.findRecord('post', params.post_id.toLowerCase());
      return result;
    } catch (e) {
      this.transitionTo('index');
    }
  }
}
