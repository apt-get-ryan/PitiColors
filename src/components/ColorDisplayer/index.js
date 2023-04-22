import { View, Text, StyleSheet} from "react-native";
import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorProvider";
import ColorBox from "./ColorBox";
const ColorDisplayer = () => {
    const { colors } = useContext(ColorContext);

    const styles = StyleSheet.create({
        colorDisplayer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: colors.length <= 2 ? "center" : "space-between",
            alignItems: 'flex-start',
            alignContent: "flex-start",
            padding: 7,
            gap: 4,
            rowGap: 8,
            marginHorizontal: 'auto',
    
        }
    })
    return (
        <View style={styles.colorDisplayer}>
            {colors.map( (color, i) => {
                return <ColorBox key={i} hexColor={color} onPress={ () => console.log("aa")}/>
            })}
        </View>
    )
}


export default ColorDisplayer;