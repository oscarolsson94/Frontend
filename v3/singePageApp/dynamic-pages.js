/* 
  dynamicPages contains methods with names 
  corresponding to hash based urls
  for each of the pages/main content that we
  want to build the html fro by JavaScript
  rather than just loading a html file
*/

let dynamicPages = {

  async products() {
    // Reading the products from a json file
    let data = await $.getJSON('products.json');
    // Loop through the products and build html
    let html = '<main><h2>Våra tårtor</h2>';
    for (let product of data) {
      html += /*html*/`
        <div class="product">
          <h3>${product.name}</h3>
          <p><b>Pris: </b>${product.price}</p>
          <p><b>Räcker till: </b>${product.enoughFor} personer</p>
          <p>${product.description}</p>
        </div>
      `;
    }
    html += '</main>';
    return html;
  }

};