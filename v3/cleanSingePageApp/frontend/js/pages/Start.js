import Renderer from '../Renderer.js';

export default Renderer.decorate(class Start {

  async render() {
    return /*html*/`
      <article>
        <h1>Välkommen!</h1>
        ${await $.get('/html-text/lorem.html')}
      </article>
    `;
  }

});