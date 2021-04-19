import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  AppState,
  Dimensions,
  DeviceEventEmitter,
} from 'react-native';
import {createAppContainer, NavigationActions} from 'react-navigation';
import LivewSearch from './components/LiveSearch';
import Notice from './components/Notice';
import LiveItem from './LiveItem';
const LiveDatas = [
  {
    title: '热门',
    datas: [
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
    ],
  },
  {
    title: '推荐',
    datas: [
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
    ],
  },
  {
    title: 'NearbY',
    datas: [
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
    ],
  },
  {
    title: '教育',
    datas: [
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
      {time: '00:02', name: 'AABB'},
    ],
  },
];
export default class Live extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      appState: AppState.currentState,
    };
    this.listener = DeviceEventEmitter.addListener('notice', () => {
      console.log('sdfsfsdfsfsfsdfsdfsdfsdfsd333333');
      this.setState({visible: true});
      console.log('sdfsfsdfsfsfsdfsdfsdfsdfsd333333', this.state.visible);
      this.visibleTimeout = setTimeout(
        () => this.setState({visible: false}),
        3000,
      );
    });
  }
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      const resetActionTab = NavigationActions.navigate({
        routeName: 'TabPage',
        action: NavigationActions.navigate({routeName: 'Live'}),
      });
      this.props.navigation.dispatch(resetActionTab);
      this.reset = false;

      console.log('sdfsdfsdfsdfsdddddd');
    }

    this.setState({appState: nextAppState});
  };
  componentWillUnmount() {
    this.listener.remove();
    this.visibleTimeout && clearTimeout(this.visibleTimeout);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1, width: Dimensions.get('window').width}}
          data={LiveDatas}
          renderItem={({item, index}) => (
            <LiveItem
              title={item.title}
              datas={item.datas}
              onClick={() => this.props.navigation.navigate('LiveDetail')}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={() => <LivewSearch />}
          keyboardShouldPersistTaps={'never'}
        />
        <Notice visible={this.state.visible} />
      </View>
    );
  }
}
