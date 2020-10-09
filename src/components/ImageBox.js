import React from "react";
import { StyleSheet, Image } from "react-native";
import { Button, Layout, Text, Icon, Card } from "@ui-kitten/components";

export default function ImageBox({ history, image }) {
  return (
    <Image source={{ uri: image }} style={styles.container}/>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: "35%",
  },
});
