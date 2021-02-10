import Renderer from '../Renderer.js';

export default Renderer.decorate(class Footer {

  render() {
    return /*html*/`
      <footer>
        Single Page Application Example
        ${'&nbsp;'.repeat(10)}© Node Hill 2021
        ${'&nbsp;'.repeat(10)}Thomas Frank
      </footer>
    `;
  }

});