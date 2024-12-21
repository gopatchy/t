"use strict";
async function main() {
    console.log("Hello, world!");
    const root = new ElemWrapper(document.body);
    const tabGroup = root.add("sl-tab-group");
    tabGroup
        .add("sl-tab", "slot", "nav", "panel", "tasks", "active", "")
        .add("sl-icon", "name", "slash-circle", "style", "font-size: 20px");
    tabGroup
        .add("sl-tab", "slot", "nav", "panel", "tags")
        .add("sl-icon", "name", "tags", "style", "font-size: 20px");
}
function add(name, parent, ...attrs) {
    const elem = document.createElement(name);
    parent.appendChild(elem);
    for (let i = 0; i < attrs.length; i += 2) {
        elem.setAttribute(attrs[i], attrs[i + 1]);
    }
    return elem;
}
class ElemWrapper {
    elem;
    constructor(elem) {
        this.elem = elem;
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
document.addEventListener("DOMContentLoaded", main);
