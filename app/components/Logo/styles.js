import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
    margin: imageWidth / 3,
  },
  image: {
    width: imageWidth / 2,
    marginTop: imageWidth / 3,
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    textAlign: 'center',
    width: imageWidth * 2,
    marginTop: 20,
    color: '$white',
  },
});
