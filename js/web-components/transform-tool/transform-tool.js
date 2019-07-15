import {MainComponent} from '../main-component/main-component.js'
export class TransformTool extends MainComponent {

    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback() {}
}

customElements.define('transform-tool', TransformTool);
