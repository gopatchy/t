import { ElemWrapper } from "./elemwrapper";
async function main() {
    const root = new ElemWrapper(document.body);
    const tabGroup = root.add("sl-tab-group");
    tabGroup
        .add("sl-tab", "slot", "nav", "panel", "tasks", "active", "")
        .add("sl-icon", "name", "slash-circle", "style", "font-size: 20px");
    tabGroup
        .add("sl-tab", "slot", "nav", "panel", "tags")
        .add("sl-icon", "name", "tags", "style", "font-size: 20px");
}
document.addEventListener("DOMContentLoaded", main);
