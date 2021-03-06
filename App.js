import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import SimpleComponent from "./components/SimpleComponent";
import store from "./store";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your aaaapp!</Text>
          <SimpleComponent />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
