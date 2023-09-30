import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import React from 'react';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
  const [expectedNumber, setExpectedNumber] = React.useState(0)
  const [startConfirmed, setStartConfirmed] = React.useState(false)
  const [gameIsOver, setGameIsOver] = React.useState(false)
  const [rounds, setRounds] =React.useState(0)
  const [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function confirmExpectedNumber(number){
    setExpectedNumber(number)
    setStartConfirmed(true)
  }

  function gameOver(gameRounds){
    setGameIsOver(true)
    setStartConfirmed(false)
    setRounds(gameRounds)
  }

  function newGame(){
    setGameIsOver(false)
    setStartConfirmed(false)
  }


  function returnedScreen(){
    if (startConfirmed == true){
      return(
        <GameScreen gameOver={gameOver} confirmedNumber ={expectedNumber} />
      )
    }
    else if(gameIsOver == true){
      return(
        <GameOverScreen newGame={newGame} number={expectedNumber} rounds={rounds} />
      )
    }
    else{
      return(
        <StartGameScreen confirmNumber={confirmExpectedNumber} />
      )
    }
  }
  
  return (
    <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.container}>
        <ImageBackground 
          resizeMode='cover' 
          style={styles.container} 
          imageStyle={styles.backgroundImage}
          source={require('./assets/images/background.png')}>
                
                {returnedScreen()}
        </ImageBackground>
    </LinearGradient>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  backgroundImage: {
    opacity: 0.15,
  },
  text:{
    color: 'white'
  }
});
