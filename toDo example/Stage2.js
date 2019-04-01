import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";

export default class TodoApp extends React.Component {
  renderTodos() {
    return null;
  }

  addItem() {
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTodos()}
        <TouchableOpacity
        style={styles.button}
        onPress={() => this.addItem()}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderWidth: 1,
    borderRadius: 25,
    margin: 10,
    padding: 10
  }
});
