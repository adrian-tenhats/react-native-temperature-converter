import { Text } from 'react-native';
import { s } from "./DisplayTemperature.style";

export function DisplayTemperature({temperature, units}){
    return (        
            <Text style={s.temperatureText}>
                {temperature} {units}
            </Text>
       
    );
}