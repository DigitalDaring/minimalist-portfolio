'use client'

export const getLinesImg = async () => {
    const ditheringPromise = new Promise<string>((resolve, _reject) => {
        // run outside of main thread
        window.setTimeout(() => {
            const canvas = document.getElementById('lines') as HTMLCanvasElement;
            // I control the vertical, and the horizontal!
            // therefore force non-null cuz I know I added that element :-D
            const context = canvas!.getContext('2d')!;
            context.fillStyle = 'rgba(0,0,0,.6)';
            for (var x = 0; x < 20; x++) {
                for (var y = 4; y < 16; y ++) {
                    if ((y) % 2 === 0) {
                        context.fillRect(x, y, 1, 1);
                    }
                }
            }
            resolve(canvas.toDataURL('image/gif'));
        }, 0);
    });

    return ditheringPromise;
}