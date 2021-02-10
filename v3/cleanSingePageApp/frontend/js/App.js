import Renderer from './Renderer.js';
import Header from './page-parts/Header.js';
import Main from './page-parts/Main.js';
import Footer from './page-parts/Footer.js';

export default Renderer.decorate(class App {

  render() {
    return /*html*/`
      <div class="app">
        ${new Header()}
        ${new Main()}
        ${new Footer()}
      </div>
    `;
  }

});