import React, { useState } from "react";
import {
    Button,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";

export default () => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHander = (text) => setLogin(text);
    const emailHander = (text) => setEmail(text);
    const passwordHander = (text) => setPassword(text);
    const onRegister = () => console.log("registered!");

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.bgImage}
                    source={require("../images/photoBG.jpg")}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                        <View style={styles.formContainer}>
                            <TextInput
                                placeholder="Enter your login"
                                value={login}
                                onChangeText={loginHander}
                            ></TextInput>
                            <TextInput
                                placeholder="Enter your email"
                                value={email}
                                onChangeText={emailHander}
                            ></TextInput>
                            <TextInput
                                placeholder="Enter your password"
                                value={password}
                                onChangeText={passwordHander}
                            ></TextInput>
                            <Button
                                title="register"
                                onPress={onRegister}
                            ></Button>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: "100%",
        // backgroundColor: "#fff",
        // borderRadius: 25,
        // overflow: "hidden",
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    formContainer: {
        borderRadius: 25,
        backgroundColor: "#fff",
    },
});
