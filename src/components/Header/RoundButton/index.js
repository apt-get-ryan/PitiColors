import { TouchableOpacity, StyleSheet } from "react-native";


const RoundButton = (props) => {
    const click = props.onPress;
    const children = props.children;
    return (
        <TouchableOpacity onPress={click}  style={styles.RoundButton}>
            {children}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    RoundButton: {
        backgroundColor: 'red',
        borderRadius: 50,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white'

    }
})
export default RoundButton;