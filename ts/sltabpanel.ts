import { SLElem } from "./slelem";

export class SLTabPanel extends SLElem {
    constructor(name: string) {
        super("sl-tab-panel");
        this.setAttribute("name", name);
    }
}