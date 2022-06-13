import {StyleSheet} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  allCentered: {
    //maked children centered on view
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedBox: {
    borderRadius: 15,
  },
  squareShadedBox: {
    elevation: 10,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    marginVertical: 10,
  },
  blackBox: {
    //create a black box for testing
    height: 100,
    width: 100,
    backgroundColor: 'black',
  },
  yCentered: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  divisor: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.grey,
    margin: 2,
    marginVertical: 10,
  },
});
