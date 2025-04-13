import { createContext, useContext } from 'react';

export type PortfolioContext = {
    spriteSheet?: string
}

export const PageContext = createContext<PortfolioContext>({
    spriteSheet: undefined
});

  
