import { SLElem } from "./slelem";
import { SLTab } from "./sltab";
import { SLTabPanel } from "./sltabpanel";

export class SLTabGroup extends SLElem {
    constructor() {
        super("sl-tab-group");
    }

    addTab(panel: string): SLTab {
        const tab = new SLTab(panel);
        this.append(tab);
        return tab;
    }

    addTabPanel(name: string): SLTabPanel {
        const tabPanel = new SLTabPanel(name);
        this.append(tabPanel);
        return tabPanel;
    }

    addTabSet(name: string): [SLTab, SLTabPanel] {
        return [
            this.addTab(name),
            this.addTabPanel(name),
        ];
    }
}