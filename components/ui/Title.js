import { View, Text, StyleSheet } from "react-native";
export default function Title({ children }){
    return(
        <Text style={styles.titleText}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    }
})