import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonLight2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.yourLikes}>Your likes</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  yourLikes: {
    color: "#000",
    fontSize: 17
  }
});

export default CupertinoButtonLight2;
