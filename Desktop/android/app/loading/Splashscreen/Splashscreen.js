import React, { Component } from 'react';
import{ View,Image,ActivityIndicator,Animated,Easing } from 'react-native';

    
/* Style  import*/
import styles from './style';

 class Splashscreen extends Component {



constructor (props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
  }
  
  componentDidMount () {

    setTimeout(() => {
      this.props.navigation.navigate('App');
  }, 2000)

    this.animate()
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }



  

    render(){
        
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-300, 0]
        })
        return(
             
        
            <View style ={styles.container}>
              
              <Image  source  ={require('../../assets/figurine1.jpg')}  /> 
             
              <Animated.View
                style={{
                  marginLeft}}>
                <Image   source={require('../../assets/figurine2.jpg')} /> 
              </Animated.View>
              

            </View>
           

        
        
     
        );
    }
 }



 export default Splashscreen;