import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../utils';

interface Props {
    label: string,
    onPress: () => void;
}

class Button extends React.Component<Props> {
    render() {
        const { label, onPress } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}>
                    {label}
                </Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: Colors.fireBrick,
    backgroundColor: Colors.white,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255, 0.7)"
  },
  text: {
    // color: Colors.white,
    color: Colors.fireBrick,
    textAlign: "center",
    height: 20
  }
});

export default Button;

