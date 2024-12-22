import { ElemWrapper } from "./elemwrapper";
import { SLTab } from "./sltab";
import { SLTabPanel } from "./sltabpanel";
export class SLTabGroup extends ElemWrapper {
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
            this.addTabPanel(name),
        ];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x0YWJncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NsdGFiZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsTUFBTSxPQUFPLFVBQVcsU0FBUSxXQUFXO0lBQ3ZDO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDaEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBWTtRQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxTQUFTLENBQUMsSUFBWTtRQUNsQixPQUFPO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDekIsQ0FBQztJQUNOLENBQUM7Q0FDSiJ9