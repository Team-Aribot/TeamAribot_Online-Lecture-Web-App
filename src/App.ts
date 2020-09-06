import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App {
  $target: HTMLDivElement;
  $navigation: Object;
  $header: Object;
  $footer: Object;

  constructor($target: HTMLDivElement) {
    this.$target = $target;

    this.$navigation = new Navigation({
      $target,
    });

    this.$header = new Header({
      $target,
    });

    this.$footer = new Footer({
      $target,
    });
  }
}
