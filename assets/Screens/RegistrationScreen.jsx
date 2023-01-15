import React, { useState, useCallback } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import colors from "../helpers/colors";

const initialState = {
  login: "",
  email: "",
  password: "",
};
SplashScreen.preventAutoHideAsync();

export default () => {
  const [formdata, setFormdata] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [loaded] = useFonts({
    RobotoRegular: require("../fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("../fonts/Roboto-Medium.ttf"),
    RobotoBold: require("../fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (!loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setFormdata(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.bgImage}
          source={require("../images/photoBG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.formContainer,
                paddingBottom: isShowKeyboard ? 10 : 90,
              }}
            >
              <View>
                <Text style={styles.title}>Register</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter your login"
                textAlign="center"
                value={formdata.login}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setFormdata((prevState) => ({
                    ...prevState,
                    login: value,
                  }))
                }
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                textAlign="center"
                value={formdata.email}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setFormdata((prevState) => ({
                    ...prevState,
                    email: value,
                  }))
                }
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                textAlign="center"
                secureTextEntry={true}
                value={formdata.password}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setFormdata((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
              ></TextInput>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
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
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingTop: 92,
    paddingHorizontal: 15,
  },
  title: {
    color: colors.mainTextColor,
    fontSize: 30,
    fontWeight: "500",
    marginTop: 32,
    textAlign: "center",
    fontFamily: "RobotoMedium",
  },
  input: {
    height: 50,
    backgroundColor: colors.inputBg,
    marginTop: 16,
    borderRadius: 8,
  },
  btn: {
    height: 50,
    marginTop: 43,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.buttonBg,
    borderRadius: 100,
  },
  btnText: {},
});
