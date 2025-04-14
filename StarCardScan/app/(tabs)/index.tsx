import {View, Text, ScrollView, Image, FlatList, TouchableOpacity, Platform, ActivityIndicator} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import images from "@/constants/images";
import {LinearGradient} from "expo-linear-gradient";
import colors from "@/constants/colors";
import icons from "@/constants/icons";
import {router} from "expo-router";
import CustomHeader from "@/components/CustomHeader";
import CustomHeaderLoggedIn from "@/components/CustomHeaderLoggedIn";
import {useAuth} from "@/components/AuthContext";


const Index = () => {

    const scrollViewRef = useRef(null);

    const { auth_token } = useAuth();

    if (auth_token === undefined) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!auth_token) {
        return (
            <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} className="flex-1">
                <View style={{position: "absolute", top: 0, left: 0, right: 0, zIndex: 10}}>
                    <CustomHeader/>
                </View>
                <ScrollView contentContainerStyle={{flexGrow: 1, paddingTop: 50}}
                            ref={scrollViewRef}>
                    <View className="mt-10 items-center justify-center">
                        <Text className="text-2xl font-bold">Test not logged in</Text>
                    </View>
                </ScrollView>
            </LinearGradient>
        )
    }

    return (
        <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} className="flex-1">
            <View style={{position: "absolute", top: 0, left: 0, right: 0, zIndex: 10}}>
                <CustomHeaderLoggedIn/>
            </View>
            <ScrollView contentContainerStyle={{flexGrow: 1, paddingTop: 50}}
                        ref={scrollViewRef}>
                <View className="mt-10 items-center justify-center">
                    <Text className="text-2xl font-bold">TEEEStT</Text>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}
export default Index
