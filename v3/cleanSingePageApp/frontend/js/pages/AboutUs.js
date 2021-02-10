import Renderer from '../Renderer.js';

export default Renderer.decorate(class AboutUs {

  async render() {
    return /*html*/`
      <article>
        <h1>Om oss</h1>
        ${await $.get('/html-text/lorem2.html')}
      </article>
    `;
  }

});