import {enableScreens} from 'react-native-screens';

enableScreens();

import {SplashScreen as ExpoSplashScreen, Stack} from 'expo-router';
import "./globals.css";
import {AuthProvider} from "@/components/AuthContext";
import {useFonts} from "expo-font";
import React, {useEffect, useState} from "react";
import SplashScreen from "@/components/SplashScreen";
import {StatusBar} from "react-native";

export default function RootLayout() {

    const [fontsLoaded] = useFonts({
        'Lexend-Light': require('../assets/fonts/Lexend-Light.ttf'),
        'Lexend-Regular': require('../assets/fonts/Lexend-Regular.ttf'),
        'Lexend-SemiBold': require('../assets/fonts/Lexend-SemiBold.ttf'),
        'Lexend-Zetta-Bold': require('../assets/fonts/LexendZetta-Bold.ttf'),
        'Lexend-Zetta-ExtraBold': require('../assets/fonts/LexendZetta-ExtraBold.ttf'),
        'Lexend-Zetta-Regular': require('../assets/fonts/LexendZetta-Regular.ttf'),
        'Lexend-Zetta-Medium': require('../assets/fonts/LexendZetta-Medium.ttf'),
        'Lexend-Zetta-Light': require('../assets/fonts/LexendZetta-Light.ttf'),
        'Lexend-Deca-SemiBold': require('../assets/fonts/LexendDeca-SemiBold.ttf'),
        'Lexend-Deca-Bold': require('../assets/fonts/LexendDeca-Bold.ttf'),
        'Lexend-Deca-Light': require('../assets/fonts/LexendDeca-Light.ttf'),
        'Lexend-Deca-Medium': require('../assets/fonts/LexendDeca-Medium.ttf'),
    });

    const [showCustomSplash, setShowCustomSplash] = useState(true);

    if (showCustomSplash) {
        return (
            <SplashScreen
                onFinish={() => {
                    setShowCustomSplash(false);
                    ExpoSplashScreen.hideAsync();
                }}
            />
        );
    }

    return (
        <AuthProvider>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} animated={true}/>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="sign-in" options={{headerShown: false}}/>
                <Stack.Screen name="reset-password" options={{headerShown: false}}/>
                <Stack.Screen name="settings" options={{headerShown: false}}/>
            </Stack>
        </AuthProvider>
    );
}