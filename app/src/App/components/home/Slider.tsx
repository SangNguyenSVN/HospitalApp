import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Global_API from '../../Server/Global_API';
import App from '@/app/src/App';

const Slider = () => {
  const [sliderLst, setSliderLst] = useState();

  useEffect(() => {
    getSlider();
  }, [])

  const getSlider = async () => {
    try {
      const response = await Global_API.getSlider()
      // console.log(response.data.data);
      setSliderLst(response.data.data);
    } catch (error) {
      console.trace(error)
      console.log(" error at Hospital-Booking-App\app\src\App\components\home\Slider.tsx");
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={sliderLst}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            style={styles.img}
            source={{ uri: item.attributes.Image.data.attributes.url }} />
        )}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('screen').width * 0.9,
    height: 170,
    borderRadius: 10,
    margin: 2,

  },
  container: {
 
    flex: 1,
  }
})