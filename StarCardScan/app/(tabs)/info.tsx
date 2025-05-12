import {View, Text, ScrollView, TextInput, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import colors from "@/constants/colors";
import CustomHeaderLoggedIn from "@/components/CustomHeaderLoggedIn";
import icons from "@/constants/icons";

const Info = () => {
    return (
        <SafeAreaView className="h-full">
            <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} className="flex-1">
                <View style={{position: "absolute", top: 0, left: 0, right: 0, zIndex: 1000}}>
                    <CustomHeaderLoggedIn/>
                </View>
                <ScrollView
                    className="flex-1"
                    contentContainerClassName="flex-grow px-7"
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={{color: "#000000", fontFamily: "Lexend-Zetta-Bold", fontSize: 19, marginTop: 100}}>Info test</Text>
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}
export default Info
