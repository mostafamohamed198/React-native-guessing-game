import { Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
export default function PrimaryButton({ children, onPress }){
    return(
        <Pressable onPress={onPress}  style={({ pressed }) => pressed ? [styles.pressable, styles.pressed] : styles.pressable}>
            <Text style={styles.pressableText}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: Colors.primary500,
        marginHorizontal: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 8,
        borderRadius: 28 ,
        width: 130
    }, 
    pressableText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    }, 
    pressed:{
        opacity: 0.7
    }
})