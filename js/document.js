export function whenLoaded(callback) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", callback);
    }
    else {
        callback();
    }
}
export function addStyle(style) {
    whenLoaded(() => {
        addStyleNow(style);
    });
}
export function addStyleNow(style) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(style);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9kb2N1bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsVUFBVSxDQUFDLFFBQW9CO0lBQzNDLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUUsQ0FBQztRQUNwQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQztTQUFNLENBQUM7UUFDSixRQUFRLEVBQUUsQ0FBQztJQUNmLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhO0lBQ2xDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDWixXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFhO0lBQ3JDLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7SUFDbEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixRQUFRLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxRSxDQUFDIn0=