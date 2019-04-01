import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
  Alert
} from "react-native";

export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          item: "Send a mail to Jane",
          completed: false,
          addMore: false
        },
        {
          item: "Buy coffee on the way back home",
          completed: false,
          addMore: false
        },
        {
          item: "Appointment with John at 11:00",
          completed: false,
          addMore: false
        },
        {
          item: "See a dentist",
          completed: false,
          addMore: false
        },
        {
          item: "Pick Michael up at his school",
          completed: false,
          addMore: false
        },
        {
          item: "Add more texts?",
          completed: false,
          addMore: true
        }
      ],
      color: ["#f44f52", "#f46c52", "#f58b54", "#f4a856", "#f7c659", "#ccbc42"],
      update: false,
      numDeleted: 0
    };
  }

  getStyle(index) {
    return {
      flex: 1,
      height: 70,
      backgroundColor: this.state.color[index],
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      flexDirection: "row"
    };
  }

  delete(index) {
    var todos = this.state.todos;
    todos[index].completed = true;

    var color = this.state.color;
    color.splice(index, 1);

    this.setState({
      todos,
      update: !this.state.update,
      numDeleted: this.state.numDeleted + 1,
      color,
      refresh: !this.state.refresh
    });

    // Alert.alert(color);
  }

  renderItem = ({ item, index }) => {
    if (this.state.todos[index].completed) {
      return;
    }

    return (
      <View style={this.getStyle(index)}>
        <Text
          style={{
            fontFamily: "Avenir Next",
            color: "white",
            fontSize: 17,
            fontWeight: "400",
            opacity: 0.95
          }}
        >
          {item.item}
        </Text>
        <TouchableOpacity
          style={styles.deleteButton}
          activeOpacity={0.5}
          onPress={() => this.delete(index)}
        >
          <Text
            style={{ fontFamily: "Avenir Next", fontSize: 22, color: "white" }}
          >
            X
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: this.state.color[0], height: 22 }} />
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <FlatList
            extraData={this.state.update}
            ref={ref => {
              this.flatListRef = ref;
            }}
            data={this.state.todos}
            renderItem={this.renderItem}
            bounces={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1b1729"
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
    flex: 1,
    height: 80,
    backgroundColor: "#f44f52"
  },
  deleteButton: {
    borderWidth: 1,
    paddingTop: 1,
    paddingLeft: 1,
    height: 32,
    width: 32,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white"
  }
});
