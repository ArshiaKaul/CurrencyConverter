import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,

  container: {
    alignItems: 'center',
  },
  containerImage: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize' / 2,
    height: '$largeContainerSize' / 2,
  },
  image: {
    width: '$largeImageSize',
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    textAlign: 'center',
    width: imageWidth * 2,
    marginTop: 190,
    marginBottom: 20,
    color: '$white',
  },
});
