import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';
import store, { persistor } from './redux/store/index';
import Main from './src/Main';
 export default class App extends Component{
  render()
  {
    return(
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator size="large" color="black"/>} persistor={persistor}>
          <Main/>
        </PersistGate>
      </Provider>
    );
  }
}
