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
      todoAmount: 0,
      completed: []
    };
  }

  isCompleted(index) {
    for (var i in this.state.completed) {
      if (this.state.completed[i] == index) {
        return true;
      }
    }

    return false;
  }
  completeItem(index) {
    var newCompleted = this.state.completed;
    newCompleted.push(index);
    this.setState({
      completed: newCompleted
    });
  }
  addItem() {
    this.setState({
      todoAmount: this.state.todoAmount + 1
    });
  }

  renderTodos = () => {
    let table = [];

    for (let i = 0; i < this.state.todoAmount; i++) {
      if (!this.isCompleted(i)) {
        table.push(
          <View key={i} style={styles.todoItem}>
            <TextInput style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => this.completeItem(i)}>
              <Text>√</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }

    return table;
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderTodos()}
        <TouchableOpacity style={styles.button} onPress={() => this.addItem()}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
        <Text>
          You completed {this.state.completed.length}/{this.state.todoAmount}{" "}
          tasks!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  todoItem: {
    borderWidth: 1,
    borderRadius: 25,
    margin: 2,
    width: 200,
    padding: 10,
    flexDirection: "row"
  },
  button: {
    borderWidth: 1,
    borderRadius: 25,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
