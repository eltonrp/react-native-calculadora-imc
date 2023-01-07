import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    justifyContent:'space-between'
  },
  form: {
    width: '100%',
    heigth: 'auto',
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20
  },
  input: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: '#fff',
    paddingHorizontal: 20
  },
  buttonCalculator: {
    backgroundColor: '#ff0043',
    borderRadius: 50,
    alignItems: 'center',
    width: '90%',
    paddingVertical: 14, 
    marginLeft: 12,
    // margin: 30
  },
  errorLabel: {
    fontSize: 18,
    color: '#ff0043',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  resultImcBox: {
    flex:1,
    justifyContent:'space-around',
    width: '100%'
  },
  imcList: {
    flex:2,
    // flexDirection: "column-reverse"
  },
  listImcItem: {
    fontSize: 28,
    color: '#ff0043'
  }
})

export default styles