import * as React from 'react';
import { Image, StyleSheet, View, TextInput, Animated, Dimensions, UIManager, Keyboard } from "react-native";
import Button from '../components/Button';
import FormTextInput from '../components/FormTextInput';
import { Images, Strings, Colors } from '../utils';

interface State {
    userName: string;
    password: string;
    shift: any;
}

const { State: TextInputState } = TextInput;

class LoginScreen extends React.Component<{}, State> {
  readonly state: State = {
    userName: "",
    password: "",
    shift: new Animated.Value(0)
  };

  handleUserNameChange = (uName: string) => {
    this.setState({ userName: uName });
  };

  handlePasswordChange = (pass: string) => {
    this.setState({ password: pass });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  handleKeyboardDidShow = event => {
    const { height: windowHeight } = Dimensions.get("window");
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(
      currentlyFocusedField,
      (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height;
        const fieldTop = pageY;
        const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight);
        if (gap >= 0) {
          return;
        }
        Animated.timing(this.state.shift, {
          toValue: gap,
          duration: 300,
          useNativeDriver: true
        }).start();
      }
    );
  };

  handleKeyboardDidHide = () => {
    Animated.timing(this.state.shift, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      "keyboardDidShow",
      this.handleKeyboardDidShow
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      "keyboardDidHide",
      this.handleKeyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  render() {
    const { shift } = this.state;
    return (
      <Animated.View
        style={[styles.container, { transform: [{ translateY: shift }] }]}
      >
        <Image source={Images.logo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.userName}
            onChangeText={this.handleUserNameChange}
            placeholder={Strings.user.USERNAME_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={Strings.user.PASSWORD_PLACEHOLDER}
          />
          <Button label={Strings.user.LOGIN} onPress={this.handleLoginPress} />
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        width: '80%'
    }
});

export default LoginScreen;
