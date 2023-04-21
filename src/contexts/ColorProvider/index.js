import { createContext, useState } from "react";


export const ColorContext = createContext();
export const  ColorProvider = ({children}) => {
    const [colors, setColors] = useState([]);
    const [modalVisibility, setModalVisibility] =  useState(false);
    const [currentColor, setCurrentColor]  = useState(null);
    const ContextValue = {
        colors,
        modalVisibility,
        setColors,
        setModalVisibility,
        currentColor,
        setCurrentColor
    };

    return (
        <ColorContext.Provider value={ContextValue}>
            {children}
        </ColorContext.Provider>
    );
}