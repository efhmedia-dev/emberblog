import Component from '@glimmer/component';

export default class PostsFilterComponent extends Component {
  get results() {
    let { posts, query } = this.args;
    let _posts = posts;

    if (query) {
      _posts = [];
      posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      ).map(post => !_posts.includes(post) ? _posts.push(post) : post);
      posts.filter((post) =>
        post.content.toLowerCase().includes(query.toLowerCase())
      ).map(post => !_posts.includes(post) ? _posts.push(post) : post);
    }

    return _posts;
  }
}
