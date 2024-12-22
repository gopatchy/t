// js/elemwrapper.js
var ElemWrapper = class _ElemWrapper {
  elem;
  appendChild;
  setAttribute;
  style;
  classList;
  addEventListener;
  remove;
  cloneNode;
  contains;
  querySelectorAll;
  querySelector;
  constructor(elem) {
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
    this.querySelector = this.elem.querySelector.bind(this.elem);
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
};

// js/slicon.js
var SLIcon = class extends ElemWrapper {
  constructor(name) {
    super(document.createElement("sl-icon"));
    this.setAttribute("name", name);
  }
};

// js/sltab.js
var SLTab = class extends ElemWrapper {
  constructor(panel) {
    super(document.createElement("sl-tab"));
    this.setAttribute("panel", panel);
    this.setAttribute("slot", "nav");
  }
};

// js/sltabpanel.js
var SLTabPanel = class extends ElemWrapper {
  constructor(name) {
    super(document.createElement("sl-tab-panel"));
    this.setAttribute("name", name);
  }
};

// js/sltabgroup.js
var SLTabGroup = class extends ElemWrapper {
  constructor() {
    super(document.createElement("sl-tab-group"));
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
  tasksTab.append(new SLIcon("slash-circle"));
  const [tagsTab, tagsPanel] = tabGroup.addTabSet("tags");
  tagsTab.append(new SLIcon("tags"));
}
document.addEventListener("DOMContentLoaded", main);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vdHMvZWxlbXdyYXBwZXIudHMiLCAiLi4vdHMvc2xpY29uLnRzIiwgIi4uL3RzL3NsdGFiLnRzIiwgIi4uL3RzL3NsdGFicGFuZWwudHMiLCAiLi4vdHMvc2x0YWJncm91cC50cyIsICIuLi90cy9tYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdLAogICJtYXBwaW5ncyI6ICI7QUFBTSxJQUFPLGNBQVAsTUFBTyxhQUFXO0VBQ2I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVQLFlBQVksTUFBaUI7QUFDekIsU0FBSyxPQUFPO0FBQ1osU0FBSyxjQUFjLEtBQUssS0FBSyxZQUFZLEtBQUssS0FBSyxJQUFJO0FBQ3ZELFNBQUssZUFBZSxLQUFLLEtBQUssYUFBYSxLQUFLLEtBQUssSUFBSTtBQUN6RCxTQUFLLFFBQVEsS0FBSyxLQUFLO0FBQ3ZCLFNBQUssWUFBWSxLQUFLLEtBQUs7QUFDM0IsU0FBSyxtQkFBbUIsS0FBSyxLQUFLLGlCQUFpQixLQUFLLEtBQUssSUFBSTtBQUNqRSxTQUFLLFNBQVMsS0FBSyxLQUFLLE9BQU8sS0FBSyxLQUFLLElBQUk7QUFDN0MsU0FBSyxZQUFZLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxJQUFJO0FBQ25ELFNBQUssV0FBVyxLQUFLLEtBQUssU0FBUyxLQUFLLEtBQUssSUFBSTtBQUNqRCxTQUFLLG1CQUFtQixLQUFLLEtBQUssaUJBQWlCLEtBQUssS0FBSyxJQUFJO0FBQ2pFLFNBQUssZ0JBQWdCLEtBQUssS0FBSyxjQUFjLEtBQUssS0FBSyxJQUFJO0VBQy9EO0VBRUEsT0FBTyxPQUFPLFNBQWU7QUFDekIsV0FBTyxJQUFJLGFBQVksU0FBUyxjQUFjLE9BQU8sQ0FBQztFQUMxRDtFQUVBLE9BQU8sTUFBaUI7QUFDcEIsU0FBSyxZQUFZLEtBQUssSUFBSTtFQUM5QjtFQUVBLElBQUksU0FBaUIsT0FBZTtBQUNoQyxVQUFNLE9BQU8sYUFBWSxPQUFPLElBQUk7QUFDcEMsU0FBSyxPQUFPLElBQUk7QUFFaEIsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQ3RDLFdBQUssYUFBYSxNQUFNLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQzVDO0FBRUEsV0FBTztFQUNYOzs7O0FDMUNFLElBQU8sU0FBUCxjQUFzQixZQUFXO0VBQ25DLFlBQVksTUFBWTtBQUNwQixVQUFNLFNBQVMsY0FBYyxTQUFTLENBQUM7QUFDdkMsU0FBSyxhQUFhLFFBQVEsSUFBSTtFQUNsQzs7OztBQ0pFLElBQU8sUUFBUCxjQUFxQixZQUFXO0VBQ2xDLFlBQVksT0FBYTtBQUNyQixVQUFNLFNBQVMsY0FBYyxRQUFRLENBQUM7QUFDdEMsU0FBSyxhQUFhLFNBQVMsS0FBSztBQUNoQyxTQUFLLGFBQWEsUUFBUSxLQUFLO0VBQ25DOzs7O0FDTEUsSUFBTyxhQUFQLGNBQTBCLFlBQVc7RUFDdkMsWUFBWSxNQUFZO0FBQ3BCLFVBQU0sU0FBUyxjQUFjLGNBQWMsQ0FBQztBQUM1QyxTQUFLLGFBQWEsUUFBUSxJQUFJO0VBQ2xDOzs7O0FDSEUsSUFBTyxhQUFQLGNBQTBCLFlBQVc7RUFDdkMsY0FBQTtBQUNJLFVBQU0sU0FBUyxjQUFjLGNBQWMsQ0FBQztFQUNoRDtFQUVBLE9BQU8sT0FBYTtBQUNoQixVQUFNLE1BQU0sSUFBSSxNQUFNLEtBQUs7QUFDM0IsU0FBSyxPQUFPLEdBQUc7QUFDZixXQUFPO0VBQ1g7RUFFQSxZQUFZLE1BQVk7QUFDcEIsVUFBTSxXQUFXLElBQUksV0FBVyxJQUFJO0FBQ3BDLFNBQUssT0FBTyxRQUFRO0FBQ3BCLFdBQU87RUFDWDtFQUVBLFVBQVUsTUFBWTtBQUNsQixXQUFPO01BQ0gsS0FBSyxPQUFPLElBQUk7TUFDaEIsS0FBSyxZQUFZLElBQUk7O0VBRTdCOzs7O0FDckJKLGVBQWUsT0FBSTtBQUNmLFFBQU0sT0FBTyxJQUFJLFlBQVksU0FBUyxJQUFJO0FBRTFDLFFBQU0sV0FBVyxJQUFJLFdBQVU7QUFDL0IsT0FBSyxPQUFPLFFBQVE7QUFFcEIsUUFBTSxDQUFDLFVBQVUsVUFBVSxJQUFJLFNBQVMsVUFBVSxPQUFPO0FBQ3pELFdBQVMsT0FBTyxJQUFJLE9BQU8sY0FBYyxDQUFDO0FBRTFDLFFBQU0sQ0FBQyxTQUFTLFNBQVMsSUFBSSxTQUFTLFVBQVUsTUFBTTtBQUN0RCxVQUFRLE9BQU8sSUFBSSxPQUFPLE1BQU0sQ0FBQztBQUNyQztBQUVBLFNBQVMsaUJBQWlCLG9CQUFvQixJQUFJOyIsCiAgIm5hbWVzIjogW10KfQo=
