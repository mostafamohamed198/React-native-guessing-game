import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
export default function GameOverScreen({ rounds, number, newGame }){
    return(
        <View style={styles.container}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <Text style={styles.summaryText}>you took {rounds} rounds to guess the number {number}</Text>
            </View>
            <PrimaryButton onPress={newGame}> New Game </PrimaryButton>

        </View>
    )
}

const styles ={
    container:{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
      },
    image:{
        width:'100%',
        height: '100%'
    },
    summaryText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
      },
}