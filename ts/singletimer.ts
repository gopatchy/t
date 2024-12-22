export class SingleTimer {
    private callback: () => void;
    private delay: number;
    private timer: number | undefined;

    constructor(callback: () => void, delay: number) {
        this.callback = callback;
        this.delay = delay;
    }

    public start() {
        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.timer = setTimeout(this.callback, this.delay);
    }
}