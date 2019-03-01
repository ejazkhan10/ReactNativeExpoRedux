import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { showWelcome } from "../actions/sampleAction";
class SimpleComponent extends Component {
  componentWillMount() {}
  buttonPressed() {
    this.props.showWelcome();
  }
  render() {
    return (
      <View>
        <Text> {this.props.sample.user} </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.buttonPressed.bind(this)}
        >
          <Text>Click on me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
const mapStateToProps = state => ({
  sample: state.sample
});
export default connect(
  mapStateToProps,
  { showWelcome }
)(SimpleComponent);
