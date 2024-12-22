// js/elemwrapper.js
var ElemWrapper = class _ElemWrapper {
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
    return new _ElemWrapper(document.createElement(tagName));
  }
  append(elem) {
    this.appendChild(elem.elem);
  }
  add(name, ...attrs) {
    const elem = _ElemWrapper.create(name);
    this.append(elem);
    for (let i = 0; i < attrs.length; i += 2) {
      elem.setAttribute(attrs[i], attrs[i + 1]);
    }
    return elem;
  }
  setID(id) {
    this.elem.id = id;
  }
};

// js/singletimer.js
var SingleTimer = class {
  callback;
  delay;
  timer;
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
  }
  start() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(this.callback, this.delay);
  }
};

// js/highlighter.js
var Highlighter = class {
  elem;
  timer;
  constructor(elem) {
    this.elem = elem;
    this.elem.classList.add("preHighlight");
    this.timer = new SingleTimer(() => {
      this.elem.classList.remove("highlight");
    }, 1e3);
  }
  highlight() {
    this.elem.classList.add("highlight");
    this.timer.start();
  }
};

// js/slelem.js
var SLElem = class extends ElemWrapper {
  constructor(tagName) {
    super(document.createElement(tagName));
  }
  setSlot(slot) {
    this.setAttribute("slot", slot);
  }
};

// js/slcard.js
var SLCard = class extends SLElem {
  constructor() {
    super("sl-card");
  }
};

// js/slicon.js
var SLIcon = class extends SLElem {
  constructor(name) {
    super("sl-icon");
    this.setAttribute("name", name);
  }
};

// js/slinput.js
var SLInput = class extends SLElem {
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
};

// js/sltab.js
var SLTab = class extends SLElem {
  constructor(panel) {
    super("sl-tab");
    this.setAttribute("panel", panel);
    this.setAttribute("slot", "nav");
  }
};

// js/sltabpanel.js
var SLTabPanel = class extends SLElem {
  constructor(name) {
    super("sl-tab-panel");
    this.setAttribute("name", name);
  }
};

// js/sltabgroup.js
var SLTabGroup = class extends SLElem {
  constructor() {
    super("sl-tab-group");
  }
  addTab(panel) {
    const tab = new SLTab(panel);
    this.append(tab);
    return tab;
  }
  addTabPanel(name) {
    const tabPanel = new SLTabPanel(name);
    this.append(tabPanel);
    return tabPanel;
  }
  addTabSet(name) {
    return [
      this.addTab(name),
      this.addTabPanel(name)
    ];
  }
};

// js/main.js
async function main() {
  const root = new ElemWrapper(document.body);
  const tabGroup = new SLTabGroup();
  root.append(tabGroup);
  const [tasksTab, tasksPanel] = tabGroup.addTabSet("tasks");
  tasksTab.append(new SLIcon("list-task"));
  const tasksCard = new SLCard();
  tasksPanel.append(tasksCard);
  const tasksInput = new SLInput();
  tasksCard.append(tasksInput);
  tasksInput.setPill();
  const tasksAddIcon = tasksInput.addSuffixIcon("plus-circle");
  const highlighter = new Highlighter(tasksAddIcon);
  const addTask = () => {
    const task = tasksInput.getValue();
    if (task.length === 0) {
      return;
    }
    tasksInput.clear();
    tasksInput.focus();
    highlighter.highlight();
  };
  tasksAddIcon.addEventListener("click", () => {
    addTask();
  });
  tasksInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
  const [tagsTab, tagsPanel] = tabGroup.addTabSet("tags");
  tagsTab.append(new SLIcon("tags"));
}
document.addEventListener("DOMContentLoaded", main);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vdHMvZWxlbXdyYXBwZXIudHMiLCAiLi4vdHMvc2luZ2xldGltZXIudHMiLCAiLi4vdHMvaGlnaGxpZ2h0ZXIudHMiLCAiLi4vdHMvc2xlbGVtLnRzIiwgIi4uL3RzL3NsY2FyZC50cyIsICIuLi90cy9zbGljb24udHMiLCAiLi4vdHMvc2xpbnB1dC50cyIsICIuLi90cy9zbHRhYi50cyIsICIuLi90cy9zbHRhYnBhbmVsLnRzIiwgIi4uL3RzL3NsdGFiZ3JvdXAudHMiLCAiLi4vdHMvbWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXSwKICAibWFwcGluZ3MiOiAiO0FBQU0sSUFBTyxjQUFQLE1BQU8sYUFBVztFQUNiO0VBRUE7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFUCxZQUFZLE1BQWlCO0FBQ3pCLFNBQUssT0FBTztBQUVaLFNBQUssUUFBUSxLQUFLLEtBQUs7QUFDdkIsU0FBSyxZQUFZLEtBQUssS0FBSztBQUUzQixTQUFLLG1CQUFtQixLQUFLLEtBQUssaUJBQWlCLEtBQUssS0FBSyxJQUFJO0FBQ2pFLFNBQUssY0FBYyxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssSUFBSTtBQUN2RCxTQUFLLFlBQVksS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLElBQUk7QUFDbkQsU0FBSyxXQUFXLEtBQUssS0FBSyxTQUFTLEtBQUssS0FBSyxJQUFJO0FBQ2pELFNBQUssZ0JBQWdCLEtBQUssS0FBSyxjQUFjLEtBQUssS0FBSyxJQUFJO0FBQzNELFNBQUssbUJBQW1CLEtBQUssS0FBSyxpQkFBaUIsS0FBSyxLQUFLLElBQUk7QUFDakUsU0FBSyxTQUFTLEtBQUssS0FBSyxPQUFPLEtBQUssS0FBSyxJQUFJO0FBQzdDLFNBQUssZUFBZSxLQUFLLEtBQUssYUFBYSxLQUFLLEtB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
