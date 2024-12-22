import { ElemWrapper } from "./elemwrapper";

export class SLIcon extends ElemWrapper {
    constructor(name: string) {
        super(document.createElement("sl-icon"));
        this.setAttribute("name", name);
    }
}