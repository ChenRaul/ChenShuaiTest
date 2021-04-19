import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  BackHandler,
  Platform,
  Modal,
  Dimensions,
} from 'react-native';

export default class Notice extends Component {
  static defaultProps = {
    visible: false, //是否显示
    content: '', //提示内容
    //默认关闭方法是空的，需要父组件来编写该方法的逻辑
    close: () => {},
  };
  constructor(props) {
    super(props);
  }
  _close() {
    //调用父组件的关闭方法，实际上就是在被调用的地方来修改visible属性值
    //也就是说使用该自定义组件时，closeModal这个属性方法必须要写
    this.props.close();
  }
  render() {
    return (
      <Modal
        transparent={true}
        /*由调用的地方来决定是否显示*/
        visible={this.props.visible}
        animationType={'fade'}
        onRequestClose={this._close.bind(this)}
        cancelable>
        <View style={styles.modalContainer}>
          <View style={styles.modalBorderView}>
            <Text style={styles.modalText}>准备直播</Text>
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  modalContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBorderView: {
    width: 80,
    height: 80,
    borderRadius: 3,
    backgroundColor: 'black',
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 14,
    color: 'white',
    marginTop: 15,
    textAlign: 'center',
  },
});
