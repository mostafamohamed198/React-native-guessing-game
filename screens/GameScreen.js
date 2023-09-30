import { View, StyleSheet, Text, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from '@expo/vector-icons'
import React from "react";
import GuessItem from "../components/game/GuessItem";

function getRandomNumberInRange(min, max, excludeNumber) {
    let randomInteger;
    do {
        randomInteger = Math.floor(Math.random() * (max - min)) + min;
    } while (randomInteger === excludeNumber);
    return randomInteger;
}

export default function GameScreen({ confirmedNumber, gameOver }){
    const initial = Math.floor(Math.random() * 99) + 1
    const [guessesCount, setGuessesCount] = React.useState(0)
    const [currentGuess, setCurrentGuess] = React.useState(initial)
    const [guesses, setGuesses] = React.useState([initial])
    const [min, setMin] = React.useState(confirmedNumber > initial ? initial : 1)
    const [max, setMax] = React.useState(confirmedNumber > initial ? 100 : initial) 
    
    function handleGuessNewNumber(e){
        const newNumber = getRandomNumberInRange(min, max, currentGuess);
        if (newNumber == confirmedNumber){
            gameOver(guesses.length)
        }
        else{
            if (e == 'plus' && confirmedNumber > currentGuess){
                if (newNumber > confirmedNumber){
                    setMax(newNumber)
                }
                else{
                    setMin(newNumber)
                }
                setCurrentGuess(newNumber)
                setGuessesCount(guessesCount + 1)
                setGuesses((prevGuessRounds) => [  newNumber , ...prevGuessRounds,])
            }
            else if (e == 'minus' && confirmedNumber < currentGuess){
                if (newNumber < confirmedNumber){
                    setMin(newNumber)
                }
                else{
                    setMax(newNumber)
                }
                setCurrentGuess(newNumber)
                setGuessesCount(guessesCount + 1)
                setGuesses((prevGuessRounds) => [  newNumber , ...prevGuessRounds,])
            }
            else{
                Alert.alert("Don't Lie")
            }
        }
        
    }
    const guessRoundsListLength = guesses.length;
    return (
        <View style={styles.container}>
            <Title children='Opponent Guess' />
            <View style={styles.guess}>
                <Text style={styles.guessText}>{currentGuess}</Text>
            </View>
            <View style={styles.newGuessContiner}>
                <Text style={styles.guessTitle}>Higher or Lower</Text>
                <View style={styles.iconsContainer}>
                    <PrimaryButton onPress={() => handleGuessNewNumber('plus')}><Ionicons name="add" /> </PrimaryButton> 
                    <PrimaryButton onPress={() => handleGuessNewNumber('minus')}><Ionicons name="remove" /> </PrimaryButton>
                </View>
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                data={guesses}
                renderItem={(itemData) => {
                    return(
                    <GuessItem
                        roundNumber={guessRoundsListLength - itemData.index}
                        guess={itemData.item}
                      />
                     
                    )
                    

                }}
                keyExtractor={(item) => item.index}
                />
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        flex: 1,
        marginHorizontal: 40,
        
    },
    guess:{
        borderWidth: 2,
        marginTop: 30,
        borderColor: Colors.accent500,
        padding: 40,
        marginHorizontal: 10
    },
    guessText:{
        textAlign: 'center',
        fontSize: 30,
        color: Colors.accent500,
        fontWeight: 'bold'
    },
    iconsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    newGuessContiner:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        // marginHorizontal: 10,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        
    },
    guessTitle:{
        fontSize: 24,
        color: Colors.accent500,
        marginBottom: 10

    },
    listContainer: {
        flex: 1,
        padding: 16,
      },

})