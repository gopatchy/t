import { addStyle } from "./document";
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
addStyle(`
.preHighlight {
    transition: color 0.3s ease-out;
}

.highlight {
    color: var(--sl-color-primary-600);
    transition: color 0.1s ease-in;
}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9oaWdobGlnaHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsTUFBTSxPQUFPLFdBQVc7SUFDWixJQUFJLENBQWM7SUFDbEIsS0FBSyxDQUFjO0lBRTNCLFlBQVksSUFBaUI7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU0sU0FBUztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQUVELFFBQVEsQ0FBQzs7Ozs7Ozs7O0NBU1IsQ0FBQyxDQUFDIn0=