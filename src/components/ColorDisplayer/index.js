import { View, Text, StyleSheet} from "react-native";
import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorProvider";
import ColorBox from "./ColorBox";
const ColorDisplayer = () => {
    const { colors } = useContext(ColorContext);
    return (
        <View style={styles.colorDisplayer}>
            {colors.map( (color, i) => {
                return <ColorBox key={i} hexColor={color} onPress={ () => console.log("aa")}/>
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    colorDisplayer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 7,
        gap: 4,
        rowGap: 8,
        marginHorizontal: 'auto',

    }
})

export default ColorDisplayer;