import { SLElem } from "./slelem";
import { SLIcon } from "./slicon";

export class SLInput extends SLElem {
    constructor() {
        super("sl-input");
    }

    public addIcon(name: string, slot: "prefix" | "suffix"): SLIcon {
        const icon = new SLIcon(name);
        icon.setSlot(slot);
        this.append(icon);
        return icon;
    }

    public addPrefixIcon(name: string): SLIcon {
        return this.addIcon(name, "prefix");
    }

    public addSuffixIcon(name: string): SLIcon {
        return this.addIcon(name, "suffix");
    }

    public clear() {
        (this.elem as HTMLInputElement).value = "";
    }

    public getValue(): string {
        return (this.elem as HTMLInputElement).value;
    }

    public focus() {
        (this.elem as HTMLInputElement).focus();
    }

    public setPill() {
        this.setAttribute("pill", "");
    }
}