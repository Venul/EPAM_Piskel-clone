import {SelectorTool} from '../selector-tool/selector-tool.js';
import {CanvasFrameLayer} from '../canvas-frame-layer/canvas-frame-layer.js';

export class FramesTool extends SelectorTool {
    constructor() {
        super();
    } 

    appendFrame(newFrame) {
        newFrame.setAttribute('class', 'frame');
        newFrame.setAttribute('selectable', '');
    
        this.appendChild(newFrame);
        this.selectedElement = newFrame;
    }

    getFrames() {
        return Array.from(this.querySelectorAll('.frame'));
    }

    getFramesCount() {
        return this.childElementCount;
    }

    getFrameByIndex(index) {
        return this.children[index];
    }

    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback() {}
}

customElements.define('frames-tool', FramesTool);
