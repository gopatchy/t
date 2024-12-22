import { ElemWrapper } from "./elemwrapper";
import { SLCard } from "./slcard";
import { SLIcon } from "./slicon";
import { SLInput } from "./slinput";
import { SLTabGroup } from "./sltabgroup";

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
        void tasksAddIcon.elem.offsetWidth; // force reflow
        tasksAddIcon.classList.add("highlight");
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
    tagsTab.append(new SLIcon("tags"));
}

document.addEventListener("DOMContentLoaded", main);
