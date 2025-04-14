import {enableScreens} from 'react-native-screens';

enableScreens();

import {SplashScreen as ExpoSplashScreen, Stack} from 'expo-router';
import "./globals.css";
import {AuthProvider} from "@/components/AuthContext";
import {useState} from "react";
import SplashScreen from "@/components/SplashScreen";

export default function RootLayout() {


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
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="settings" options={{title: ""}}/>
            </Stack>
        </AuthProvider>
    );
}