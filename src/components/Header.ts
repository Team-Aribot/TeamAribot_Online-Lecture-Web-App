type Props = {
  $target: HTMLDivElement;
};

export default class Header {
  $header: HTMLElement;

  constructor({ $target }: Props) {
    const $header = document.createElement('header');
    this.$header = $header;
    $header.innerHTML = '<h1>This area will be img-slider</h1>';
    $target.appendChild($header);
  }

  render() {}
}
