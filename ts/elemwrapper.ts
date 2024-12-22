export class ElemWrapper {
    public elem: HTMLElement;
    public appendChild: (node: Node) => void;
    public setAttribute: (name: string, value: string) => void;
    public style: CSSStyleDeclaration;
    public classList: DOMTokenList;
    public addEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined) => void;
    public remove: (node: Node) => void;
    public cloneNode: (deep?: boolean | undefined) => Node;
    public contains: (node: Node) => boolean;
    public querySelectorAll: (selectors: string) => NodeListOf<Element>;
    constructor(elem: HTMLElement) {
        this.elem = elem;
        this.appendChild = this.elem.appendChild.bind(this.elem);
        this.setAttribute = this.elem.setAttribute.bind(this.elem);
        this.style = this.elem.style;
        this.classList = this.elem.classList;
        this.addEventListener = this.elem.addEventListener.bind(this.elem);
        this.remove = this.elem.remove.bind(this.elem);
        this.cloneNode = this.elem.cloneNode.bind(this.elem);
        this.contains = this.elem.contains.bind(this.elem);
        this.querySelectorAll = this.elem.querySelectorAll.bind(this.elem);
    }

    static create(tagName: string) {
        return new ElemWrapper(document.createElement(tagName));
    }
    
    append(elem: ElemWrapper) {
        this.appendChild(elem.elem);
    }

    appendAfterLastChild(tagName: string, elem: ElemWrapper) {
        const children = this.querySelectorAll(tagName);
          
        if (children.length > 0) {
            const lastChild = children[children.length - 1];
            lastChild.after(elem.elem);
        } else {
            this.appendChild(elem.elem);
        }
    }

    add(name: string, ...attrs: string[]): ElemWrapper {
        const elem = ElemWrapper.create(name);
        this.append(elem);

        for (let i = 0; i < attrs.length; i += 2) {
            elem.setAttribute(attrs[i], attrs[i + 1]);
        }

        return elem;
    }
}