import { ElemWrapper } from "./elemwrapper";
export class SLElem extends ElemWrapper {
    constructor(tagName) {
        super(document.createElement(tagName));
    }
    async awaitUpdate() {
        await this.elem.updateComplete;
    }
    setSlot(slot) {
        this.setAttribute("slot", slot);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xlbGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc2xlbGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNNUMsTUFBTSxPQUFPLE1BQU8sU0FBUSxXQUFXO0lBQ25DLFlBQVksT0FBZTtRQUN2QixLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxLQUFLLENBQUMsV0FBVztRQUNwQixNQUFPLElBQUksQ0FBQyxJQUFtQixDQUFDLGNBQWMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQVk7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNKIn0=