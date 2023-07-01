import React from "react";
import { View, StyleSheet, StatusBar, ScrollView, Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import { Button, Input } from '@rneui/themed'

export const appcolors = {
    primary: '#39579B',
    dark: '#1E1F20',
    light: '#FFFFFF',
    borderColor: '#8F92A1',
    lightTextColor: '#8F92A1',
    lightBlue: '#79D0F1',
    green: '#53D769',
    darkBlue: '#0659FD',
    modalBackground: "#FFF",
    googleBorder: "#8F92A166"
}

export const appFonts = {
    medium: 'Poppins-Medium',
    bold: 'Poppins-SemiBold'
}

export const signinStyles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: 331,
        flexShrink: 0
    },
    logoView: {
        position: 'absolute',
        width: '100%',
        top: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    logoPlacement: {
        display: 'flex',
        height: 23.411,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6.19,
        flexShrink: 0,
        marginRight: 5
    },
    logoTextPlacement: {
        width: 50.377,
        height: 13.257,
        flexShrink: 0,
    },
    modalView: {
        width: '100%',
        top: '-20%',
        height: 672,
        flexShrink: 0,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: appcolors.modalBackground,
        padding: 20
    },
    welcomeText: {
        color: '#1E1F20',
        fontSize: 22,
        fontFamily: appFonts.bold,
        fontStyle: 'normal',
        lineHeight: 30
    },
    modalSlash: {
        width: 38,
        height: 5,
        flexShrink: 0,
        alignSelf: 'center',
        top: 5,
        marginBottom: 30
    },
    lightText: {
        color: '#8F92A1',
        fontSize: 14,
        fontFamily: 'Poppins',
        lineHeight: 20
    },
    commonSocialButton: {
        width: 99,
        height: 58,
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginRight: 30
    },
    googleBorder: {
        borderColor: appcolors.googleBorder
    },
    labelStyle: {
        // fontWeight: 'normal',
        fontFamily: appFonts.bold,
        color: appcolors.dark,
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 1,
        textTransform: 'uppercase',
        marginBottom: 15
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderColor: appcolors.borderColor
    },
    inputStyle: {
        color: appcolors.lightTextColor,
        fontSize: 14,
        fontFamily: appFonts.medium,
        lineHeight: 20
    },
    loginButton: {
        width: 319,
        height: 58,
        flexShrink: 0
    },
    bottomDivider: {
        width: 134,
        height: 5,
        backgroundColor: appcolors.dark,
        marginTop: 20,
        alignSelf: 'center'
    }
})

const Signin = ({ navigation }) => {

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
                    style={signinStyles.backgroundImg}
                />

                <View style={signinStyles.logoView}>
                    <Image
                        source={Logo}
                        style={signinStyles.logoPlacement}
                        resizeMode="contain"
                    />
                    <Image
                        source={waterMark}
                        style={signinStyles.logoPlacement}
                        resizeMode="contain"
                    />
                </View>
            </View>

            {/* Modal View */}
            <View style={signinStyles.modalView}>
                <Image
                    source={slash}
                    style={signinStyles.modalSlash}
                />
                <Text style={[signinStyles.welcomeText, { fontWeight: 700 }]}>Welcome Back!</Text>

                <Text style={[signinStyles.lightText, { marginTop: 5, fontWeight: 500, }]}>Login to continue </Text>

                <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>

                    <View style={[signinStyles.commonSocialButton, { backgroundColor: appcolors.primary }]}>
                        <Image source={facebook} style={{ height: 18, width: 18 }} />
                    </View>

                    <View style={[signinStyles.commonSocialButton, { backgroundColor: appcolors.dark }]}>
                        <Image source={Apple} style={{ height: 18, width: 18 }} />
                    </View>

                    <View style={[signinStyles.commonSocialButton, { backgroundColor: appcolors.light, borderColor: appcolors.googleBorder, borderWidth: 1 }]}>
                        <Image source={google} style={{ height: 18, width: 18 }} />
                    </View>

                </View>

                <View style={{ alignSelf: 'center', marginTop: 15 }}>
                    <Text style={signinStyles.lightText}>Or connect with your email</Text>
                </View>

                <Input
                    label='Email'
                    defaultValue="anne.carry@mail.com"
                    labelStyle={signinStyles.labelStyle}
                    inputContainerStyle={signinStyles.inputContainerStyle}
                    inputStyle={signinStyles.inputStyle}
                    rightIcon={<Image source={successIcon} style={{ height: 18, width: 18 }} />}
                    rightIconContainerStyle={{ marginRight: 10 }}
                />

                <Input
                    label='Password'
                    defaultValue="12345678"
                    secureTextEntry
                    labelStyle={signinStyles.labelStyle}
                    inputContainerStyle={signinStyles.inputContainerStyle}
                    inputStyle={signinStyles.inputStyle}
                    rightIcon={<Image source={eyeIcon} style={{ height: 18, width: 18 }} />}
                    rightIconContainerStyle={{ marginRight: 10 }}
                />


                <Button
                    buttonStyle={{ backgroundColor: appcolors.darkBlue, height: 58, borderRadius: 12 }}
                    title={'Login'}
                    titleStyle={{ fontFamily: appFonts.medium, fontWeight: 700, lineHeight: 20 }}
                />

                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={[signinStyles.lightText, { marginVertical: 20, alignSelf: 'center' }]}>Forgot Password?</Text>
                </TouchableOpacity>

                <Button
                    buttonStyle={{ backgroundColor: appcolors.light, height: 58, borderRadius: 12, borderWidth: 1, borderColor: appcolors.borderColor }}
                    title={'Create an account'}
                    onPress={() => navigation.navigate("Signup")}
                    titleStyle={{ fontFamily: appFonts.medium, fontWeight: 700, lineHeight: 20, color: appcolors.dark }}
                />

                <View style={signinStyles.bottomDivider}></View>

            </View>

        </ScrollView>
    )
}

export default Signin