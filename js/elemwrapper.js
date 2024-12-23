import { waitForAnimationFrame } from "./event";
export class ElemWrapper {
    elem;
    style;
    classList;
    addEventListener;
    appendChild;
    cloneNode;
    contains;
    querySelector;
    querySelectorAll;
    remove;
    setAttribute;
    constructor(elem) {
        this.elem = elem;
        this.style = this.elem.style;
        this.classList = this.elem.classList;
        this.addEventListener = this.elem.addEventListener.bind(this.elem);
        this.appendChild = this.elem.appendChild.bind(this.elem);
        this.cloneNode = this.elem.cloneNode.bind(this.elem);
        this.contains = this.elem.contains.bind(this.elem);
        this.querySelector = this.elem.querySelector.bind(this.elem);
        this.querySelectorAll = this.elem.querySelectorAll.bind(this.elem);
        this.remove = this.elem.remove.bind(this.elem);
        this.setAttribute = this.elem.setAttribute.bind(this.elem);
    }
    static create(tagName) {
        return new ElemWrapper(document.createElement(tagName));
    }
    append(elem) {
        this.appendChild(elem.elem);
    }
    add(name, ...attrs) {
        const elem = ElemWrapper.create(name);
        this.append(elem);
        for (let i = 0; i < attrs.length; i += 2) {
            elem.setAttribute(attrs[i], attrs[i + 1]);
        }
        return elem;
    }
    setID(id) {
        this.elem.id = id;
    }
    async waitForShadowQuerySelector(selector) {
        while (this.elem.shadowRoot?.querySelector(selector) === undefined) {
            await waitForAnimationFrame();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbXdyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9lbGVtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFaEQsTUFBTSxPQUFPLFdBQVc7SUFDYixJQUFJLENBQWM7SUFFbEIsS0FBSyxDQUFzQjtJQUMzQixTQUFTLENBQWU7SUFFeEIsZ0JBQWdCLENBQWdJO0lBQ2hKLFdBQVcsQ0FBdUI7SUFDbEMsU0FBUyxDQUF1QztJQUNoRCxRQUFRLENBQTBCO0lBQ2xDLGFBQWEsQ0FBd0M7SUFDckQsZ0JBQWdCLENBQTZDO0lBQzdELE1BQU0sQ0FBdUI7SUFDN0IsWUFBWSxDQUF3QztJQUUzRCxZQUFZLElBQWlCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBZTtRQUN6QixPQUFPLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQWlCO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBWSxFQUFFLEdBQUcsS0FBZTtRQUNoQyxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxFQUFVO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxLQUFLLENBQUMsMEJBQTBCLENBQUMsUUFBZ0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDakUsTUFBTSxxQkFBcUIsRUFBRSxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO0NBQ0oifQ==