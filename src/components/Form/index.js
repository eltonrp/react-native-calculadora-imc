import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular IMC")
  const [errorMessage, setErrorMessage] = useState(null)

  function imcCalculator(weight, height) {
    return setImc((weight/(height**2)).toFixed(2))
  }

  function validationImc(){
    if(weight != null && height != null){
      let newHeight = height
      let newWeight = weight
      if(isNaN(height)){
        newHeight = parseFloat(height.replace(',','.'))
      }
      if(isNaN(weight)){
        newWeight = parseFloat(weight.replace(',','.'))
      }
      imcCalculator(newWeight, newHeight)
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é: ")
      setTextButton("Calcular novamente")
      setErrorMessage(null)
      return
    }
    setErrorMessage('campo obrigatório*')
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
  }

  return(
    <View style={styles.formContext}>
      <View style={styles.form}>
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
        <ResultImc messageResult={messageImc} resultImc={imc}/>
      </View>
    </View>
  )
}