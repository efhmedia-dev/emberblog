import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CategoryRoute extends Route {
  @service store;

  async model(params) {
    const posts = await this.store.findAll('post').then((posts) =>
      posts.filter((post) => {
        return (
          post.get('category').toLowerCase() ===
          params.category_id.toLowerCase()
        );
      })
    );
    if (!posts.length) return this.transitionTo('index');
    return posts;
  }
}