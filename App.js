import { StyleSheet, Text, View } from 'react-native';
import Loader from './Components/Loader';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:30}}>Senior Citizen safety App</Text>
        <Text style={{fontSize:15,marginTop:5}}>present by Bug_byte</Text>
        <Loader />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
     justifyContent:'center',
     alignItems:"center",
     marginTop:250,
  }, 
  container2:{
    
  }
});
