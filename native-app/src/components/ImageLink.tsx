import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, Linking, ImageSourcePropType } from 'react-native';
import { Images, Colors } from '../utils';

interface Props {
    src: ImageSourcePropType,
    linkTo: string;
}

class ImageLink extends React.Component<Props> {
  render() {
    const { src, linkTo } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(linkTo)}>
        <Image style={styles.icon} source={src} resizeMode={'contain'} />
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: "30%",
    alignSelf: "center",
    justifyContent: "space-around"
  },
  icon: {
    width: "100%"
  }
});

export default ImageLink;

