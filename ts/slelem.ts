import { ElemWrapper } from "./elemwrapper";

export class SLElem extends ElemWrapper {
    constructor(tagName: string) {
        super(document.createElement(tagName));
    }

    public setSlot(slot: string) {
        this.setAttribute("slot", slot);
    }
}