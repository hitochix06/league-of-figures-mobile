import React, { Component } from 'react';
import{ View,Text,Image,TextInput, Button} from 'react-native';


/* Components imports */
import Carrousel from '../Carrousel/Carrousel'


  
  

/* Style  */
import  styles from './style';



     class accueil extends React.Component {

     

     constructor(props) {
       super(props);
       this.state ={

        
       }
      
     }

     
  
      render() {
      

        return (
          
      <View>
        <View style = {styles.colone}>
          <Text style= {styles.header}> Actualiser </Text>
          <TextInput placeholder="Recherche"/>
          <Button  title = "Recherche" onPress={() => {}}/>   
        </View>
        <Image source={require('../../assets/image1.jpg')} />
      </View> 
    
        
        );
      }
    };
    
    
    

 export default accueil;
