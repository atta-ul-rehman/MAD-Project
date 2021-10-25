import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonLight3(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.trending}>Trending</Text>
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
  trending: {
    color: "#000",
    fontSize: 17
  }
});

export default CupertinoButtonLight3;
