import React, {useState} from 'react';  
import {Text, View, TouchableOpacity, StyleSheet} from "react-native"; 

export default function Game() {
    const [randomColor, setRandomColor] = useState('rgb(32,0,126)')

    const changeBackground = () =>{
        let color = "rgb( " +
            Math.floor(Math.random()*256)+
            "," + 
            Math.floor(Math.random() *256)+
            "," + 
            Math.floor(Math.random()*256) + 
            ")"; 
        setRandomColor(color);
    }
        
    return(
        <>
            <View style = {[styles.container, {backgroundColor:randomColor}]}>
                <TouchableOpacity onPress={changeBackground}>
                    <Text style = {styles.text}>Press this Button!</Text>
                </TouchableOpacity>
                
            </View> 
        </>
    );
}; 

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center", 
        justifyContent: "center", 
        width: "100%"

    }, 
    text: {
        fontSize: 30, 
        backgroundColor: '#BB2CD9',
        paddingHorizontal: 40,
        paddingVertical: 10,
        color: '#fffff',
        borderRadius: 15,
    }
}); 