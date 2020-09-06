type Props = {
  $target: HTMLDivElement;
};

export default class Footer {
  $footer: HTMLElement;

  constructor({ $target }: Props) {
    const $footer = document.createElement('footer');
    this.$footer = $footer;
    $footer.innerHTML = `
      <div class="logo footer" id="logo-footer">📽</div>
      <p>© ${new Date().getFullYear()} Team-Aribot, Inc.</p>
    `;

    $target.appendChild($footer);
  }

  render() {}
}
