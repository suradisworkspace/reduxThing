/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Provider, useDispatch} from 'react-redux';
import useSelector from './helper/useSelector';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import redux, {actionTypes} from './redux';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

declare const global: {HermesInternal: null | {}};

const store = createStore(redux, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
const App = () => {
  return (
    <Provider store={store}>
      <Render />
    </Provider>
  );
};

const Render = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.count);
  console.log('state', state);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button
          title="increase"
          onPress={() => dispatch({type: actionTypes.INCREASE_ASYNC})}
        />
        <Text>{state}</Text>
        <Button
          title="decrease"
          onPress={() => dispatch({type: actionTypes.DECREASE_ASYNC})}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
