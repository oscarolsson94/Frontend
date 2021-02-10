import Renderer from '../Renderer.js';
import store from '../settings/store.js';

export default Renderer.decorate(class ProductList {

  async render() {
    store.products = store.products
      || await $.getJSON('/json/products.json');
    return /*html*/`
      <article>
        <h1>Våra tårtor</h1>
        <p>Klicka på en av våra smarriga tårtor för att få mera information.</p>
        <div class="product-list">
          ${store.products.map(product => `
            <a class="product" href="#cake/${encodeURIComponent(product.name)}">
              <img src="/images/products/${product.id}.jpg">
              <h3>${product.name}</h3>
            </a>
          `).join('')}
        </div>
      </article>
    `;
  }

});