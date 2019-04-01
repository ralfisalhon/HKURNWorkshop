import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      todoAmount: 0
    };
  }

  renderTodos = () => {
    let table = [];

    for (let i = 0; i < this.state.todoAmount; i++) {
      table.push(
        <View key={i} style={styles.todoItem}>
          <TextInput style={{ flex: 1 }} />
        </View>
      );
    }

    return table;
  };

  addItem() {
    this.setState({
      todoAmount: this.state.todoAmount + 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTodos()}
        <TouchableOpacity style={styles.button} onPress={() => this.addItem()}>
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
  },
  todoItem: {
    borderWidth: 1,
    borderRadius: 100,
    margin: 2,
    width: 200,
    padding: 10,
    flexDirection: "row"
  }
});
