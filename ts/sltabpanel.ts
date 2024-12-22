import { ElemWrapper } from "./elemwrapper";

export class SLTabPanel extends ElemWrapper {
    constructor(name: string) {
        super(document.createElement("sl-tab-panel"));
        this.setAttribute("name", name);
    }
}