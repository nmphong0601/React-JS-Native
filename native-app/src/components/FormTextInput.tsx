import * as React from 'react';
import { StyleSheet, TextInput, TextInputProps, TextInputState } from 'react-native';
import { Colors } from '../utils';

// We support all the TextInput props
type Props = TextInputProps;

class FormTextInput extends React.Component<Props> {
  render() {
    // We define our own custom style for the TextInput, but we still want to
    // allow the developer also supply its own additional style if needed.
    // To do so, we extract the "style" prop from all the other props to prevent
    // it to override our own custom style.
    const { style, ...otherProps } = this.props;

    return (
      <TextInput
        ref="TextInput"
        selectionColor={Colors.dodgerBlue}
        // Add the externally specified style to our own custom style
        style={[styles.textInput, style]}
        // ...and then  spread all the other props
        {...otherProps}
      />
    );
  }
}


const styles = StyleSheet.create({
    textInput: {
        color: Colors.white,
        height: 40,
        borderColor: Colors.silver,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    }
});

export default FormTextInput;

