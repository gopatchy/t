// js/event.js
function waitForEvent(target, eventType) {
  return new Promise((resolve) => {
    function handler(event) {
      target.removeEventListener(eventType, handler);
      resolve(event);
    }
    target.addEventListener(eventType, handler);
  });
}
function waitForAnimationFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(resolve);
  });
}

// js/document.js
async function awaitLoaded() {
  if (document.readyState === "loading") {
    await waitForEvent(document, "DOMContentLoaded");
  }
}
async function addStyle(style) {
  await awaitLoaded();
  addStyleNow(style);
}
function addStyleNow(style) {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(style);
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
}

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
  async waitForShadowQuerySelector(selector) {
    while (this.elem.shadowRoot?.querySelector(selector) === void 0) {
      await waitForAnimationFrame();
    }
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
addStyle(`
.preHighlight {
    transition: color 0.3s ease-out;
}

.highlight {
    color: var(--sl-color-primary-600);
    transition: color 0.1s ease-in;
}
`);

// js/slelem.js
var SLElem = class extends ElemWrapper {
  constructor(tagName) {
    super(document.createElement(tagName));
  }
  async awaitUpdate() {
    await this.elem.updateComplete;
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
  root.style.fontSize = "12px";
  root.style.fontFamily = "var(--sl-font-mono)";
  root.style.display = "flex";
  root.style.flexDirection = "column";
  root.style.alignItems = "center";
  const tabGroup = new SLTabGroup();
  root.append(tabGroup);
  const [tasksTab, tasksPanel] = tabGroup.addTabSet("tasks");
  const tasksIcon = new SLIcon("list-task");
  tasksIcon.style.fontSize = "20px";
  tasksTab.append(tasksIcon);
  const tasksCard = new SLCard();
  tasksPanel.append(tasksCard);
  const tasksInput = new SLInput();
  tasksCard.append(tasksInput);
  tasksInput.setPill();
  const tasksAddIcon = tasksInput.addSuffixIcon("plus-circle");
  const highlighter = new Highlighter(tasksAddIcon);
  tasksAddIcon.style.cursor = "pointer";
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
  const tagsIcon = new SLIcon("tags");
  tagsIcon.style.fontSize = "20px";
  tagsTab.append(tagsIcon);
}
addStyleNow(`
:not(:defined) {
    visibility: hidden;
}
`);
await awaitLoaded();
await main();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vdHMvZXZlbnQudHMiLCAiLi4vdHMvZG9jdW1lbnQudHMiLCAiLi4vdHMvZWxlbXdyYXBwZXIudHMiLCAiLi4vdHMvc2luZ2xldGltZXIudHMiLCAiLi4vdHMvaGlnaGxpZ2h0ZXIudHMiLCAiLi4vdHMvc2xlbGVtLnRzIiwgIi4uL3RzL3NsY2FyZC50cyIsICIuLi90cy9zbGljb24udHMiLCAiLi4vdHMvc2xpbnB1dC50cyIsICIuLi90cy9zbHRhYi50cyIsICIuLi90cy9zbHRhYnBhbmVsLnRzIiwgIi4uL3RzL3NsdGFiZ3JvdXAudHMiLCAiLi4vdHMvbWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXSwKICAibWFwcGluZ3MiOiAiO0FBQU0sU0FBVSxhQUFhLFFBQXFCLFdBQWlCO0FBQy9ELFNBQU8sSUFBSSxRQUFRLENBQUMsWUFBVztBQUMzQixhQUFTLFFBQVEsT0FBWTtBQUN6QixhQUFPLG9CQUFvQixXQUFXLE9BQU87QUFDN0MsY0FBUSxLQUFLO0lBQ2pCO0FBRUEsV0FBTyxpQkFBaUIsV0FBVyxPQUFPO0VBQzlDLENBQUM7QUFDTDtBQUVNLFNBQVUsd0JBQXFCO0FBQ2pDLFNBQU8sSUFBSSxRQUFRLENBQUMsWUFBVztBQUMzQiwwQkFBc0IsT0FBTztFQUNqQyxDQUFDO0FBQ0w7OztBQ2JBLGVBQXNCLGNBQVc7QUFDN0IsTUFBSSxTQUFTLGVBQWUsV0FBVztBQUNuQyxVQUFNLGFBQWEsVUFBVSxrQkFBa0I7RUFDbkQ7QUFDSjtBQUVBLGVBQXNCLFNBQVMsT0FBYTtBQUN4QyxRQUFNLFlBQVc7QUFDakIsY0FBWSxLQUFLO0FBQ3JCO0FBRU0sU0FBVSxZQUFZLE9BQWE7QUFDckMsUUFBTSxRQUFRLElBQUksY0FBYTtBQUMvQixRQUFNLFlBQVksS0FBSztBQUN2QixXQUFTLHFCQUFxQixD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
