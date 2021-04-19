import moment from 'moment';
import React from 'react';
import {FlatList, Text} from 'react-native';
import {Observable,timer} from "rxjs";

export default class LiveDetail extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '详情',
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.timeInterval=timer(0,2000).subscribe(()=>{
      this.setData('current time:' + moment().format('yyyy-MM-DD hh:mm:ss'), 0);
    });
    this.sizeInterval=timer(0,10000).subscribe(()=>{
           fetch('http://www.powerinfo.net')
        .then(response => {
          console.log( response.headers.get('content-length'));
          this.setData( response.headers.get('content-length'), 1);
        })
    });
    // this.sizeInterval = interval(10000).subscribe(()=>{
    //     fetch('http://www.powerinfo.net')
    //     .then(response => {
    //       console.log( response.headers.get('content-length'));
    //       return response.text();
    //     })
    //     .then(data => {
    //       this.setData(data, 1);
    //     });
    // });
    // let count=0;
    // this.timeInterval = setInterval(() => {
    //   count++;
    //   if(count === 5){
    //     fetch('http://www.powerinfo.net')
    //       .then(response => {
    //         console.log(response);
    //         return response.text();
    //       })
    //       .then(data => {
    //         this.setData(data, 1);
    //     });
    //     count = 0;
    //   }
    //   this.setData('current time:' + moment().format('yyyy-MM-DD hh:mm:ss'), 0);
    // }, 2000);
    // this.sizeInterval = setInterval(() => {
    //   //获取网页的大小
    //   fetch('http://www.powerinfo.net')
    //     .then(response => {
    //       console.log(response);
    //       return response.text();
    //     })
    //     .then(data => {
    //       this.setData(data, 1);
    //     });
    // }, 10000);
  }
  //同步问题
  setData(data, type) {
    let temp = this.state.data.slice();
    if (type === 0) {
      temp.push(data);
    } else {
      temp.push('size=' + data + ' bytes'+ moment().format('yyyy-MM-DD hh:mm:ss'));
    }
    this.setState({data: temp}, () => {
      if (!this.scroll) {
        this.FlatList.scrollToEnd();
      }
    });
  }
  componentWillUnmount() {
    // this.timeInterval && clearInterval(this.timeInterval);
    // this.sizeInterval && clearInterval(this.sizeInterval);
    this.scrollToEndTimeout && clearTimeout(this.scrollToEndTimeout);
    this.timeInterval.unsubscribe();
    // this.sizeInterval.unsubscribe();
  }
  render() {
    return (
      <FlatList
        ref={o => (this.FlatList = o)}
        style={{flex: 1}}
        data={this.state.data}
        renderItem={({item}) => <Text style={{height: 30}}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        onScrollBeginDrag={() => {
          this.scroll = true;
          this.scrollToEndTimeout && clearTimeout(this.scrollToEndTimeout);
        }}
        onScrollEndDrag={() => {
          this.scroll = false;
          this.scrollToEndTimeout = setTimeout(() => {
            this.FlatList.scrollToEnd();
          }, 10000);
        }}
        getItemLayout={(data, index) => ({
          length: 30,
          offset: 30 * index,
          index,
        })}
      />
    );
  }
}
