import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';

export default class LiveItem extends React.Component {
  static defaultProps = {
    title: '',
    datas: [],
    onClick: () => {},
  };
  renderItem(item, index) {
    return (
      <TouchableOpacity onPress={() => this.props.onClick()}>
        <View
          style={{
            width: 90,
            height: 110,
            marginRight: 10,
          }}>
          <View
            style={{
              width: 90,
              height: 90,
              backgroundColor: 'gray',
              position: 'relative',
            }}>
            <Text
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}>
              {item.time}
            </Text>
          </View>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', margin: 5}}>
        <View style={{}}>
          <Text>
            {this.props.title}({this.props.datas.length})
          </Text>
        </View>
        <FlatList
          style={{flex: 1}}
          data={this.props.datas}
          renderItem={({item, index}) => this.renderItem(item, index)}
          horizontal={true}
          scrollEnabled={true}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
