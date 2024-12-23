import { SLElem } from "./slelem";
import { SLIcon } from "./slicon";
export class SLInput extends SLElem {
    constructor() {
        super("sl-input");
    }
    addIcon(name, slot) {
        const icon = new SLIcon(name);
        icon.setSlot(slot);
        this.append(icon);
        return icon;
    }
    addPrefixIcon(name) {
        return this.addIcon(name, "prefix");
    }
    addSuffixIcon(name) {
        return this.addIcon(name, "suffix");
    }
    clear() {
        this.elem.value = "";
    }
    getValue() {
        return this.elem.value;
    }
    focus() {
        this.elem.focus();
    }
    setPill() {
        this.setAttribute("pill", "");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NsaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE1BQU0sT0FBTyxPQUFRLFNBQVEsTUFBTTtJQUMvQjtRQUNJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVksRUFBRSxJQUF5QjtRQUMzQyxNQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELEtBQUs7UUFDQSxJQUFJLENBQUMsSUFBeUIsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBUSxJQUFJLENBQUMsSUFBeUIsQ0FBQyxLQUFLLENBQUM7SUFDakQsQ0FBQztJQUVELEtBQUs7UUFDQSxJQUFJLENBQUMsSUFBeUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDSiJ9