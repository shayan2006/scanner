import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class Scanner extends React.Component {
    constructor(){
        super();
        this.state = {hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState:'normal',

            }
    }
    getCameraPermissions = async () =>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({
        hasCameraPermissions: status === "granted",
        buttonState:Id,
        scanned:false
      })
    }
    handleBarCodeScanned = async({type, data})=>{
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        })
    }
    render() {
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
     if (buttonState === "clicked" && hasCameraPermissions)
     {
        return(
            <BarCodeScanner
            onBarCodeScanned={
                scanned ? undefined : this.handleBarCodeScanned
            }
            style={StyleSheet.absoluteFillObject}/>
        )
     }      
      else if (buttonState === "normal"){
      return (  
          <View style={Styles.container}>
           <TextInput
            style={{width:200,height:30,borderWidth:3}}
            placeholder="product id">
            </TextInput>

               <Text>{hasCameraPermissions===true?this.state.scanneddata:"requestCameraPermissions"}</Text>
            <TouchableOpacity
            style={{width:200,height:30,backgroundColor:"orange",borderWidth:3}}
            onPress={()=>{this.getCameraPermissions("BookId")}}>
             <Text>scan</Text>

            </TouchableOpacity>
            <TextInput
            style={{width:200,height:30,borderWidth:3}}
            placeholder=" id">
            </TextInput>
            <TouchableOpacity
            style={{width:150,height:30,backgroundColor:"red",borderWidth:2}}
            onPress={()=>{this.getCameraPermissions("StudentId")}}>
                <Text>scan</Text>
            </TouchableOpacity>
          </View>
        )
        }
    }
}