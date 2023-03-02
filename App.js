import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ObjetivoItem from "./componentes/ObjetivoItem";
import ObjetivoInput from "./componentes/ObjetivoInput";

export default function App() {
  
  const [objetivos, setObjetivos] = useState([]);

  function addGoalHandler(text) {
    setObjetivos((objetivosActuales) => [
      ...objetivosActuales, 
      {text: text, id: Math.random().toString()},
    ]);
  }

  function deleteGoalHandler(id){
    //console.log('Delete');
    setObjetivos((objetivosActuales) => {
      return objetivosActuales.filter(objetivo => objetivo.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <ObjetivoInput addGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={objetivos}
          renderItem={(itemData) => {
            return <ObjetivoItem item={itemData.item} delete={deleteGoalHandler} />;
          }}
          keyExtractor={(item, index) => {
            //return index;
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
