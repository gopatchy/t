import { ElemWrapper } from "./elemwrapper";

interface SLBaseElem extends HTMLElement {
    updateComplete: Promise<void>;
}

export class SLElem extends ElemWrapper {
    constructor(tagName: string) {
        super(document.createElement(tagName));
    }

    public async awaitUpdate() {
        await (this.elem as SLBaseElem).updateComplete;
    }

    public setSlot(slot: string) {
        this.setAttribute("slot", slot);
    }
}