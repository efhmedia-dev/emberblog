import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexComponent extends Component {
  @service store;

  model = this.store.findAll('post');

  @tracked query;

  @action updateIt(event) {
    this.query = event.target.value;
  }
}
