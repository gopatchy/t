import { waitForEvent } from "./event";

export async function awaitLoaded() {
    if (document.readyState === "loading") {
        await waitForEvent(document, "DOMContentLoaded");
    }
}

export async function addStyle(style: string) {
    await awaitLoaded();
    addStyleNow(style);
}

export function addStyleNow(style: string) {
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
