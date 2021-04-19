import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserRoute extends Route {
  @service store;

  async model(params) {
    const posts = await this.store.findAll('post')
      .then((posts) => posts.filter((post) => {
        return post.get("owner").toLowerCase() === params.user_id.toLowerCase()
      }))
    if (!posts.length) this.transitionTo('index');
    posts.user = params.user_id;
    return posts;
  }
}
