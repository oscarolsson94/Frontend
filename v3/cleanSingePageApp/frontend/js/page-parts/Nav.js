import Renderer from '../Renderer.js';
import pages from '../settings/pages.js';
import store from '../settings/store.js';

export default Renderer.decorate(class Nav {

  constructor() {
    store.nav = this;
  }

  render() {
    let active = pages.find(page => page.hash === location.hash);
    active = active || pages.find(page =>
      location.hash.indexOf(page.hashStart) === 0);
    active = active || pages[0];

    return /*html*/`
      <nav>
        <ul>
          ${pages.filter(page => page.nav).map(page => `
            <li ${page === active || page.hash == active.keepNav ? 'class="active"' : ''}>
              <a href="${page.hash}">${page.nav}</a>
            </li>
          `).join('')}
        </ul>
      </nav>
  `;
  }

});