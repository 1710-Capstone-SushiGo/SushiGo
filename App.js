
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Index from './client/index';
import store from './client/store/index';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
console.disableYellowBox = true;

console.disableYellowBox = true;

export default App
