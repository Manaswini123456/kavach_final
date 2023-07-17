import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,view } from "react-native";
import Login from './src/screens/Login'
import Home from './src/screens/Home'
import { useEffect,useState } from "react";
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from "./FirebaseConfig";
// import WelcomeScreen from "./src/screens/Welcome";
import UserStack from "./src/navigation/userStack";


const Stack = createNativeStackNavigator()

function App(){
  const [user,setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH,(user)=>{
      // console.log('user',user);
      setUser(user)
    })
  },[])

  return (
    <>
      {/* <Stack.Navigator initialRouteName='WelcomeScreen'>
        {user?(<Stack.Screen name="Home" component={Home} options={{headerShown:false}}></Stack.Screen>):
        (<Stack.Screen name="Login" component={Login} options={{headerShown:false}}></Stack.Screen> )}
        
      </Stack.Navigator> */}
      {user ? <UserStack /> : <Login />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App