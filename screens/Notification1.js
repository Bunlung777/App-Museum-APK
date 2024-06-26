import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import { useFonts } from 'expo-font';
import { db,firebase } from '../Database/firebase';
import 'firebase/compat/storage';
import { addDoc, collection, getDocs,doc,getDoc,onSnapshot } from 'firebase/firestore';
import Navbar from "./Navbar";
function Notification1() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  let [fontsLoaded] = useFonts({
    'Kanit-Medium': require('../assets/fonts/Kanit-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Font not loaded yet, return null or loading indicator
  }
  useEffect(() => {
    const docRef = doc(db, "MakeBy", "JXDMI1yAmH2VrpM0QclH");
  
    onSnapshot(docRef, (doc) => {
      setData(doc.data());
    });
  }, []);
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Image style={styles.backImage} source={require("../assets/back-arrow-ios.png")} />
      </Pressable>

      <View style={styles.textContainer}>
        <Text style={styles.text}>จัดทำโดย</Text>
      </View>

      <View style={styles.scrollViewContent}>
      <Pressable
        onPress={() => navigation.navigate('Makeby', {
          id: data.id, 
          name: data.Name, 
          history: data.History,
          img: data.ImageUrls,
          mission: data.ission,
          philosophy: data.Philosophy,
          vision: data.Vision,
          Date: data.Date,
          Address: data.Address,
          website: data.Website,
          vision:data.Vision,
          tel:data.Tel,
          facebook:data.FB
        })}
      >
        <View style={styles.blockimg}>
          <Image
            source={{ uri: 'https://culture.lru.ac.th/th/wp-content/uploads/2023/08/logo-2555.jpg' }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        </Pressable> 
        {/*
        <View style={styles.textUnderImage}>
          <Text style={styles.text}>สำนักศิลปะและวัฒนธรรม </Text>
          <Text style={styles.text}>มหาวิทยาลัยราชภัฏเลย </Text>
        </View>
        */}
      </View>
<Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.basicWhite100Main,
  },
  backButton: {
    marginTop: 75,
    left: 16,
    width:50,
    height:80
  },
  backImage: {
    width:24
  },
  textContainer: {
    position: 'absolute',
    marginTop: 60,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Kanit-Medium',
    fontSize: 20,
    marginTop: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width:'100%',
  },
  blockimg: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    width: 350,
    height: 150,
    alignItems: "center",
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 10,
      height: 7,
    },
  },
  image: {
    width: '100%',
    height: '100%',
  },
  // Add styles for text under image if necessary
  // textUnderImage: {
  //   marginTop: 10,
  //   alignItems: 'center',
  // },
});

export default Notification1;
