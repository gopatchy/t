import { addStyleNow, awaitLoaded } from "./document";
import { ElemWrapper } from "./elemwrapper";
import { Highlighter } from "./highlighter";
import { SLCard } from "./slcard";
import { SLIcon } from "./slicon";
import { SLInput } from "./slinput";
import { SLTabGroup } from "./sltabgroup";

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
        if ((e as KeyboardEvent).key === "Enter") {
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