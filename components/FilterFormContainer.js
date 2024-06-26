import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const FilterFormContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.mobileHeader, styles.notchIconPosition]}>
      <View style={styles.status}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.statusIcons}>
          <Image
            style={styles.networkSignalLight}
            contentFit="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light.png")}
          />
          <Image
            style={[styles.batteryLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/battery--light.png")}
          />
        </View>
        <Image
          style={styles.indicatorIcon}
          contentFit="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <View style={styles.appBar}>
        <Pressable
          style={[styles.backArrowIos, styles.backArrowIosLayout]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-arrow-ios.png")}
          />
        </Pressable>
        <Text style={styles.filter}>Filter</Text>
        <Image
          style={[styles.shareAndroidIcon, styles.backArrowIosLayout]}
          contentFit="cover"
          source={require("../assets/share-android.png")}
        />
      </View>
      <View style={styles.mobileHeaderChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  notchIconPosition: {
    top: 0,
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  backArrowIosLayout: {
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    left: 0,
    maxWidth: "100%",
    height: 30,
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    overflow: "hidden",
    position: "absolute",
  },
  status: {
    height: 44,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  icon: {
    width: "100%",
    height: "100%",
    marginTop: -12,
  },
  backArrowIos: {
    left: 16,
  },
  filter: {
    marginTop: -11,
    width: "52%",
    left: "24%",
    fontSize: FontSize.headerH7Header18_size,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.headerH7Header18,
    color: Color.neutrals900,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  shareAndroidIcon: {
    right: 56,
    display: "none",
    marginTop: -12,
  },
  appBar: {
    height: 52,
    alignSelf: "stretch",
  },
  mobileHeaderChild: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 0.5,
    height: 1,
    display: "none",
    alignSelf: "stretch",
  },
  mobileHeader: {
    marginLeft: -187.5,
    left: "50%",
    backgroundColor: Color.basicWhite90,
    width: 375,
  },
});

export default FilterFormContainer;
