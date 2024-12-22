import { SLElem } from "./slelem";

export class SLIcon extends SLElem {
    constructor(name: string) {
        super("sl-icon");
        this.setAttribute("name", name);
    }
}