import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../redux/counterSlice";

export const MainScreen = () => {

   const count = useSelector(state => state.counter.count)
   const dispatch = useDispatch()

   function onIncreasePress() {
      dispatch(counterSlice.actions.incremented())
   }
   function onDecreasePress() {
      if (count > 0)
         dispatch(counterSlice.actions.decremented())
   }

   return (
      <SafeAreaView style={{
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center'
      }}>
         <StatusBar barStyle={'dark-content'} />
         <Text>Counter Value is : {count}</Text>
         <View style={{
            flexDirection: 'row'
         }}>
            <TouchableOpacity
               onPress={onIncreasePress}
               style={styles.button}>
               <Text style={styles.button_text}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={onDecreasePress}
               style={styles.button}>
               <Text style={styles.button_text}>Decrease</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   button: {
      padding: 10,
      margin: 10,
      backgroundColor: 'blue'
   },
   button_text: {
      color: 'white'
   }
})