import { SLElem } from "./slelem";

export class SLTab extends SLElem {
    constructor(panel: string) {
        super("sl-tab");
        this.setAttribute("panel", panel);
        this.setAttribute("slot", "nav");
    }
}