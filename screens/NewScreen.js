import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
} from "react-native";

import { Button } from "react-native-paper";
import { Colors } from "react-native-paper";
import { TextInput } from "react-native-paper";

export default function NewScreen({ navigation }) {
  let [showCode, setShow] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [comPle, setComple] = useState(false);

  const getCode = () => {
    alert("1004");
    setShow(true);
  };
  const checkCom = () => {
    setComple(true);
  };
  const array1 = ["1", "2", "3", "4"];
  const checkCode = () => {
    if (JSON.stringify(verificationCode) === JSON.stringify(array1)) {
      setShowPw(true);
      console.log(verificationCode);
    } else {
      alert("인증코드를 다시 입력해주세요");
      console.log(verificationCode);
    }
  };
  const placeholderText = " 휴대폰 번호 ";
  const countryCode = "  82+  ";
  const handleScreenPress = () => {
    // 화면을 터치하면 키보드가 사라지도록 하는 함수
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image
          source={require("../img/Logo.png")}
          style={{ width: 80, height: 20, marginTop: 50, marginBottom: 10 }} // 원하는 크기로 조정
        />
        <Text style={styles.titleText}>새로운 계정 만들기</Text>
      </View>
      {!showPw ? (
        <View style={styles.number}>
          <Text style={styles.text}>
            <Text style={styles.pinkText}>휴대폰 번호</Text>를 입력해주세요
          </Text>
          <View style={styles.numberContainer}>
            <View style={styles.countryCodeContainer}>
              <Text style={styles.countryCodeText}>{countryCode}</Text>
            </View>

            <TextInput
              style={{
                backgroundColor: "white",
                borderLeftWidth: 0.5,
                borderColor: "rgba(128, 128, 128, 0.5)",
              }}
              placeholder={placeholderText}
              placeholderTextColor="gray"
              keyboardType="numbers-and-punctuation"
            />
          </View>

          {!showCode ? (
            <View>
              <Button
                style={{
                  ...styles.btn,
                  alignItems: "center",
                  padding: 3,
                  marginLeft: 10,
                }}
                mode="contained"
                onPress={getCode}
                buttonColor="#E74364"
              >
                인증 코드 받기
              </Button>
            </View>
          ) : (
            <View style={{ backgroundColor: "white" }}>
              <View style={styles.verificationInputContainer}>
                {[0, 1, 2, 3].map((index) => (
                  <TextInput
                    key={index}
                    borderWidth="0.5"
                    borderRadius="15"
                    backgroundColor="white"
                    style={styles.verificationInput}
                    placeholder="0"
                    placeholderTextColor="gray"
                    value={verificationCode[index] || ""}
                    onChangeText={(text) => {
                      const newVerificationCode = [...verificationCode];
                      newVerificationCode[index] = text;
                      setVerificationCode(newVerificationCode);
                    }}
                    keyboardType="numbers-and-punctuation"
                    maxLength={1}
                  />
                ))}
              </View>

              <Button
                style={{
                  ...styles.btn,
                  alignItems: "center",
                  padding: 3,
                  marginLeft: 15,
                }}
                mode="contained"
                onPress={checkCode}
                buttonColor="#E74364"
              >
                확인
              </Button>
            </View>
          )}
        </View>
      ) : (
        <View style={{ flex: 1, marginHorizontal: 30 }}>
          {comPle ? (
            <View style={{ flex: 1, alignItems: "center", marginTop: 170}}>
              <Image
                source={require("../img/check.png")}
                style={{
                  width: 30,
                  height: 30,
                  marginBottom: 20,
                  marginTop: 10,
                }} // 원하는 크기로 조정
              />
              <Text
                style={{
                  ...styles.text,
                  color: "#E74364",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                회원가입이 완료되었습니다.
              </Text>
            </View>
          ) : (
            <View>
              <Text style={{ ...styles.text, marginTop: 130 }}>
                <Text style={{ ...styles.pinkText }}>비밀번호</Text>를
                설정해주세요
              </Text>
              <TextInput
                style={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  marginTop: 30,
                  borderColor: "rgba(128, 128, 128, 0.5)",
                  fontSize: 15,
                  textAlign: "center",
                }}
                placeholder="문자와 숫자를 포함하여 8자 이상"
                placeholderTextColor="gray"
                keyboardType="numbers-and-punctuation"
              />
              <Button
                style={{
                  ...styles.btn,
                  alignItems: "center",
                  padding: 3,
                  justifyContent: "center",
                  marginLeft: 35,
                }}
                onPress={checkCom}
                mode="contained"
                buttonColor="#E74364"
              >
                설정하기
              </Button>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
  },
  number: {
    marginHorizontal: 30,
    justifyContent: "center",
    marginTop: 100,
    padding: 30,
  },
  numberContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(128, 128, 128, 0.5)",
    borderRadius: 15,
    marginHorizontal: 0,
    marginTop: 30,
  },
  countryCodeContainer: {
    backgroundColor: "white",
    padding: 10,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  countryCodeText: {
    fontSize: 16,
    color: "#E74364",
  },
  pinkText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#E74364",
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
    borderColor: "pink",
    backgroundColor: "white",
  },
  btn: {
    marginTop: 30,
    width: 250,
    height: 46,
  },
  verificationInput: {
    marginHorizontal: 2,
    backgroundColor: "white",
    underline: "transparent",
  },
  verificationInputContainer: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "white",
  },
});
