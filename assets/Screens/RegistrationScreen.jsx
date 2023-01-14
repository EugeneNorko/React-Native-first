import React, { useState } from "react";
import {
  Button,
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
import colors from "../helpers/colors";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default () => {
  const [formdata, setFormdata] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    console.log(isShowKeyboard);
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    // console.log(formdata);
    setFormdata(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
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
                paddingBottom: isShowKeyboard ? 20 : 90,
              }}
            >
              <Text style={styles.title}>Register</Text>
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
    paddingBottom: 92,
  },
  title: {
    color: colors.mainTextColor,
    fontSize: 30,
    fontWeight: "500",
    marginTop: 32,
    textAlign: "center",
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
    // marginBottom: 113,
    backgroundColor: colors.buttonBg,
    borderRadius: 100,
  },
  btnText: {},
});
