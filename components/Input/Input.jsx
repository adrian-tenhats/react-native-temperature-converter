import { Text, TextInput, View } from 'react-native';
import { s } from "./Input.style";
export function Input( {defaultValue, onChange, units}){
    return (
        <View style={s.root}>
            <TextInput 
                style={s.input} 
                maxLength={4} 
                placeHolder="Type temp here"
                defaultValue={defaultValue.toString()}
                onChangeText= { (text) => {
                    onChange(text);
                }}
                />
            <Text style={s.unit}>{units}</Text>
        </View>
    );
}