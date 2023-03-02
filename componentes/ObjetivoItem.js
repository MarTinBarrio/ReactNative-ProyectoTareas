import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function ObjetivoItem(props) {
  return (
    <View style={styles.objetivoItem}>
      <Pressable 
        onPress={props.delete.bind(this, props.item.id)}
        android_ripple = {{ color: '#f1f50a' }}
        /* style = { (pressData) => pressData.pressed } cambio esta forma por destructuring */
        style = { ({pressed }) =>  pressed && styles.pressedItem}

      >
        <Text style={styles.objetivoText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  objetivoItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
    opacity: 0.5,
  },
  objetivoText: {
    color: "white",
    padding: 8,
  },
});

export default ObjetivoItem;
