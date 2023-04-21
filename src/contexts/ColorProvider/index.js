import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



export const ColorContext = createContext();
export const  ColorProvider = ({children}) => {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        saveColors(colors);
      }, [colors]);
    const [modalVisibility, setModalVisibility] =  useState(false);
    const [currentColor, setCurrentColor]  = useState(null);

    const saveColors = async (colors) => {
        try {
            const jsonColors = JSON.stringify(colors);
            console.log(jsonColors)
            await AsyncStorage.setItem('colors', jsonColors);
        } catch (error) {
            console.error(error);
        }
    };
    const getColors = async () => {
        try {
            const jsonColors = await AsyncStorage.getItem('colors');
            return jsonColors != null ? JSON.parse(jsonColors) : [];
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    
    useEffect(() => {
        getColors().then((storedColors) => {
            setColors(storedColors);
        });
    }, []);
    


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