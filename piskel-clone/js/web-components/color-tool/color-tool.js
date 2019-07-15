import {SelectorTool} from '../selector-tool/selector-tool.js';
export class ColorTool extends SelectorTool {

    constructor() {
        super();
    } 

    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback() {}
}

customElements.define('color-tool', ColorTool);
