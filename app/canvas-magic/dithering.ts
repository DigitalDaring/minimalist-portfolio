'use client'

const getDitheringImg = async (targetId: string, size: number, onLoop: (x:number,y:number,context: CanvasRenderingContext2D)=>void) => {
    const ditheringPromise = new Promise<string>((resolve) => {
        // run outside of main thread
        // @ts-ignore:next-line
        if (typeof window !== "undefined") {
            window.setTimeout(() => {
                const canvas = document.getElementById(targetId) as HTMLCanvasElement;
                // I control the vertical, and the horizontal!
                // therefore force non-null cuz I know I added that element :-D
                const context = canvas!.getContext('2d')!;
                context.fillStyle = 'rgba(0,0,0,.6)';
                for (let x = 0; x < size; x++) {
                    for (let y = 0; y < size; y ++) {
                        onLoop(x, y, context);
                    }
                }
                resolve(canvas.toDataURL('image/gif'));
            }, 0);
        }
    });

    return ditheringPromise;
}

export const getDarkDitheringImg = async () => {
    const targetId = 'darkDithering';
    const ditherFunction = (x:number, y: number, context: CanvasRenderingContext2D) => {
        if ((x+y) % 2 === 0) {
            context.fillRect(x, y, 1, 1);
        }
    }

    return getDitheringImg(targetId, 20, ditherFunction);
}


export const getLightDitheringImg = async () => {
    const targetId = 'lightDithering';
    const ditherFunction = (x:number, y: number, context: CanvasRenderingContext2D) => {
        if (((y % 4 === 0) && (x % 4 === 0)) || ((y % 8 === 0) && (x % 8 === 0))) {
            context.fillRect(x, y, 1, 1);
        }
    }

    return getDitheringImg(targetId, 16, ditherFunction);
}

export const getLightDitheringImg2 = async () => {
    const targetId = 'lightDithering2';
    const ditherFunction = (x:number, y: number, context: CanvasRenderingContext2D) => {
        if (x % 2 === 0 && y % 2 === 0) {
            context.fillRect(x, y, 1, 1);
        }
    }

    return getDitheringImg(targetId, 16, ditherFunction);
}

export const getLightDitheringImg3 = async () => {
    const targetId = 'lightDithering';
    const ditherFunction = (x:number, y: number, context: CanvasRenderingContext2D) => {
        const isFourthRow = x % 4 === 0;
        const isFourthCol = y % 4 === 0;
        const isSecondRow = x % 2 === 0 && !isFourthRow;
        const isSecondCol = y % 2 === 0 && !isFourthCol;

        if ((isSecondRow && isFourthCol) || (isFourthRow && isSecondCol)) {
            context.fillRect(x, y, 1, 1);
        }
    }

    return getDitheringImg(targetId, 16, ditherFunction);
}

export const getPlaidDitheringImg = async () => {
    const targetId = 'plaidDithering';
    const ditherFunction = (x:number, y: number, context: CanvasRenderingContext2D) => {
        if ((x % 3 === 0 && y % 2 === 0) || (y % 3 === 0 && x % 2 === 0)) {
            context.fillRect(x, y, 1, 1);
        }
    }

    return getDitheringImg(targetId, 16, ditherFunction);
}