import { View, Text, StyleSheet} from "react-native";

const Title = (props) => {
    const style = props.style;
    return (
        <View>
            <Text style={styles.title}>Piti<Text style={styles.colors}>Colors</Text></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
    },
    colors: {
        color: 'red',
        letterSpacing: 1
    }
})
export default Title;