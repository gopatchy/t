// js/elemwrapper.js
var ElemWrapper = class _ElemWrapper {
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
    return new _ElemWrapper(elem);
  }
};

// js/main.js
async function main() {
  const root = new ElemWrapper(document.body);
  const tabGroup = root.add("sl-tab-group");
  tabGroup.add("sl-tab", "slot", "nav", "panel", "tasks", "active", "").add("sl-icon", "name", "slash-circle", "style", "font-size: 20px");
  tabGroup.add("sl-tab", "slot", "nav", "panel", "tags").add("sl-icon", "name", "tags", "style", "font-size: 20px");
}
document.addEventListener("DOMContentLoaded", main);
