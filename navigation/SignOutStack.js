import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DummyScreen from '../screens/DummyScreen';

const Stack = createNativeStackNavigator(); 

const SignOutStack = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{header: () => null}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
    </Stack.Navigator>
  )
}


export default SignOutStack; 

