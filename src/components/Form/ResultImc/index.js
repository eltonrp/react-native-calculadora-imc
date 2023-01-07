import { Text, View, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props){

  const onShare = async () => {
    const result = await Share.share({
      message: 'Meu imc está em: ' + props.resultImc
    })
  }

  return (
    <View style={styles.containerResultImc}>
      <View style={styles.boxShareButton}>
      <Text style={styles.resultImc}>{props.messageResult}</Text>
      <Text style={styles.resultImc}>{props.resultImc}</Text>
        <TouchableOpacity style={styles.share}>
          <Text 
          onPress={onShare}
          style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}