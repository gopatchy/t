export class SingleTimer {
    callback;
    delay;
    timer;
    constructor(callback, delay) {
        this.callback = callback;
        this.delay = delay;
    }
    start() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(this.callback, this.delay);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xldGltZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zaW5nbGV0aW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sV0FBVztJQUNaLFFBQVEsQ0FBYTtJQUNyQixLQUFLLENBQVM7SUFDZCxLQUFLLENBQXFCO0lBRWxDLFlBQVksUUFBb0IsRUFBRSxLQUFhO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxLQUFLO1FBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0oifQ==