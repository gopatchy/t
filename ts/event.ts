export function waitForEvent(target: EventTarget, eventType: string) {
    return new Promise((resolve) => {
        function handler(event: Event) {
            target.removeEventListener(eventType, handler);
            resolve(event);
        }

        target.addEventListener(eventType, handler);
    });
}

export function waitForAnimationFrame() {
    return new Promise((resolve) => {
        requestAnimationFrame(resolve);
    });
}
