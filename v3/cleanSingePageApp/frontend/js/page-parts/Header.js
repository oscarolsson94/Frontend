import Renderer from '../Renderer.js';
import Nav from './Nav.js';

export default Renderer.decorate(class Header {

  render() {
    return /*html*/`
      <header>
        <div>
          <h1>SPA Example</h1>
          ${new Nav()}
        </div>
      </header>
  `;
  }

});