import {SelectorTool} from '../selector-tool/selector-tool.js';
export class BrushSize extends SelectorTool {

    constructor() {
        super();
    } 

    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback() {}
}

customElements.define('brush-size', BrushSize);
