import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialChipWithImage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/cardImage2.png")}
        style={styles.leftImage}
      ></Image>
      <Text style={styles.abcPlaylist}>ABC{"\n"}Playlist</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 50,
    flexDirection: "row"
  },
  leftImage: {
    height: 50,
    width: 50,
    backgroundColor: "#CCC",
    borderRadius: 16
  },
  abcPlaylist: {
    fontSize: 13,
    color: "rgba(0,0,0,0.87)",
    paddingLeft: 8,
    paddingRight: 12
  }
});

export default MaterialChipWithImage;
