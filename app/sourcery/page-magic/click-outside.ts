
export const onClickOutside = (element: HTMLElement, event: () => void) => {
    window.addEventListener('click', (e) => {
        // I'm gonna be honest, I'm not totally sure why EventTarget wouldn't inherit Node
        // but it's VERY similar so we're gonna be a little evil and cast it as one.
        const targetNode = e.target as Node;
        if (!element.contains(targetNode)) {
            event();
        }
    });
};
