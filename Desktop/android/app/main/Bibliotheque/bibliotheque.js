import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';


  
import Carrousel from '../Carrousel/Carrousel';


/* Style  */
import  style  from './style';



     class bibliotheque  extends React.Component {
     constructor(props) {
       super(props);
       this.state ={
    
       }
    
     }


     _action = () => {
      Communications.web('http://google.fr');
    }
    
     
    /*  
     
  */
      render() {
        return (
    
            <View>
  

              <TouchableOpacity onPress={this._action}>
                <Text>Ouvrir le site web </Text>
            </TouchableOpacity>  
        </View>
        
    
        );
      }
    };
    
    



 export default bibliotheque;