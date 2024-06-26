import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const LocationDetailsContainer = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>รายละเอียดสถานที่</Text>
      </View>
      <View style={styles.frameWrapper}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon-calendar1.png")}
          />
          <Text style={[styles.text1, styles.textTypo2]}>
            วันทำการ : ทุกวัน
          </Text>
        </View>
      </View>
      <View style={[styles.clockParent, styles.parentFlexBox]}>
        <Image
          style={[styles.clockIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/clock.png")}
        />
        <Text style={[styles.text1, styles.textTypo2]}>11.00น.-16.00น.</Text>
      </View>
      <View style={styles.frameContainer}>
        <View style={styles.parent}>
          <Text style={[styles.text3, styles.textTypo2]}>รายละเอียด</Text>
          <Text style={[styles.text4, styles.textTypo1]}>:</Text>
          <Text style={styles.textTypo}>
            <Text
              style={styles.text6}
            >{`พิพิธภัณฑ์หลวงปู่คำดี ปภาโส ก่อตั้งขึ้นเมื่อวันที่ 5 สิงหาคม พ.ศ. 2529 เพื่อระลึกถึงคุณความดีของพระครูญาณทัสสี (หลวงปู่คำดี ปภาโส) ซึ่งเป็นพระครูชั้นเอกฝ่ายวิปัสสนาธุระ.  `}</Text>
            เพิ่มเติม
          </Text>
        </View>
      </View>
      <View style={styles.frameContainer}>
        <View style={styles.parent}>
          <Text style={[styles.text7, styles.textTypo2]}>ที่อยู่และติดต่อ</Text>
          <Text style={styles.textTypo1}>:</Text>
          <Text style={[styles.text9, styles.textTypo]}>
            วัดถ้ำผาปู่ ตำบลนาอ้อ อำเภอเมือง จังหวัดเลย 42000
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    lineHeight: 22,
    fontSize: FontSize.overlineSmallSemi_size,
    color: Color.neutrals700,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  textTypo1: {
    marginLeft: 10,
    color: Color.neutrals700,
    lineHeight: 22,
    fontSize: FontSize.overlineSmallSemi_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  textTypo: {
    flex: 1,
    marginLeft: 10,
    lineHeight: 22,
    fontSize: FontSize.overlineSmallSemi_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text: {
    position: "absolute",
    top: 1,
    left: 0,
    fontSize: FontSize.buttonLSemi_size,
    lineHeight: 13,
    color: Color.neutrals9001,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  wrapper: {
    width: 335,
    height: 16,
  },
  text1: {
    marginLeft: 8,
    color: Color.neutrals700,
  },
  frameWrapper: {
    marginTop: 16,
  },
  clockIcon: {
    overflow: "hidden",
  },
  clockParent: {
    marginTop: 16,
  },
  text3: {
    width: 70,
    color: Color.neutrals700,
  },
  text4: {
    width: 2,
  },
  text6: {
    color: Color.neutrals700,
  },
  parent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameContainer: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  text7: {
    width: 71,
    color: Color.neutrals700,
  },
  text9: {
    color: Color.neutrals700,
  },
  frameParent: {
    marginTop: 28,
  },
});

export default LocationDetailsContainer;
