import { ElemWrapper } from "./elemwrapper";
import { SLTabGroup } from "./sltabgroup";

async function main() {
    const root = new ElemWrapper(document.body);

    const tabGroup = new SLTabGroup();
    root.append(tabGroup);

    const [tasksTab, tasksPanel] = tabGroup.addTabSet("tasks");
    
    tasksTab
        .add(
            "sl-icon",
            "name", "slash-circle",
            "style", "font-size: 20px",
        );

    const [tagsTab, tagsPanel] = tabGroup.addTabSet("tags");
    
    tagsTab
        .add(
            "sl-icon",
            "name", "tags",
            "style", "font-size: 20px",
        );
}

document.addEventListener("DOMContentLoaded", main);
