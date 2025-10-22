import { Text, Image, ScrollView, StyleSheet, View } from "react-native";
import logoIMG from './assets/impressao-digital.png'

export const Home = () => {
    return(
  <View style = {styles.container}>
    <Text style = {styles.logo}>
        Aluno <Text style = {styles.logoID}>ID</Text>
    </Text>
    
    
    <View style={styles.imgContainer}>
        <Image style = {styles.ImagemDigital} source={logoIMG}/>
    </View>    


  </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: 'center',
    },
    logo:{
        color:"black",
        fontSize: 50,
    },
    logoID:{
        color:"blue",
        fontSize: 50,
    },
    ImagemDigital:{
        height: '100%',
        width: '100%',
    },
    imgContainer: {
        width: '100',
        height: 100,
    }
})