import { Modal, View,Text, TextInput, Keyboard, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { useContext, useState, useEffect } from "react";
import { ColorContext, ColorProvider } from "../../../contexts/ColorProvider";

const ColorModal = (props) => {
    const visibility = props.visibility;
    const{ currentColor, setCurrentColor, setModalVisibility, modalVisibility, setColors, colors } = useContext(ColorContext);
    const [colorValue, setColorValue] = useState("");
    const [isKeyboardActive, setIsKeyboardActive] = useState(false);
    const HandleSave = () => {
        if (currentColor == null) {
            if(colors.indexOf(colorValue) === -1)
                setColors(colors.concat(colorValue))
        } else {
            const indexDaCor = colors.indexOf(currentColor);
            colors[indexDaCor] = colorValue;
        }
        setModalVisibility(false);
        setCurrentColor(null);
    }

    const handleDelete = () => {
        const index = colors.indexOf(currentColor);
        if (index != -1) {
            colors.splice(index, 1)
        }
        setModalVisibility(false);
        setCurrentColor(null);
    }
    useEffect(() => {
        if(modalVisibility) {
            setColorValue("");
            let valorDoInput = currentColor == null ? colorValue : currentColor;
            setColorValue(valorDoInput);
        } else  {
            setColorValue("");
        }
    }, [modalVisibility]);
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardActive(true));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardActive(false));
    });
    return (
        
        <Modal animationType="fade" transparent={true} visible={visibility} onRequestClose={() => setModalVisibility(false)}>
            <TouchableWithoutFeedback onPress={() => { if (!isKeyboardActive) setModalVisibility(false); else Keyboard.dismiss(); }}>
                <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback onPress={ () => { if (isKeyboardActive) Keyboard.dismiss() }}>
                        <View style={styles.modalDialog}>
                            <Text style={styles.modalTitle}> { currentColor == null ? "Adicionando" : "Editando" }</Text>
                            <TextInput value={colorValue} placeholder="#fff.." placeholderTextColor="#ddd"
                            onChangeText={ (val) => setColorValue(val)}
                            style={styles.colorTextInput} />
                            <TouchableOpacity onPress={HandleSave} style={styles.modalButtonAdd}>
                                <Text style={styles.modalButtonText}>Adicionar</Text>
                            </TouchableOpacity>
                            { currentColor != null ? 
                                <TouchableOpacity onPress={handleDelete} style={styles.modalButtonRemove}>
                                    <Text style={styles.modalButtonText}>Excluir</Text>
                                </TouchableOpacity>
                            : null}
                        </View>
                    </TouchableWithoutFeedback>                    
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
const styles = {
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 30, .5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    modalDialog: {
        backgroundColor: '#0f1d33',
        borderRadius: 8,
        padding: 8,
        width: '100%',
    },
    modalTitle: {
        color: "white",
        width: "100%",
        marginTop: 10,
        marginBottom: 14,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 900
    },
    colorTextInput: {
        backgroundColor: '#364052',
        borderBottomWidth: 3,
        borderColor: '#ddd',
        lineHeight: 18,
        color: '#ddd',
        textAlign: 'center',
        paddingVertical: 4,
        borderStyle: 'dashed'
    },
    modalButtonAdd: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#28a745',
        paddingVertical: 6,
        borderColor: '#28a745',
        borderRadius: 5,
        borderWidth: 1,
    },
    modalButtonRemove: {
        marginTop: 6,
        width: '100%',
        backgroundColor: '#dc3545',
        paddingVertical: 6,
        borderColor: '#dc3545',
        borderRadius: 5,
        borderWidth: 1,
    },
    modalButtonText: {
        textAlign: 'center',
        color: 'white',
    }
}
export default ColorModal;