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
  const addTask = () => {
    const task = tasksInput.getValue();
    if (task.length === 0) {
      return;
    }
    tasksInput.clear();
    tasksInput.focus();
    tasksAddIcon.classList.remove("highlight");
    void tasksAddIcon.elem.offsetWidth;
    tasksAddIcon.classList.add("highlight");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vdHMvZWxlbXdyYXBwZXIudHMiLCAiLi4vdHMvc2xlbGVtLnRzIiwgIi4uL3RzL3NsY2FyZC50cyIsICIuLi90cy9zbGljb24udHMiLCAiLi4vdHMvc2xpbnB1dC50cyIsICIuLi90cy9zbHRhYi50cyIsICIuLi90cy9zbHRhYnBhbmVsLnRzIiwgIi4uL3RzL3NsdGFiZ3JvdXAudHMiLCAiLi4vdHMvbWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXSwKICAibWFwcGluZ3MiOiAiO0FBQU0sSUFBTyxjQUFQLE1BQU8sYUFBVztFQUNiO0VBRUE7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFUCxZQUFZLE1BQWlCO0FBQ3pCLFNBQUssT0FBTztBQUVaLFNBQUssUUFBUSxLQUFLLEtBQUs7QUFDdkIsU0FBSyxZQUFZLEtBQUssS0FBSztBQUUzQixTQUFLLG1CQUFtQixLQUFLLEtBQUssaUJBQWlCLEtBQUssS0FBSyxJQUFJO0FBQ2pFLFNBQUssY0FBYyxLQUFLLEtBQUssWUFBWSxLQUFLLEtBQUssSUFBSTtBQUN2RCxTQUFLLFlBQVksS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLElBQUk7QUFDbkQsU0FBSyxXQUFXLEtBQUssS0FBSyxTQUFTLEtBQUssS0FBSyxJQUFJO0FBQ2pELFNBQUssZ0JBQWdCLEtBQUssS0FBSyxjQUFjLEtBQUssS0FBSyxJQUFJO0FBQzNELFNBQUssbUJBQW1CLEtBQUssS0FBSyxpQkFBaUIsS0FBSyxLQUFLLElBQUk7QUFDakUsU0FBSyxTQUFTLEtBQUssS0FBSyxPQUFPLEtBQUssS0FBSyxJQUFJO0FBQzdDLFNBQUssZUFBZSxLQUFLLEtBQUssYUFBYSxLQUFLLEtBQUssSUFBSTtFQUM3RDtFQUVBLE9BQU8sT0FBTyxTQUFlO0FBQ3pCLFdBQU8sSUFBSSxhQUFZLFNBQVMs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
