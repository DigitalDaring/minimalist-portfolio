'use client'

import setupWindowBackgrounds from './window-setup';

export enum BACKGROUND_IMG_NAME {
    dithered1 = 'dithered1',
    dithered2 = 'dithered2',
    dithered3 = 'dithered3',
    dithered4 = 'dithered4'
};

const getDitheringImg = async (backgroundImgName: BACKGROUND_IMG_NAME, targetId: string, size: number, onLoop: (x:number,y:number,context: CanvasRenderingContext2D)=>void) => {
    setupWindowBackgrounds();
    const ditheringPromise = new Promise<string>((resolve) => {
        // run outside of main thread
        // @ts-ignore:next-line
        if (typeof window !== "undefined") {
            if (window.backgrounds[backgroundImgName] && window.backgrounds[backgroundImgName] !== '') {
                resolve(window.backgrounds[backgroundImgName]);
            } else {
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
                    const img = canvas.toDataURL('image/gif');
                    window.backgrounds[backgroundImgName] = img;
                    resolve(img);
                }, 0);
            }
        }
    });

    return ditheringPromise;
}

export const getDitheringImg1 = async () => {
    const targetId = 'dithering1';
    const ditherFunction = (x:number, y: number, context: CanvasRenderingContext2D) => {
        if ((x+y) % 2 === 0) {
            context.fillRect(x, y, 1, 1);
        }
    }

    return getDitheringImg(BACKGROUND_IMG_NAME.dithered1, targetId, 20, ditherFunction);
}


export const getDitheringImg2 = async () => {
    const targetId = 'dithering2';
    const ditherFunction = (x:number, y: number, context: CanvasRenderingContext2D) => {
        if (((y % 4 === 0) && (x % 4 === 0)) || ((y % 8 === 0) && (x % 8 === 0))) {
            context.fillRect(x, y, 1, 1);
        }
    }

    return getDitheringImg(BACKGROUND_IMG_NAME.dithered2, targetId, 16, ditherFunction);
}

export const getDitheringImg3 = async () => {
    const targetId = 'dithering3';
    const ditherFunction = (x:number, y: number, context: CanvasRenderingContext2D) => {
        if (x % 2 === 0 && y % 2 === 0) {
            context.fillRect(x, y, 1, 1);
        }
    }

    return getDitheringImg(BACKGROUND_IMG_NAME.dithered3, targetId, 16, ditherFunction);
}

export const getDitheringImg4 = async () => {
    const targetId = 'dithering4';
    const ditherFunction = (x:number, y: number, context: CanvasRenderingContext2D) => {
        const isFourthRow = x % 4 === 0;
        const isFourthCol = y % 4 === 0;
        const isSecondRow = x % 2 === 0 && !isFourthRow;
        const isSecondCol = y % 2 === 0 && !isFourthCol;

        if ((isSecondRow && isFourthCol) || (isFourthRow && isSecondCol)) {
            context.fillRect(x, y, 1, 1);
        }
    }

    return getDitheringImg(BACKGROUND_IMG_NAME.dithered4, targetId, 16, ditherFunction);
}
