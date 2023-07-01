import React from "react";
import { View, StyleSheet, StatusBar, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { Button, Input } from '@rneui/themed'
import { appFonts, appcolors, signinStyles } from "./signin";

const signUpStyles = StyleSheet.create({
    ...signinStyles
})

const Signup = ({navigation}) => {

    // Images
    const Lapimage = require('../assets/lap.png');
    const Logo = require('../assets/Logo.png');
    const waterMark = require('../assets/Wordmark.png');
    const slash = require('../assets/onlight.png');
    const facebook = require('../assets/Facebook.png');
    const google = require('../assets/Google.jpg');
    const Apple = require('../assets/Apple.png');
    const successIcon = require('../assets/Check-Circle.png');
    const eyeIcon = require('../assets/Eye.png')

    return (
        <ScrollView style={{ flex: 1, backgroundColor: appcolors.light }} showsVerticalScrollIndicator={false}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />

            {/* Logo and img placement view */}
            <View>
                <Image
                    source={Lapimage}
                    style={signUpStyles.backgroundImg}
                />

                <View style={signUpStyles.logoView}>
                    <Image
                        source={Logo}
                        style={signUpStyles.logoPlacement}
                        resizeMode="contain"
                    />
                    <Image
                        source={waterMark}
                        style={signUpStyles.logoPlacement}
                        resizeMode="contain"
                    />
                </View>
            </View>

            {/* Modal View */}
            <View style={signUpStyles.modalView}>
                <Image
                    source={slash}
                    style={signUpStyles.modalSlash}
                />
                <Text style={signUpStyles.welcomeText}>Welcome Back!</Text>

                <Text style={[signUpStyles.lightText, { marginTop: 5 }]}>Login to continue </Text>

                <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>

                    <View style={[signUpStyles.commonSocialButton, { backgroundColor: appcolors.primary }]}>
                        <Image source={facebook} style={{ height: 18, width: 18 }} />
                    </View>

                    <View style={[signUpStyles.commonSocialButton, { backgroundColor: appcolors.dark }]}>
                        <Image source={Apple} style={{ height: 18, width: 18 }} />
                    </View>

                    <View style={[signUpStyles.commonSocialButton, { backgroundColor: appcolors.light, borderColor: appcolors.googleBorder, borderWidth: 1 }]}>
                        <Image source={google} style={{ height: 18, width: 18 }} />
                    </View>

                </View>

                <View style={{ alignSelf: 'center', marginTop: 15 }}>
                    <Text style={signUpStyles.lightText}>Or connect with your email</Text>
                </View>

                <Input
                    label='Email'
                    defaultValue="anne.carry@mail.com"
                    labelStyle={signUpStyles.labelStyle}
                    inputContainerStyle={signUpStyles.inputContainerStyle}
                    inputStyle={signUpStyles.inputStyle}
                    rightIcon={<Image source={successIcon} style={{ height: 18, width: 18 }} />}
                    rightIconContainerStyle={{ marginRight: 10 }}
                />

                <Input
                    label='Password'
                    defaultValue="12345678"
                    secureTextEntry
                    labelStyle={signUpStyles.labelStyle}
                    inputContainerStyle={signUpStyles.inputContainerStyle}
                    inputStyle={signUpStyles.inputStyle}
                    rightIcon={<Image source={eyeIcon} style={{ height: 18, width: 18 }} />}
                    rightIconContainerStyle={{ marginRight: 10 }}
                />


                <Button
                    buttonStyle={{ backgroundColor: appcolors.lightBlue, height: 58, borderRadius: 12 }}
                    title={'Create an account'}
                    titleStyle={{ fontFamily: appFonts.medium, fontWeight: 700, lineHeight: 20 }}
                />

                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <Text style={[signUpStyles.lightText, { marginVertical: 20, alignSelf: 'center' }]}>Already have an account? Login</Text>
                </TouchableOpacity>

                <View style={signUpStyles.bottomDivider}></View>

            </View>

        </ScrollView>
    )
}

export default Signup