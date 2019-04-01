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
      fonts: [
        "San Francisco",
        "Academy Engraved LET",
        "AcademyEngravedLetPlain"
      ],
      index: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: this.state.fonts[this.state.index]
          }}
        >
          Hello, World!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
