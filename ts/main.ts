import { ElemWrapper } from "./elemwrapper";
import { SLIcon } from "./slicon";
import { SLTabGroup } from "./sltabgroup";

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
