import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable, FlatList } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular IMC")
  const [errorMessage, setErrorMessage] = useState(null)
  const [imcList, setImcList] = useState([])

  function imcCalculator() {
    let newHeight = height.replace(',','.')
    let newWeight = weight.replace(',','.')
    let totalImc = (newWeight/(newHeight**2)).toFixed(2)
    setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
    setImc(totalImc)
  }

  function validationImc(){
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é: ")
      setTextButton("Calcular novamente")
      setErrorMessage(null)
      Keyboard.dismiss()
    }
    else {
      setErrorMessage('campo obrigatório*')
      Vibration.vibrate()
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha o peso e altura")
      Keyboard.dismiss()
    }
  }

  return(
    <View style={styles.formContext}>
      {imc == null ? 
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura (m)</Text>
          <Text style={styles.errorLabel}>{errorMessage}</Text>
          <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
          />
          <Text style={styles.formLabel}>Peso (kg)</Text>
          <Text style={styles.errorLabel}>{errorMessage}</Text>
          <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 75.55"
          keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.buttonCalculator} 
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      : 
        <View style={styles.resultImcBox}>
          <ResultImc messageResult={messageImc} resultImc={imc}/>
          <TouchableOpacity
            style={styles.buttonCalculator} 
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      }
      <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.imcList}
      data={imcList.reverse()}
      renderItem={({item}) => {
        return (
          <Text style={styles.listImcItem}>Resultado IMC = {item.imc}</Text>
        )
      }}
      keyExtractor={(item) => {
        item.id
      }}
      ></FlatList>
    </View>
  )
}