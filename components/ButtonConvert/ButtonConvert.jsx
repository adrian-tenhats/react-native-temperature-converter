import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonConvert.style";

export function ButtonConvert({ units, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.buttonText}>Convert to {units} </Text>
    </TouchableOpacity>
  );
}
