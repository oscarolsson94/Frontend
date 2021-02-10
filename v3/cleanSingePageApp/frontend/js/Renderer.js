export default class Renderer {

  static idCounter = 1;

  static decorate(_class) {

    Object.assign(_class.prototype, {

      toString() {
        this.renderId = this.renderId || Renderer.idCounter++;
        setTimeout(() => this.render(), 0);
        return `<div render-id="${this.renderId}"></div>`;
      },

      originalRender: _class.prototype.render,

      async render() {
        let rendered = $(await this.originalRender());
        if (rendered.length !== 1) {
          throw 'You must render to ONE root-element!';
        }
        rendered.attr('render-id', this.renderId);
        let oldEl = $(`[render-id="${this.renderId}"`);
        // console.log('Rendering ' + this.constructor.name);
        oldEl.replaceWith(rendered);
      }

    });

    return _class;
  }

}