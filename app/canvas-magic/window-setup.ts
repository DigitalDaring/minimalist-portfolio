const setupWindowBackgrounds = () => {
    if (typeof window !== 'undefined') {
        window.backgrounds = window.backgrounds || {
            dithered1: '',
            dithered2: '',
            dithered3: '',
            dithered4: '',
            lines: '',
            spriteSheet: '',
            sheetMusic: ''
        };
        window.icons = window.icons || {
            folder: ''
        };
    }
}

export default setupWindowBackgrounds;