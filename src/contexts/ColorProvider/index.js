import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



export const ColorContext = createContext();
export const  ColorProvider = ({children}) => {
    const [colors, setColors] = useState([]);

    const [modalVisibility, setModalVisibility] =  useState(false);
    const [currentColor, setCurrentColor]  = useState(null);
    
    
    

    
    useEffect(() => {
        async function getColors() {
            try {
                const jsonColors = await AsyncStorage.getItem('colors');
                setColors(jsonColors != null ? JSON.parse(jsonColors) : []);
            } catch (error) {
                console.error(error);
                return [];
            }
        };
        getColors();
    }, []);
    async function saveColors() {
        try {
          const jsonColors = JSON.stringify(colors);
          await AsyncStorage.setItem('colors', jsonColors);
        } catch (error) {
          console.error(error);
        }
    }
    useEffect(() => {
        saveColors();
    }, [colors]);

    const ContextValue = {
        colors,
        modalVisibility,
        currentColor,
        setColors,
        setModalVisibility,
        setCurrentColor,
        saveColors
    };

    return (
        <ColorContext.Provider value={ContextValue}>
            {children}
        </ColorContext.Provider>
    );
}