import { Text, View, ScrollView } from "react-native";
import colors from "@/constants/colors";
import {LinearGradient} from "expo-linear-gradient";

const Index = () => {
    return (
        <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} className="flex-1">
            <View style={{position: "absolute", top: 0, left: 0, right: 0, zIndex: 10}}>
            </View>
            <ScrollView contentContainerStyle={{flexGrow: 1, paddingTop: 50}}
                        >
                <View className="mt-10 items-center justify-center">
                    <Text className="text-2xl font-bold">TEEEStT</Text>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default Index
