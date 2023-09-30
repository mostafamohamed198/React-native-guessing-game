import { View, Text, StyleSheet, TextInput, Alert, Pressable } from "react-native"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"
import React from "react"
import PrimaryButton from "../components/ui/PrimaryButton"
export default function StartGameScreen({ confirmNumber }){
    const [number, setNumber] = React.useState();

    function resetHandler (){
        setNumber('')
    }

    function confirmHandler(){
        const chosenNumber = parseInt(number);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetHandler }]
              );
        }
        else{
            confirmNumber(number)
        }
        
    }
    return(
        <View style={styles.container}>
            <Title children='Guess My Number'/>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Enter a Number</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setNumber}
                value={number}
                 />
                <View style={styles.pressableContainer}>
                    <PrimaryButton  onPress={resetHandler} >Reset</PrimaryButton>
                    <PrimaryButton  onPress={confirmHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
        flex: 1
    },
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    inputTitle:{
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
    },
    input:{
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        width: 50,
        height: 50,
        marginVertical: 8,
        fontSize: 32,
        color: Colors.accent500,
        fontWeight: 'bold',
    },
    pressableContainer:{
        flexDirection: 'row',
    }, 
    
})