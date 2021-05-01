/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import btoa from 'btoa'
 import Buffer from 'buffer'
 if (!global.btoa) {
     global.btoa = btoa;
 }
 global.Buffer = global.Buffer || require('buffer').Buffer
 
 AppRegistry.registerComponent(appName, () => App);
 