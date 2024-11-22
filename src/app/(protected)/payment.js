import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Payments() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState([
    [{
      "id": 1,
      "nome": "Malynda Ceney"
    }, {
      "id": 2,
      "nome": "Matilda Grint"
    }, {
      "id": 3,
      "nome": "Saw Klemps"
    }, {
      "id": 4,
      "nome": "Florida Janauschek"
    }, {
      "id": 5,
      "nome": "Mattheus Slainey"
    }, {
      "id": 6,
      "nome": "Bathsheba Thomasset"
    }, {
      "id": 7,
      "nome": "Gerek Sycamore"
    }, {
      "id": 8,
      "nome": "Emalee Grayshon"
    }, {
      "id": 9,
      "nome": "Brad Smalman"
    }, {
      "id": 10,
      "nome": "Dell Melling"
    }, {
      "id": 11,
      "nome": "August Cuerda"
    }, {
      "id": 12,
      "nome": "Lorie Yuill"
    }, {
      "id": 13,
      "nome": "Jess Cleeves"
    }, {
      "id": 14,
      "nome": "Justen Gillott"
    }, {
      "id": 15,
      "nome": "Therine Belloch"
    }, {
      "id": 16,
      "nome": "Rocky Peckitt"
    }, {
      "id": 17,
      "nome": "Perry Curnock"
    }, {
      "id": 18,
      "nome": "Ceciley Fahy"
    }, {
      "id": 19,
      "nome": "Wernher Bault"
    }, {
      "id": 20,
      "nome": "Juanita Fairfull"
    }, {
      "id": 21,
      "nome": "Lombard Powis"
    }, {
      "id": 22,
      "nome": "Nance Graeser"
    }, {
      "id": 23,
      "nome": "Denney Mussilli"
    }, {
      "id": 24,
      "nome": "Jacky Admans"
    }, {
      "id": 25,
      "nome": "Delilah MacKerley"
    }, {
      "id": 26,
      "nome": "Cart Brockley"
    }, {
      "id": 27,
      "nome": "Christie Readman"
    }, {
      "id": 28,
      "nome": "Krystyna Deacon"
    }, {
      "id": 29,
      "nome": "Dede Stuck"
    }, {
      "id": 30,
      "nome": "Tye Gulley"
    }, {
      "id": 31,
      "nome": "Arlyne Caplis"
    }, {
      "id": 32,
      "nome": "Antoinette Sinderson"
    }, {
      "id": 33,
      "nome": "Lauryn Dryden"
    }, {
      "id": 34,
      "nome": "Casi De Vaan"
    }, {
      "id": 35,
      "nome": "Reggis Menelaws"
    }]
  ]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false)

  return (
    <View style={styles.content}>
      <View style={styles.inputView}>
        <Ionicons name="wallet-outline" size={24} color="black" />
        <TextInput 
        placeholder="Valor" 
        keyboardType="decimal-pad" 
        style={styles.inputValor}
        value={valor}
        onChangeText={setValor}
        />
      </View>
      <View style={styles.inputView}>
      <Picker selectedValue={id} onValueChange={(itemValue, index)=>{
          setId(itemValue)
        }}
        style={{ width: "100%" }}
      >
        {sugestoes?.map((item) => {
          return <Picker.Item  key={item.id} label={item.nome} value={item.id} />
        })}
      </Picker>
      </View>
      <View style={styles.inputView}>
        {viewCalendar && (
        <DataTimePicker 
        value={data} 
        onChange={(event, selectedDate)=>setData(selectedDate)}
        />
        )}
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="Observações"/>
      </View>
      <View style={styles.contentButtons}>
        <Button title="Salvar" />
        <Button title="Continuar" />
        <Button title="Cancelar" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  inputView: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  contentButtons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-around",
  },
  inputValor: {
    flex: 1,
    textAlign: "right",
    padding: 10,
  },
});


//npm install @react-native-picker/picker