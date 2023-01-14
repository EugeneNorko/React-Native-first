import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import RegistrationScreen from "./assets/Screens/RegistrationScreen";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <Text>Open up App.js to start working on your dick!</Text> */}
            <RegistrationScreen />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
