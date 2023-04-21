import { View, Text, StyleSheet} from "react-native";
import { useContext } from "react";
import Title from "./Title";
import RoundButton from "./RoundButton";
import { ColorContext, ColorProvider } from "../../contexts/ColorProvider";
import ColorModal from "./ColorModal";
const Header = () => {
    const { modalVisibility, setModalVisibility } = useContext(ColorContext);
    return (
        <View style={styles.header}>
            <Title></Title>
            <RoundButton onPress={ () => { setModalVisibility(true)}} >
                <Text style={{color: 'white'}}>+</Text>
            </RoundButton>
            <ColorModal visibility={modalVisibility}/>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0A101A',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Header;