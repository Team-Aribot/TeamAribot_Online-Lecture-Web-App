type Props = {
  $target: HTMLDivElement;
};

export default class Navigation {
  $navigation: HTMLElement;

  constructor({ $target }: Props) {
    const $navigation = document.createElement('nav') as HTMLElement;
    this.$navigation = $navigation;
    this.$navigation.innerHTML = `
      <div class="logo navigation">📽</div>
      <input class="input search" id="nav-search" placeholder="Search term"></input>
      <ul>
        <li>My Lectures</li>
        <li>Log Out</li>
      </ul>
    `;
    $target.appendChild($navigation);
  }

  render() {}
}
