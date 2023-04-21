import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { ColorContext } from "../../../contexts/ColorProvider";

export default function ColorBox (props) {
    const hexColor = props.hexColor;
    const { currentColor, setCurrentColor} = useContext(ColorContext);
    const borerColorHandler = currentColor == hexColor ? "red" : "transparent";
    const styles = StyleSheet.create({
        containerBox: {
            padding: 5,
            backgroundColor: 'rgba(20,20,20,.45)',
            borderColor: borerColorHandler,
            borderWidth: 1,
            borderRadius: 14,
            overflow: 'hidden',
            flexBasis: '31%'
        },
        colorBox: {
            width: '100%',
            aspectRatio: 1,
            backgroundColor: hexColor,
            borderRadius: 10
        },
        colorText: {
            color: '#fff',
            fontSize: 20,
            textAlign: "center"
        }
    })
    const handlePress = (cc) => {
        if(currentColor == cc) {
            setCurrentColor(null);
        }
        else {
            setCurrentColor(cc);
        }
    }
    return (
        <TouchableOpacity style={styles.containerBox} onPress={ () => handlePress(hexColor)}>
            <View style={styles.colorBox}>

            </View>
            <Text style={styles.colorText}>{hexColor}</Text>
        </TouchableOpacity>
    )
    
}

