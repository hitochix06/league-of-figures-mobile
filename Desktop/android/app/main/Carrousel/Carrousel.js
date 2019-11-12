import React, { Component } from 'react'
import { Animated, View, Image, Dimensions, ScrollView } from 'react-native'


/* Style  */
import  styles  from './style';

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 50


const images = [

  'https://www.figurine-pop.net/wp-content/uploads/2018/08/pop_main.jpeg',
  'https://esports.as.com/2018/11/15/bonus/videojuegos/Primer-gameplay-Gears-POP-movil_1191200869_117349_1440x600.jpg',
  'https://i.ytimg.com/vi/jlTTyIH2858/hqdefault.jpg',
]



/* Style  */



     class Carrousel extends React.Component {
     
     numItems = images.length
     itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
     animVal = new Animated.Value(0)


      render() {
        
        let imageArray = []
    let barArray = []
    images.forEach((image, i) => {
      console.log(image, i)
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{uri: image}}
          style={{ width:500, height: 200 }}
        />
      )
      imageArray.push(thisImage)

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      })

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View

            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [
                  { translateX: scrollBarVal },
                ],
              },
            ]}
          />
        </View>
      )
      barArray.push(thisBar)
    })

        return (
          
          <View
          style={styles.container}
          flex={1}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled

            
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
              )
            }
          >
  
            {imageArray}
  
          </ScrollView>
          <View
            style={styles.barContainer}
          >
            {barArray}
          </View>
        </View>
      )
    }
  }
  
  




 export default Carrousel;