import { waitForAnimationFrame } from "./event";
import { SLElem } from "./slelem";
import { SLIcon } from "./slicon";

export class SLInput extends SLElem {
    constructor() {
        super("sl-input");
    }

    addIcon(name: string, slot: "prefix" | "suffix"): SLIcon {
        const icon = new SLIcon(name);
        icon.setSlot(slot);
        this.append(icon);
        return icon;
    }

    addPrefixIcon(name: string): SLIcon {
        return this.addIcon(name, "prefix");
    }

    addSuffixIcon(name: string): SLIcon {
        return this.addIcon(name, "suffix");
    }

    clear() {
        (this.elem as HTMLInputElement).value = "";
    }

    getValue(): string {
        return (this.elem as HTMLInputElement).value;
    }

    focus() {
        (this.elem as HTMLInputElement).focus();
    }

    setPill() {
        this.setAttribute("pill", "");
    }
}
