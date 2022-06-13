import React from 'react';
import { TouchableWithoutFeedback, Keyboard} from 'react-native';

const PageContainer = props => {
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} style={props.style}>
        {props.children}
    </TouchableWithoutFeedback>
  )
}

export default PageContainer
