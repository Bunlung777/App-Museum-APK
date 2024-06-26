import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const SelectMuseumImage = () => {
  return (
    <Image
      style={styles.selectMuseumIcon}
      contentFit="cover"
      source={require("../assets/select-museum.png")}
    />
  );
};

const styles = StyleSheet.create({
  selectMuseumIcon: {
    borderRadius: Border.br_21xl,
    width: 375,
    height: 812,
    overflow: "hidden",
  },
});

export default SelectMuseumImage;
