export class ElemWrapper {
    elem;
    constructor(elem) {
        this.elem = elem;
    }
    add(name, ...attrs) {
        const elem = document.createElement(name);
        this.elem.appendChild(elem);
        for (let i = 0; i < attrs.length; i += 2) {
            elem.setAttribute(attrs[i], attrs[i + 1]);
        }
        return new ElemWrapper(elem);
    }
}
