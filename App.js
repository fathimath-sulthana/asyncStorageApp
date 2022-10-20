import { View, Text, Button, AsyncStorage, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [data,setData] =useState('')
  const add = async() =>{
    try{
      await AsyncStorage.setItem('note',"Todays task")
    }catch(e){
      console.log(e)
    }
  }
  const get = async() =>{
    try{
      const value = await AsyncStorage.getItem('note')
      if(value!= null){
        setData(value)
      }
    }catch(e){
      console.log(e)
    }
  }
  return (
    <View style={styles.container}>
    
      <Button
       style={styles.button}
      title='Add'
      onPress={add}
      />
        <Text style={styles.text}>{data}</Text>
      <Button
      style={styles.button}
      title='Get'
      onPress={get}
      />
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
     marginTop:20,
     padding:10
  },
  text:{
    marginTop:10,
    marginBottom:10,
    fontSize:17
  }
})
export default App