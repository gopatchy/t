import { SingleTimer } from "./singletimer";
export class Highlighter {
    elem;
    timer;
    constructor(elem) {
        this.elem = elem;
        this.elem.classList.add("preHighlight");
        this.timer = new SingleTimer(() => {
            this.elem.classList.remove("highlight");
        }, 1000);
    }
    highlight() {
        this.elem.classList.add("highlight");
        this.timer.start();
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
.preHighlight {
    transition: color 0.3s ease-out;
}

.highlight {
    color: var(--sl-color-primary-600);
    transition: color 0.1s ease-in;
}
`);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9oaWdobGlnaHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVDLE1BQU0sT0FBTyxXQUFXO0lBQ1osSUFBSSxDQUFjO0lBQ2xCLEtBQUssQ0FBYztJQUUzQixZQUFZLElBQWlCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLFNBQVM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7SUFDbEMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7Ozs7Ozs7O0NBU3JCLENBQUMsQ0FBQztJQUVDLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFFLENBQUMsQ0FBQyxDQUFDIn0=