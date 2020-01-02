import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {

    const showAlert = () => {
            Alert.alert(
                'Your baby wears a size' + diapherSize(enteredAge,enteredWeight,enteredHeight)
            )
    }

    const [enteredAge, setEnteredAge] = useState('');

    const ageInputHandler = (enteredText) => {
                setEnteredAge(enteredText);
    }

     const [enteredWeight, setEnteredWeight] = useState('');

     const weightInputHandler = (enteredText) => {
                    setEnteredWeight(enteredText);
     }
            

    const [enteredHeight, setEnteredHeight] = useState('');

    const heightInputHandler = (enteredText) => {
                    setEnteredHeight(enteredText);
    }

    const diapherSize= (age,weight,height)=>{
        var ageNum=parseInt(age,10)
        var weightNum=parseFloat(weight)
        var heightNum=parseFloat(height)

         if(ageNum <9 &&(weightNum>=1 && weightNum<6)){
                return(' P');
        }else if (ageNum <9 &&(weightNum>=6 && weightNum<8)&&(heightNum>=17 && heightNum<=19)) {
             return(' N')
         } else if(ageNum <9 &&(weightNum>=8 && weightNum<12)&&(heightNum>=19 && heightNum<24)){
                return(' 1')
         }else if(ageNum <9 &&(weightNum>=12 && weightNum<16)&&(heightNum>=24 && heightNum<27)){
            return(' 2')
        }else if(ageNum <9 &&(weightNum>=16 && weightNum<22)&&(heightNum>=27 && heightNum<29)){
            return(' 3')
        }else if(ageNum >=9 &&(weightNum>=16 && weightNum<22)&&(heightNum>=27 && heightNum<29)){
            return(' 3 and if you are interested in training pants the size will be XS')
        }else if(ageNum <9 &&(weightNum>=22 && weightNum<=27)&&(heightNum>=29 && heightNum<31)){
            return(' 4')
        }else if(ageNum >=9 &&(weightNum>=22 && weightNum<=27)&&(heightNum>=29 && heightNum<31)){
            return(' 4 and if you are interested in training pants the size will be S')
        }else if(ageNum <9 &&(weightNum>27 && weightNum<=35)&&(heightNum>=31 && heightNum<=33)){
            return(' 5')
        }else if(ageNum >=9 &&(weightNum>27 && weightNum<=35)&&(heightNum>=31 && heightNum<=33)){
            return(' 5 and if you are interested in training pants the size will be M')
        }else if(ageNum <9 && weightNum>35 && heightNum>33 ){
            return(' 6')
        }else if(ageNum >=9 && weightNum>35 && heightNum>33 ){
            return(' 6 and if you are interested in training pants the size will be L')
        }    
    }

    return ( 
         <View style={{backgroundColor:'red'}} >
         <View style = { layouts.header } >
         <Text style = { layouts.headerText } > BabyFit </Text> 
         <Text style={layouts.textStyle}>by Precious Group</Text>
         </View>

         <View style = { layouts.screen } >
                
         <Text style={layouts.textStyle} > Age( in months) </Text> 
         <TextInput placeholder = 'Enter Age'
             style = { layouts.inputContainer }
             onChangeText = { ageInputHandler }
             value = { enteredAge }
            />
                    
                    <Text style={layouts.textStyle}> Weight( in pounds) </Text> 
                    <TextInput placeholder = 'Enter Weight'
                    style = { layouts.inputContainer }
                    onChangeText = { weightInputHandler }
                    value= { enteredWeight }
                    />

                    <Text style={layouts.textStyle}> Height(in inches) </Text> 
                    <TextInput placeholder = 'Enter Height'
                    style = { layouts.inputContainer }
                    onChangeText = { heightInputHandler }
                    value = { enteredHeight }
                    />
                    </View> 

                   <View style = {
                        { padding: 165 } } >
                    
                    <Button title = " Submit"
                    onPress = { showAlert }
                    style = { layouts.button }
                    /> 
                    </View> 
                   </View>
                );
}
        
const layouts = StyleSheet.create({

   header: {
      padding: 50,
     alignItems: 'center'
         },
     headerText: {
     fontSize: 40,
     fontWeight: 'bold',
     color: 'white'
     },
     screen: {
      padding: 90
     },
     inputContainer: {
       borderColor: 'black',
        borderWidth: 2,
        height: 60,
        backgroundColor:'white'
         },
         textStyle: {
            fontSize:20,
            fontWeight:'600',
            fontStyle:'italic',
            color:'white'
         },
      button: {
        backgroundColor: '#4ba37b',
         width: 100,
         borderRadius: 50,
         alignItems: 'center',
         marginTop: 100
                }
            });