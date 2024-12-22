import { ElemWrapper } from "./elemwrapper";
import { SLTab } from "./sltab";
import { SLTabPanel } from "./sltabpanel";
export class SLTabGroup extends ElemWrapper {
    constructor() {
        super(document.createElement("sl-tab-group"));
    }

    addTab(panel: string): SLTab {
        const tab = new SLTab(panel);
        this.appendAfterLastChild("sl-tab", tab);
        return tab;
    }

    addTabPanel(name: string): SLTabPanel {
        const tabPanel = new SLTabPanel(name);
        this.appendAfterLastChild("sl-tab-panel", tabPanel);
        return tabPanel;
    }

    addTabSet(name: string): [SLTab, SLTabPanel] {
        return [
            this.addTab(name),
            this.addTabPanel(name),
        ];
    }
}