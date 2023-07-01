import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from "../components/signin";
import Signup from "../components/signup";
import ForgotPassword from "../components/forgotpassword";

const Stack = createStackNavigator();

export const InitialStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default InitialStack