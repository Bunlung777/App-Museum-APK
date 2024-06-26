import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionForm = ({
  frame1171275143,
  prop,
  frame11712751431,
  prop1,
  frame11712751432,
  prop2,
  frame11712751433,
  prop3,
  propTop,
  propWidth,
  propMarginLeft,
  propMarginLeft1,
  onFramePressablePress,
}) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft1),
    };
  }, [propMarginLeft1]);

  return (
    <Pressable
      style={[styles.tabBarWrapper, framePressableStyle]}
      onPress={onFramePressablePress}
    >
      <View style={styles.tabBar}>
        <View style={styles.tabFlexBox}>
          <View style={[styles.frameParent, styles.frameParentPosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={frame1171275143}
            />
            <Text style={[styles.text, textStyle]}>{prop}</Text>
          </View>
        </View>
        <View style={[styles.tabBarChild, styles.tabFlexBox]}>
          <View
            style={[
              styles.frameGroup,
              styles.frameParentPosition,
              frameViewStyle,
            ]}
          >
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={frame11712751431}
            />
            <Text style={styles.text}>{prop1}</Text>
          </View>
        </View>
        <View style={[styles.tabBarChild, styles.tabFlexBox]}>
          <View
            style={[
              styles.frameContainer,
              styles.frameParentPosition,
              frameView1Style,
            ]}
          >
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={frame11712751432}
            />
            <Text style={styles.text}>{prop2}</Text>
          </View>
        </View>
        <View style={[styles.tabBarChild, styles.tabFlexBox]}>
          <View style={[styles.frameParent1, styles.frameParentPosition]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={frame11712751433}
            />
            <Text style={styles.text}>{prop3}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    height: 72,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  tabFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 52,
    height: 52,
  },
  text: {
    fontSize: FontSize.buttonMRegular_size,
    letterSpacing: 0.1,
    lineHeight: 24,
    fontFamily: FontFamily.buttonMRegular,
    color: Color.neutrals9001,
    textAlign: "center",
    marginTop: 8,
  },
  frameParent: {
    marginLeft: -30.65,
  },
  frameGroup: {
    marginLeft: -31.65,
  },
  tabBarChild: {
    marginLeft: 10,
  },
  frameContainer: {
    marginLeft: -28.65,
  },
  frameParent1: {
    marginLeft: -26.15,
  },
  tabBar: {
    backgroundColor: Color.basicWhite100Main,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  tabBarWrapper: {
    marginLeft: -187.5,
    top: 373,
    width: 375,
    height: 100,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
});

export default SectionForm;
