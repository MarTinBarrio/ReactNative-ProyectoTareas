import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Pressable } from "react-native";

function ObjetivoInput(props) {
  const [text, setText] = useState("");

  function goalInputHandler(enteredText) {
    setText(enteredText);
  }

  function addGoalHandler() {
    props.addGoal(text);
    setText("");
  }

  return (
    
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregue un objetivo"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={text}
        />
        <Button title="Agregar" onPress={addGoalHandler}></Button>
      </View>
  );
}

export default ObjetivoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
