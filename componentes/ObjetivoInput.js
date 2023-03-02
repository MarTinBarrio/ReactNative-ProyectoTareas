import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Agregue un objetivo"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.endModalVisibility}
              color="#f31282"
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Agregar"
              onPress={addGoalHandler}
              color="#5e0acc"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ObjetivoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column", //por dafult tambien es column
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "black",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
