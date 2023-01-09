import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <ImageBackground
                style={styles.bgImage}
                source={require("./assets/Images/photoBG.jpg")}
            > */}
            {/* <Text>Open up App.js to start working on your dick!</Text> */}
            <RegistrationScreen />
            <StatusBar style="auto" />
            {/* </ImageBackground> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    bgImage: {
        // flex: 1,
        resizeMode: "cover",
        // alignItems: "center",
        // justifyContent: "center",
    },
});
