import React, { Component } from 'react';
import{ createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import{ View,Text, Button,Image} from 'react-native';

/* Components imports */

import accueil  from '../Accueil/accueil';
import compte from '../Compte/compte';
import cree from '../Cree/cree';
import bibliotheque from '../Bibliotheque/bibliotheque';


import  styles from './style';

    const MainTabNavigator = createAppContainer (createBottomTabNavigator({
        accueil: accueil , 
        bibliothèque: bibliotheque,
        crée: cree,
        connexion: compte
       
    },  {
        initialRouteName: 'accueil'
    })
    
);

    class Main extends Component {
        constructor(props) {
            super(props);
            this.state = {

            }
        }



  /*   
      static navigationOptions = {
      tabBarLabel: 'Actu',
      tabBarIcon: () => (<Image source = {require("../../assets/search.jpg")} />
      )};
   */



    render(){
        return(
            

            
            <MainTabNavigator style= {styles.navig}/>
        
        );
    }
 }


 

 export default Main;