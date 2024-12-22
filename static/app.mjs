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
  }
  static create(tagName) {
    return new _ElemWrapper(document.createElement(tagName));
  }
  append(elem) {
    this.appendChild(elem.elem);
  }
  appendAfterLastChild(tagName, elem) {
    const children = this.querySelectorAll(tagName);
    if (children.length > 0) {
      const lastChild = children[children.length - 1];
      lastChild.after(elem.elem);
    } else {
      this.appendChild(elem.elem);
    }
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
    this.appendAfterLastChild("sl-tab", tab);
    return tab;
  }
  addTabPanel(name) {
    const tabPanel = new SLTabPanel(name);
    this.appendAfterLastChild("sl-tab-panel", tabPanel);
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
  tasksTab.add("sl-icon", "name", "slash-circle", "style", "font-size: 20px");
  const [tagsTab, tagsPanel] = tabGroup.addTabSet("tags");
  tagsTab.add("sl-icon", "name", "tags", "style", "font-size: 20px");
}
document.addEventListener("DOMContentLoaded", main);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vdHMvZWxlbXdyYXBwZXIudHMiLCAiLi4vdHMvc2x0YWIudHMiLCAiLi4vdHMvc2x0YWJwYW5lbC50cyIsICIuLi90cy9zbHRhYmdyb3VwLnRzIiwgIi4uL3RzL21haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sCiAgIm1hcHBpbmdzIjogIjtBQUFNLElBQU8sY0FBUCxNQUFPLGFBQVc7RUFDYjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNQLFlBQVksTUFBaUI7QUFDekIsU0FBSyxPQUFPO0FBQ1osU0FBSyxjQUFjLEtBQUssS0FBSyxZQUFZLEtBQUssS0FBSyxJQUFJO0FBQ3ZELFNBQUssZUFBZSxLQUFLLEtBQUssYUFBYSxLQUFLLEtBQUssSUFBSTtBQUN6RCxTQUFLLFFBQVEsS0FBSyxLQUFLO0FBQ3ZCLFNBQUssWUFBWSxLQUFLLEtBQUs7QUFDM0IsU0FBSyxtQkFBbUIsS0FBSyxLQUFLLGlCQUFpQixLQUFLLEtBQUssSUFBSTtBQUNqRSxTQUFLLFNBQVMsS0FBSyxLQUFLLE9BQU8sS0FBSyxLQUFLLElBQUk7QUFDN0MsU0FBSyxZQUFZLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxJQUFJO0FBQ25ELFNBQUssV0FBVyxLQUFLLEtBQUssU0FBUyxLQUFLLEtBQUssSUFBSTtBQUNqRCxTQUFLLG1CQUFtQixLQUFLLEtBQUssaUJBQWlCLEtBQUssS0FBSyxJQUFJO0VBQ3JFO0VBRUEsT0FBTyxPQUFPLFNBQWU7QUFDekIsV0FBTyxJQUFJLGFBQVksU0FBUyxjQUFjLE9BQU8sQ0FBQztFQUMxRDtFQUVBLE9BQU8sTUFBaUI7QUFDcEIsU0FBSyxZQUFZLEtBQUssSUFBSTtFQUM5QjtFQUVBLHFCQUFxQixTQUFpQixNQUFpQjtBQUNuRCxVQUFNLFdBQVcsS0FBSyxpQkFBaUIsT0FBTztBQUU5QyxRQUFJLFNBQVMsU0FBUyxHQUFHO0FBQ3JCLFlBQU0sWUFBWSxTQUFTLFNBQVMsU0FBUyxDQUFDO0FBQzlDLGdCQUFVLE1BQU0sS0FBSyxJQUFJO0lBQzdCLE9BQU87QUFDSCxXQUFLLFlBQVksS0FBSyxJQUFJO0lBQzlCO0VBQ0o7RUFFQSxJQUFJLFNBQWlCLE9BQWU7QUFDaEMsVUFBTSxPQUFPLGFBQVksT0FBTyxJQUFJO0FBQ3BDLFNBQUssT0FBTyxJQUFJO0FBRWhCLGFBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUssR0FBRztBQUN0QyxXQUFLLGFBQWEsTUFBTSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUM1QztBQUVBLFdBQU87RUFDWDs7OztBQ2xERSxJQUFPLFFBQVAsY0FBcUIsWUFBVztFQUNsQyxZQUFZLE9BQWE7QUFDckIsVUFBTSxTQUFTLGNBQWMsUUFBUSxDQUFDO0FBQ3RDLFNBQUssYUFBYSxTQUFTLEtBQUs7QUFDaEMsU0FBSyxhQUFhLFFBQVEsS0FBSztFQUNuQzs7OztBQ0xFLElBQU8sYUFBUCxjQUEwQixZQUFXO0VBQ3ZDLFlBQVksTUFBWTtBQUNwQixVQUFNLFNBQVMsY0FBYyxjQUFjLENBQUM7QUFDNUMsU0FBSyxhQUFhLFFBQVEsSUFBSTtFQUNsQzs7OztBQ0hFLElBQU8sYUFBUCxjQUEwQixZQUFXO0VBQ3ZDLGNBQUE7QUFDSSxVQUFNLFNBQVMsY0FBYyxjQUFjLENBQUM7RUFDaEQ7RUFFQSxPQUFPLE9BQWE7QUFDaEIsVUFBTSxNQUFNLElBQUksTUFBTSxLQUFLO0FBQzNCLFNBQUsscUJBQXFCLFVBQVUsR0FBRztBQUN2QyxXQUFPO0VBQ1g7RUFFQSxZQUFZLE1BQVk7QUFDcEIsVUFBTSxXQUFXLElBQUksV0FBVyxJQUFJO0FBQ3BDLFNBQUsscUJBQXFCLGdCQUFnQixRQUFRO0FBQ2xELFdBQU87RUFDWDtFQUVBLFVBQVUsTUFBWTtBQUNsQixXQUFPO01BQ0gsS0FBSyxPQUFPLElBQUk7TUFDaEIsS0FBSyxZQUFZLElBQUk7O0VBRTdCOzs7O0FDdEJKLGVBQWUsT0FBSTtBQUNmLFFBQU0sT0FBTyxJQUFJLFlBQVksU0FBUyxJQUFJO0FBRTFDLFFBQU0sV0FBVyxJQUFJLFdBQVU7QUFDL0IsT0FBSyxPQUFPLFFBQVE7QUFFcEIsUUFBTSxDQUFDLFVBQVUsVUFBVSxJQUFJLFNBQVMsVUFBVSxPQUFPO0FBRXpELFdBQ0ssSUFDRyxXQUNBLFFBQVEsZ0JBQ1IsU0FBUyxpQkFBaUI7QUFHbEMsUUFBTSxDQUFDLFNBQVMsU0FBUyxJQUFJLFNBQVMsVUFBVSxNQUFNO0FBRXRELFVBQ0ssSUFDRyxXQUNBLFFBQVEsUUFDUixTQUFTLGlCQUFpQjtBQUV0QztBQUVBLFNBQVMsaUJBQWlCLG9CQUFvQixJQUFJOyIsCiAgIm5hbWVzIjogW10KfQo=
