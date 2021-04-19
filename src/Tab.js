import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Live from './Live';
import Message from './Message';
import Search from './Search';
import Setting from './Setting';
import Record from './Record';
import {Image, DeviceEventEmitter} from 'react-native';
const Tab = createBottomTabNavigator(
  {
    Live: {
      screen: Live,
      navigationOptions: {
        tabBarLabel: '直播', // tabBar显示的文字
        tabBarIcon: ({tintColor, focused}) => {
          return (
            <Image
              source={
                !focused
                  ? require('../src/img/view.png')
                  : require('../src/img/viewClick.png')
              }
              color={tintColor}
            />
          );
        },
      },
    },
    Message: {
      screen: Message,
      navigationOptions: {
        tabBarLabel: '消息', // tabBar显示的文字
        tabBarIcon: ({tintColor, focused}) => {
          return (
            <Image
              source={
                !focused
                  ? require('../src/img/notification.png')
                  : require('../src/img/notificationClick.png')
              }
              color={tintColor}
            />
          );
        },
      },
    },
    Record: {
      screen: Record,
      navigationOptions: {
        tabBarLabel: ' ', // tabBar显示的文字
        tabBarIcon: ({tintColor, focused}) => {
          return (
            <Image
              source={
                !focused
                  ? require('../src/img/broadcastClick.png')
                  : require('../src/img/broadcastClick.png')
              }
              color={tintColor}
            />
          );
        },
        tabBarOnPress: ({navigation, defaultHandler}) => {
          // defaultHandler();//tab点击默认处理事件
          // setTimeout(() => _this.measureFilter()); //必须延时
          //弹出提示框
          // setTimeout(() => {
            console.log('sdfsfsfsfsfsdf');
            DeviceEventEmitter.emit('notice');
          // });
        },
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: '搜索', // tabBar显示的文字
        tabBarIcon: ({tintColor, focused}) => {
          return (
            <Image
              source={
                !focused
                  ? require('../src/img/search.png')
                  : require('../src/img/searchClick.png')
              }
              color={tintColor}
            />
          );
        },
      },
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarLabel: '设置', // tabBar显示的文字
        tabBarIcon: ({tintColor, focused}) => {
          return (
            <Image
              source={
                !focused
                  ? require('../src/img/menu.png')
                  : require('../src/img/menuClick.png')
              }
              color={tintColor}
            />
          );
        },
      },
    },
  },
  {
    initialRouteName: 'Live',
  },
);
export default Tab;
