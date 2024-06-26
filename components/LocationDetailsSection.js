import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const LocationDetailsSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.frameWrapper}>
        <View style={styles.frameWrapper}>
          <Text style={[styles.text, styles.textTypo]}>รายละเอียดสถานที่</Text>
          <Text
            style={styles.text1}
          >{`พิพิธภัณฑ์หลวงปู่คำดี ปภาโส ก่อตั้งขึ้นเมื่อวันที่ 5 สิงหาคม พ.ศ. 2529 เพื่อระลึกถึงคุณความดีของพระครูญาณทัสสี (หลวงปู่คำดี ปภาโส) ซึ่งเป็นพระครูชั้นเอกฝ่ายวิปัสสนาธุระ ภายในพิพิธภัณฑ์ประดิษฐานรูปปั้นพระครูญาณทัสสีบนฐานบัวหินอ่อนที่ส่วนตะวันตกของอาคาร รูปปั้นหันหน้าไปทางทิศตะวันออก เบื้องหน้ารูปปั้นมีอัฐิของหลวงปู่อยู่ในพานแก้วครอบกระจกใสพร้อมด้วยเครื่องสักการะต่างๆ ด้านหลังรูปปั้นแขวนภาพถ่ายหลวงปู่คำดีไว้เหนือประตูด้านทิศตะวันตก มีการจัดแสดงวัตถุไว้ตามตู้ ดังนี้ตู้จัดแสดงที่ 1 หรือตู้ด้านทิศตะวันตกเฉียงใต้จัดแสดงประวัติโดยย่อ เส้นผม อัฐิที่กลายเป็นพระธาตุ `}</Text>
        </View>
      </View>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#92a3fd", "#9dceff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("DetailMuseum")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon-add1.png")}
          />
          <Text style={[styles.text2, styles.textTypo]}>ปิด</Text>
          <Image
            style={[styles.iconAdd1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon-add1.png")}
          />
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.buttonLSemi,
    fontWeight: "600",
  },
  iconLayout: {
    display: "none",
    height: 24,
    width: 24,
  },
  text: {
    fontSize: FontSize.h6Semi_size,
    lineHeight: 28,
    textAlign: "center",
    width: 248,
  },
  text1: {
    fontSize: FontSize.buttonMRegular_size,
    letterSpacing: 0.1,
    lineHeight: 24,
    fontFamily: FontFamily.buttonMRegular,
    color: Color.neutrals9001,
    width: 276,
    marginTop: 12,
    textAlign: "left",
  },
  frameWrapper: {
    alignItems: "center",
  },
  text2: {
    fontSize: FontSize.buttonLSemi_size,
    lineHeight: 20,
    color: Color.basicWhite100Main,
    marginLeft: 8,
    textAlign: "left",
  },
  iconAdd1: {
    marginLeft: 8,
  },
  pressable: {
    alignSelf: "stretch",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    padding: Padding.p_base,
    backgroundColor: "transparent",
    alignItems: "center",
    borderRadius: Border.br_21xl,
  },
  button: {
    height: 52,
    marginTop: 10,
  },
  frameParent: {
    position: "absolute",
    marginTop: -226,
    marginLeft: -169.5,
    top: "50%",
    left: "50%",
    backgroundColor: Color.basicWhite100Main,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    overflow: "hidden",
    padding: Padding.p_13xl,
    borderRadius: Border.br_21xl,
  },
});

export default LocationDetailsSection;
