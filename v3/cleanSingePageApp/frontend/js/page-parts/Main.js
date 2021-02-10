import Renderer from '../Renderer.js';
import pages from '../settings/pages.js';
import store from '../settings/store.js';

export default Renderer.decorate(class Main {

  constructor() {
    window.onhashchange = () => this.routeChange(true);
    this.routeChange();
  }

  routeChange(render) {
    this.page = pages.find(page => page.hash === location.hash);
    this.page = this.page || pages.find(page =>
      location.hash.indexOf(page.hashStart) === 0);
    this.page = this.page || pages[0];
    if (render) {
      this.render();
      store.nav.render();
    }
  }

  render() {
    return `
      <main>
        ${this.page.object}
      </main>
    `;
  }

});