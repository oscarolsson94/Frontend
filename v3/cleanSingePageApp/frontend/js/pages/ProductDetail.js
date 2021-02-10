import Renderer from '../Renderer.js';
import store from '../settings/store.js';

export default Renderer.decorate(class ProductDetail {

  async render() {
    store.products = store.products
      || await $.getJSON('/json/products.json');
    let lookFor = decodeURIComponent(location.hash.split('/').pop());
    let product = store.products.find(product => product.name === lookFor);
    if (!product) {
      return /*html*/`<h1>Tårtan fanns inte! 😢</h>`;
    }
    return /*html*/`
      <article class="product-detail">
        <h1>${product.name}</h1>
        <div>
          <p>${product.description.split('\n').join('</p><p>')}</p>
        </div>
        <img src="/images/products/${product.id}.jpg">
      </article>
    `;
  }

});