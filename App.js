import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, ImageBackground } from 'react-native';
import { s } from "./App.style";
import { Input } from "./components/Input/Input"
import hotBackground from "./assets/hot.png"

export default function App() {
  return (
   <ImageBackground style={s.backgroundImg} source={hotBackground} >    
    <SafeAreaProvider>
        <SafeAreaView style= {s.root}>
          <View style={s.workspace}>
            <Text>Temperature</Text>
            <Input defaultValue={0}/>
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}


