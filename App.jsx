import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, ImageBackground } from 'react-native';
import { s } from "./App.style";
import { Input } from "./components/Input/Input"
import hotBackground from "./assets/hot.png"
import coldBackground from "./assets/cold.png"
import { useEffect, useState } from 'react';
import { DisplayTemperature } from './components/DisplayTemperature/DisplayTemperature';
import { UNITS, convertTemperatureTo, getOppositeUnit, isIceTemperature } from './utils/temperature';
import { ButtonConvert } from './components/ButtonConvert/ButtonConvert';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnits, setCurrentUnits] = useState("C");
  const [currentBackground, setCurrentBackground] = useState(coldBackground);
  const oppositeUnit = getOppositeUnit(currentUnits);
  
  useEffect(() => {
    if(isIceTemperature(inputValue, currentUnits)){
      setCurrentBackground(coldBackground);
    } else {
      setCurrentBackground(hotBackground);
    }
  }, [inputValue, currentUnits])

  function getConvertedTemperature() {       
    if(isNaN(inputValue)) {
      return "";
    }else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
    
  }
  return (
   <ImageBackground style={s.backgroundImg} source={currentBackground} >    
    <SafeAreaProvider>
        <SafeAreaView style= {s.root}>
          <View style={s.workspace}>
            <DisplayTemperature 
              units={oppositeUnit} 
              temperature={getConvertedTemperature()}/>
            <Input 
              units={currentUnits}
              onChange={setInputValue} 
              defaultValue={0}
            />
            <ButtonConvert 
              onPress={() => {
                {console.log("oppositeUnit is " + oppositeUnit)}
                setCurrentUnits(oppositeUnit);
              }} 
              units={currentUnits}/>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}


