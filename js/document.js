import { waitForEvent } from "./event";
export async function awaitLoaded() {
    if (document.readyState === "loading") {
        await waitForEvent(document, "DOMContentLoaded");
    }
}
export async function addStyle(style) {
    await awaitLoaded();
    addStyleNow(style);
}
export function addStyleNow(style) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(style);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
}
export async function awaitCustomElements() {
    await Promise.allSettled([
        customElements.whenDefined("sl-card"),
        customElements.whenDefined("sl-icon"),
        customElements.whenDefined("sl-input"),
        customElements.whenDefined("sl-tab"),
        customElements.whenDefined("sl-tab-group"),
        customElements.whenDefined("sl-tab-panel"),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9kb2N1bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXZDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsV0FBVztJQUM3QixJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDcEMsTUFBTSxZQUFZLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLENBQUMsS0FBSyxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ3hDLE1BQU0sV0FBVyxFQUFFLENBQUM7SUFDcEIsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQWE7SUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNsQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFFLENBQUM7QUFFRCxNQUFNLENBQUMsS0FBSyxVQUFVLG1CQUFtQjtJQUNyQyxNQUFNLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDckIsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDckMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDckMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDdEMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDcEMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDMUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7S0FDN0MsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyJ9