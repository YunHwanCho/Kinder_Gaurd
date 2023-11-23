import React from "react";
import { View, Text, StyleSheet,Image , StatusBar} from "react-native";

import { Button } from "react-native-paper";
import { Colors } from "react-native-paper";
import { TextInput } from "react-native-paper";
import {ButtonTheme } from "../theme/Button.js"

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    if(id == '' || pw == ''){
      alert("아이디를 입력해주세요")
    }else{
      navigation.navigate("Main");
    }
    
  };

  const handleNew = () => {
    navigation.navigate("New");
  };
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  return (
    <View style={styles.container}>
      <StatusBar 
      
      translucent
      backgroundColor="transparent"
      barStyle="dark-content">
        
      </StatusBar>
      <View>
        <Text style={styles.sub}>우리 아이 지키는 AI 가디언</Text>
        <Image
        source={require('../img/Logo.png')}
        style={{ width: 200, height: 50 ,marginBottom : 50, marginTop : 10}} // 원하는 크기로 조정
      />
      </View>
      <View style={styles.Login}>
        <TextInput style ={{borderTopEndRadius : 30 , borderTopLeftRadius :30 , color : 'white'}}
          label="아이디" 
          value={id} onChangeText={(id) => setId(id)} 
          borderTopLeftRadius = "30"
          backgroundColor ="white"
          borderTopEndRadius = "30"
          theme={ButtonTheme}
          
          

          
        />
        <TextInput style ={{borderBottomEndRadius : 30 , borderBottomLeftRadius :30}}
          label="비밀번호"
          mode="outline"
          backgroundColor ="white"
          secureTextEntry
          value={pw}
          onChangeText={(pw) => setPw(pw)}
          borderBottomLeftRadius = "30"
          textColor="black"
          borderBottomEndRadius = "30"
          underlineColor = "transparent"
          theme={ButtonTheme}
          
        />
      </View>
      <View style={styles.btn}>
        <Button
          style={{...styles.btn, alignItems: "center",  padding : 3, borderColor : "pink"}}
          icon="login"
          mode="contained"
          onPress={handleLogin}
          buttonColor="white"
          buttonBorderColor="pink"
          textColor="#FF3399"
        >
          로그인
        </Button>
        <Button
          style={{...styles.btn, alignItems: "center",  padding : 3}}
          icon="login"
          mode="contained"
          onPress={handleNew}
          buttonColor= "#FF3399"
        >
          새로운 계정
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom : 100
  },
  Login: {
    width : 300,
    
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "pink",
    marginBottom: 100,
  },
  btn: {
    marginTop: 30,
    width : 250,
    height : 46,
   

  },
  sub: {
    fontSize: 15,
    marginLeft : 15,
    color: "#FF3399",
  },
});
