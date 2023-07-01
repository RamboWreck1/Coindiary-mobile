import React from "react";
import { View, StyleSheet, StatusBar, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { Button, Input } from '@rneui/themed'
import { appFonts, appcolors, signinStyles } from "./signin";

const forgotPasswordStyles = StyleSheet.create({
    ...signinStyles
})

const ForgotPassword = ({ navigation }) => {

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
        <ScrollView style={{ flex: 1, backgroundColor: appcolors.light, maxHeight: '100%' }} showsVerticalScrollIndicator={false}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />

            {/* Logo and img placement view */}
            <View>
                <Image
                    source={Lapimage}
                    style={forgotPasswordStyles.backgroundImg}
                />

                <View style={[forgotPasswordStyles.logoView , {top : '35%'}]}>
                    <Image
                        source={Logo}
                        style={[forgotPasswordStyles.logoPlacement, {
                            width: 44.376,
                            height: 50,
                            flexShrink: 0
                        }]}
                        resizeMode="contain"
                    />
                    <Image
                        source={waterMark}
                        style={[forgotPasswordStyles.logoPlacement,{
                            width: 107.425,
                            height: 28.314,
                            flexShrink: 0
                        }]}
                        resizeMode="contain"
                    />
                </View>
            </View>

            {/* Modal View */}
            <View style={[forgotPasswordStyles.modalView, { top: -45 }]}>
                <Image
                    source={slash}
                    style={forgotPasswordStyles.modalSlash}
                />
                <Text style={forgotPasswordStyles.welcomeText}>Password Recovery</Text>

                <Text style={[forgotPasswordStyles.lightText, { marginTop: 5, marginBottom: 15 }]}>Enter your email to recover your password </Text>

                <Input
                    label='Email'
                    defaultValue="anne.carry@mail.com"
                    labelStyle={forgotPasswordStyles.labelStyle}
                    inputContainerStyle={forgotPasswordStyles.inputContainerStyle}
                    inputStyle={forgotPasswordStyles.inputStyle}
                    rightIcon={<Image source={successIcon} style={{ height: 18, width: 18 }} />}
                    rightIconContainerStyle={{ marginRight: 10 }}
                />

                <Button
                    buttonStyle={{ backgroundColor: appcolors.green, height: 58, borderRadius: 12 }}
                    title={'Send Email'}
                    titleStyle={{ fontFamily: appFonts.medium, fontWeight: 700, lineHeight: 20 }}
                />

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={[forgotPasswordStyles.lightText, { marginVertical: 20, alignSelf: 'center' }]}>Already have an account? Login</Text>
                </TouchableOpacity>

                <View style={forgotPasswordStyles.bottomDivider}></View>

            </View>

        </ScrollView>
    )
}

export default ForgotPassword