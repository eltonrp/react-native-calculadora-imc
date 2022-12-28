import { Text, View } from "react-native";
import styles from "./style";

export default function ResultImc(props){
  return (
    <View style={styles.containerResultImc}>
      <Text style={styles.resultImc}>{props.messageResult}</Text>
      <Text style={styles.resultImc}>{props.resultImc}</Text>
    </View>
  )
}