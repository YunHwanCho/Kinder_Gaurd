import React, { useEffect } from "react";
import { View, Text, StyleSheet,Image, StatusBar } from "react-native";

import { Button } from "react-native-paper";
import { Colors } from "react-native-paper";
import { TextInput } from "react-native-paper";

export default function FirstScreen({ navigation }){

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate("Login");
        }, 1000); 
    
        
        return () => clearTimeout(timer);
      }, [navigation]);
    

    return(
        <View style={styles.container}>
            <StatusBar></StatusBar>
            <Image
            source={require('../img/main.png')}
            style ={{width: 400, height: 200, marginBottom : 100}} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})