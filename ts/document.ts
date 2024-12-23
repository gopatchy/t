export function whenLoaded(callback: () => void) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", callback);
    } else {
        callback();
    }
}

export function addStyle(style: string) {
    whenLoaded(() => {
        addStyleNow(style);
    });
}

export function addStyleNow(style: string) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(style);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
}
