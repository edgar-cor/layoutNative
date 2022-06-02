import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import data from './src/Data'

export default function App() {

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.banner} source={data.banner.img}/>
        <View style= {styles.titleContainer}>
          <Text style={styles.title}>
            {data.moodWeekend.title}
          </Text>
          <Image style={styles.icon} source={data.moodWeekend.rightIcon}/>
        </View>
        <ScrollView horizontal>
          { data.moodWeekend.images.map((images, index) =>
          (
           <Image key={index} style={styles.moodWeekendImg} source={images.img}/>
          ))}
        </ScrollView>
        <ScrollView>
            <View style={styles.titleContainer}>
              <Text style={ styles.title }> {data.topAlbums.title}</Text>
            </View>
            { data.topAlbums.images.map((images, index) => (
            <TouchableOpacity>
              <Image style={ styles.topAlbumsImg} key={index} source={images.img}/>
            </TouchableOpacity>
            ))}
            <View style={styles.titleContainer}>
              <Text style={ styles.title }> {data.browseAll.title}</Text>
            </View>
            <View style={styles.browseAllContainer}>
              {data.browseAll.images.map((image, index)=>(
                <Image key={index} style={styles.browseImg} source={image.img}/>
              ))}
            </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  banner: {
      width: '100%',
      height: 200,
      borderBottomRightRaadius: 50,
      borderTopLeftRadius: 50,
  },
  titleContainer:{
    margin: 20,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
    color: 'blue',
  },
  icon:{
    opacity:0.5,
    marginHorizontal:5,
    borderRadius:20,
    width:30,
    height:30,
  },moodWeekendImg:{
    marginHorizontal:5,
    borderRadius: 5,
    borderRadius:20,
    width: 150,
    height: 150,
  },topAlbumsImg:{
    borderRadius: 5,
    margin: 5,
    width: '98%',
    height: 300,
  },browseAllContainer:{
    flexDirection:'row',
    flexWrap: 'wrap-reverse',
    justifyContent:'center',
  },browseImg:{
      width: 150,
      height: 150,
      borderRadius: 20,
      margin:5,
  }
});
