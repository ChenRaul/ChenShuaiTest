import React from 'react';
import {
  Keyboard,
  Dimensions,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';

export default class LivewSearch extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <TouchableOpacity
        style={{height: 40, margin: 5}}
        onPress={() => {
          // Keyboard.
        }}>
        <View style={{flex: 1, position: 'relative', backgroundColor: 'white'}}>
          <View
            pointerEvents={'none'}
            style={{
              position: 'absolute',
              flexDirection: 'row',
              width: 80,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              left: (screenWidth - 80) / 2,
            }}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../img/search.png')}
            />
            <Text style={{marginLeft: 10}}>搜索</Text>
          </View>
          <TextInput
            style={{flex: 1, padding: 6, height: 40}}
            textAlign={'center'}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
