import { ElemWrapper } from "./elemwrapper";
import { SingleTimer } from "./singletimer";

export class Highlighter {
    private elem: ElemWrapper;
    private timer: SingleTimer;

    constructor(elem: ElemWrapper) {
        this.elem = elem;
        this.elem.classList.add("preHighlight");

        this.timer = new SingleTimer(() => {
            this.elem.classList.remove("highlight");
        }, 1000);
    }

    public highlight() {
        this.elem.classList.add("highlight");
        this.timer.start();
    }
}