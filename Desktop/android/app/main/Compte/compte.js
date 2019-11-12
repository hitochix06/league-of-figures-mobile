import React, { Component } from 'react';
import{ View,TextInput,Text, Button,KeyboardAvoidingView} from 'react-native';




/* Style  */
import  styles  from './style';
import Carrousel from '../Carrousel/Carrousel';


     class compte extends React.Component {
     constructor(props) {
       super(props);
       this.state ={
    
       };
      
     }
     

     



      render() {
        
        return (
          
          
            <View style={{flex:1}}>
            
            <Text style= {styles.Text}> Adresse mail </Text>
                <TextInput  style= {styles.Input} placeholder="Email" />
                  <Text style= {styles.Text}> Mots Passe </Text>
                    <TextInput style= {styles.Input} placeholder="Passe"/>
          <Carrousel/>

                <Button  title = "connexion " onPress={() => {}}/>   
                
            </View>
           
    
        );
      }
    };
    
    



 export default compte;