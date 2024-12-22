import { ElemWrapper } from "./elemwrapper";

export class SLTab extends ElemWrapper {
    constructor(panel: string) {
        super(document.createElement("sl-tab"));
        this.setAttribute("panel", panel);
        this.setAttribute("slot", "nav");
    }
}