import Component from '@glimmer/component';

export default class FooterComponent extends Component {
  year = new Date().getFullYear();
}
