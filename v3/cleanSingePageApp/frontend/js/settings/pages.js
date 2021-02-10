import Start from '../pages/Start.js';
import AboutUs from '../pages/AboutUs.js';
import ProductList from '../pages/ProductList.js';
import ProductDetail from '../pages/ProductDetail.js';

export default [
  { hash: '#start', nav: 'Start', object: new Start() },
  { hash: '#about-us', nav: 'Om oss', object: new AboutUs() },
  { hash: '#cakes', nav: 'Våra tårtor', object: new ProductList() },
  { hashStart: '#cake/', keepNav: '#cakes', object: new ProductDetail() }
];