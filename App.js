import React, { Component } from 'react';
import {  
  Dimensions,  
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Camera from 'react-native-camera'
import QRCode from 'react-native-qrcode';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.handleQrGenerate}>generateQrCode</Text>
      </View>
    );
  };

  handleQrGenerate(){
    // console.log("hahahaha")
    // this.renderBarcode('12345').bind(this)
    // return(
    //   <QRCode
    //       value={"123456"}
    //       size={200}
    //       bgColor='black'
    //       fgColor='white'/>
    //   );
  }

  renderBarcode(tValue){
    return(
      <QRCode
          value={tValue}
          size={200}
          bgColor='black'
          fgColor='white'/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
  },
});

//     constructor(props) {
//     super(props);
//     this.state = {
//         barcode: ''
//     }
//   }

//   render(){
//     return(
//       <View>
//         <View style = {styles.cameraBorder}>
//           <Camera 
//             ref={(cam)=>{
//               this.camera = cam
//             }}
//             onBarCodeRead = {this.onBarCodeRead.bind(this)}
//             style = {styles.preview}
//             aspect = {Camera.constants.Aspect.fill}>
//             {/* <Text style = {styles.capture} onPress = {this.takePicture.bind(this)}>[CAPTURE]</Text> */}
//             <Text style={{
//             backgroundColor: 'white'
//             }}>{this.state.qrcode}{this.state.barcode}</Text>
//           </Camera>
//         </View>
//         {/* <TouchableOpacity style = {{width:200, height:200, backgroundColor:'white'}} onPress = {this.generateQrCode.bind(this)}>generate Qr code</TouchableOpacity>         */}
//       </View>
//     );
//   }

//   onBarCodeRead(e){
//     console.log("Barcode FOUND!", "Type: "+e.type +"\nData: "+e.data)
//     this.setState({barcode:e.data})
//   }

//   takePicture(){
//     const options = {}
//     this.camera.capture({metadata: options})
//         .then((data)=>console.log(data))
//         .catch(err=>console.error(err))
//   }

//   generateQrCode(){

//   }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   cameraBorder: {
//     width: 200,
//     height:200
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     color: '#000',
//     padding: 10,
//     margin: 40
//   }
// });