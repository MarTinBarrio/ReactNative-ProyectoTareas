import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import ObjetivoItem from "./componentes/ObjetivoItem";
import ObjetivoInput from "./componentes/ObjetivoInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [objetivos, setObjetivos] = useState([]);

  function startAddGoalHanlder() {
    setModalIsVisible(true);
  }

  function endAddGoalHanlder() {
    setModalIsVisible(false);
  }

  function addGoalHandler(text) {
    setObjetivos((objetivosActuales) => [
      ...objetivosActuales,
      { text: text, id: Math.random().toString() },
    ]);
    endAddGoalHanlder();
  }

  function deleteGoalHandler(id) {
    //console.log('Delete');
    setObjetivos((objetivosActuales) => {
      return objetivosActuales.filter((objetivo) => objetivo.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button
        title={"Agrega una nueva tarea"}
        color={"#b183ed"}
        onPress={startAddGoalHanlder}
      />
      <ObjetivoInput addGoal={addGoalHandler} visible={modalIsVisible} endModalVisibility={endAddGoalHanlder}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={objetivos}
          renderItem={(itemData) => {
            return (
              <ObjetivoItem item={itemData.item} delete={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            //return index;
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});
