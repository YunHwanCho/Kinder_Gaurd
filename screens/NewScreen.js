import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Button } from "react-native-paper";
import { Colors } from "react-native-paper";
import { TextInput } from "react-native-paper";

export default function NewScreen({ navigation }){
    const handleNew = () => {
        // 아무 처리 없이 메인 페이지로 이동
        navigation.navigate("Login");
      };






    return(
        <View style = {styles.container}>
            <View style = {styles.text}>
                <Text style = {styles.text}>킨더가드</Text>
                <Text style = {styles.text}>새로운 계정 만들기</Text>
            </View>
            <View>
                <Text style = {styles.text}>킨더가드</Text>
                <TextInput></TextInput>
                <Button></Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    text : {

    },
    push : {

    },

})