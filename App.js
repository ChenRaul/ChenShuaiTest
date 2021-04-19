/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  Image,
  AppState,
  // SafeAreaView,
  // ScrollView,
  DeviceEventEmitter,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createAppContainer, NavigationActions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Notice from './src/components/Notice';
import LiveDetail from './src/LiveDetail';

import Tab from './src/Tab';

const AppStack = createStackNavigator(
  {
    // Splash: {screen: Splash},/
    TabPage: {screen: Tab},
    LiveDetail: {screen: LiveDetail},
  },
  // {
  //   initialRouteName: 'TabPages',
  //   headerMode: 'screen',
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       backgroundColor: 'white',
  //       height: 60,
  //       elevation: 0,
  //       shadowOpacity: 0,
  //       borderBottomWidth: 0,
  //     },
  //     headerTitleStyle: {
  //       color: '#fff',
  //       fontSize: 18,
  //       fontWeight: 'normal',
  //       alignSelf: 'center',
  //     },
  //     headerTitleAlign: 'center',
  //     headerTintColor: '#fff',
  //   },
  // },
);
// const Section = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>

//       </ScrollView>
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default class App extends React.Component {
  render() {
    const Stack = createAppContainer(AppStack);
    return (
      <Stack>
        <View
          style=
          {{
            position: 'absolute',
            backgroundColor: 'red',
            width: 100,
            height: 100,
          }}
          >
          <Image
            style={{
              width: 80,
              height: 80,
              position: 'absolute',
              bottom: 0,
              left: Dimensions.get('window').width / 2 - 30,
            }}
            source={require('./src/img/broadcast.png')}
          />
        </View>
      </Stack>
    );
  }
}
