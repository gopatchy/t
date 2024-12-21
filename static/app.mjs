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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vdHMvZWxlbXdyYXBwZXIudHMiLCAiLi4vdHMvbWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsXSwKICAibWFwcGluZ3MiOiAiO0FBQU0sSUFBTyxjQUFQLE1BQU8sYUFBVztFQUNBO0VBQXBCLFlBQW9CLE1BQWlCO0FBQWpCLFNBQUEsT0FBQTtFQUFvQjtFQUV4QyxJQUFJLFNBQWlCLE9BQWU7QUFDaEMsVUFBTSxPQUFPLFNBQVMsY0FBYyxJQUFJO0FBQ3hDLFNBQUssS0FBSyxZQUFZLElBQUk7QUFFMUIsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQ3RDLFdBQUssYUFBYSxNQUFNLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQzVDO0FBRUEsV0FBTyxJQUFJLGFBQVksSUFBSTtFQUMvQjs7OztBQ1ZKLGVBQWUsT0FBSTtBQUNmLFFBQU0sT0FBTyxJQUFJLFlBQVksU0FBUyxJQUFJO0FBQzFDLFFBQU0sV0FBVyxLQUFLLElBQUksY0FBYztBQUV4QyxXQUNLLElBQUksVUFBVSxRQUFRLE9BQU8sU0FBUyxTQUFTLFVBQVUsRUFBRSxFQUMzRCxJQUFJLFdBQVcsUUFBUSxnQkFBZ0IsU0FBUyxpQkFBaUI7QUFFdEUsV0FDSyxJQUFJLFVBQVUsUUFBUSxPQUFPLFNBQVMsTUFBTSxFQUM1QyxJQUFJLFdBQVcsUUFBUSxRQUFRLFNBQVMsaUJBQWlCO0FBQ2xFO0FBR0EsU0FBUyxpQkFBaUIsb0JBQW9CLElBQUk7IiwKICAibmFtZXMiOiBbXQp9Cg==
