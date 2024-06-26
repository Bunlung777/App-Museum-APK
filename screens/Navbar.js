import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const Navbar = () => {
    const navigation = useNavigation();
  return (
<View style={[styles.menuBar]}>
        <View style={[styles.homeParent]}>
          <View style={[styles.home1FlexBox]}>

          <Pressable onPress={() => navigation.navigate("AllMuseum",{
          })}>
            <Image
              style={[styles.iconLayout2,{marginLeft:10}]}
              contentFit="cover"
              source={require("../assets/buildingbank.png")}
            />
            <Text style={[styles.doctorsFlexBox]}>
              พิพิธภัณฑ์
            </Text>
            </Pressable>
          </View>

          
          <View style={[ styles.home1FlexBox]}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Image
              style={[ styles.iconLayout2,{marginLeft:5}]}
              contentFit="cover"
              source={require("../assets/icon-home.png")}
            />
            <Text style={[styles.doctorsFlexBox]}>
              หน้าหลัก
            </Text>
            </Pressable>
            </View>
            
          <View style={[ styles.home1FlexBox]}>
          <Pressable onPress={() => navigation.navigate("Notification1")}>
          <Image
              style={[ styles.iconLayout2,{marginLeft:5}]}
              contentFit="cover"
              source={require("../assets/user-edit.png")}
            />
          {/* <FontAwesomeIcon icon={faUserPen} size={25} style={{marginLeft:10}} color={'#BBBBBB'}/> */}
            <Text style={[styles.doctorsFlexBox]}>
              จัดทำโดย
            </Text>
            </Pressable>
          </View>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
    menuBar: {
        bottom: -25,
        shadowColor: "rgba(0, 0, 0, 0.8)",
        elevation: 20,
        shadowOpacity: 2,
        shadowOffset: {
          width: 100,
          height: 10,
        },
        backgroundColor: Color.basicWhite100Main,
        width: 420,
        marginLeft: -210,
        left: "50%",
        position: "absolute",
        height:100,
      },
      homeParent: {
        alignItems: "flex-end",
        alignSelf: "stretch",
        flexDirection: "row",
        height: 52,
        justifyContent: "center",
        marginTop:10
      },
      home1FlexBox: {
        flex: 1,
        marginRight:15,
        alignItems: "center",
      },  
      iconLayout2: {
        height: 24,
        width: 24,
      },
      doctorsFlexBox: {
        color: Color.neutrals400,
        marginTop: 8,
        height: 15,
        display: "flex",
        textAlign: "center",
        lineHeight: 14,
        fontSize: FontSize.overlineXSmallBold10_size,
        fontFamily: FontFamily.buttonMRegular,
        justifyContent: "center",
        alignItems: "center",
      }
})

export default Navbar