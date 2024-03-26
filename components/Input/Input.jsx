import { Text, TextInput, View } from 'react-native';
import { s } from "./Input.style";
export function Input( {defaultValue}){
    return (
        <View style={s.root}>
            <TextInput 
                style={s.input} 
                maxLength={3} 
                placeHolder="Type temp here"
                defaultValue={defaultValue.toString()} />
            <Text style={s.unit}>C</Text>
        </View>
    );
}