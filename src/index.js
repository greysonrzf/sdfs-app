import './config/StatusBarConfig';
import './config/ReactotronConfig';

import CodePush from 'react-native-code-push';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';

import store from './store';
import Routes from './routes';

import Player from './components/Player';

class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('aa6b246a-cc5c-4eb4-a593-4cc25d89ad71');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentDidMount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  // onReceived: É disparado quando receber uma notificação push
  // e o usuário ja estiver com a tela aberta
  // Dentro do data virão todas as informações da notificação

  onReceived = data => {};

  // onOpened: É disparado quando o usuário clica em uma notificação estando com a
  // tela fechada, é possível enviar o usuário para uma tela
  // especifica

  onOpened = notification => {};

  // onIds: É disparado quando o usuário faz o registro no serviço de notificações
  // Relacionar o usuario com o Id de notificação que pode ser armazenado
  // localstorage ou com usuário se o login é exigido

  onIds = id => {};

  render() {
    return (
      <Provider store={store}>
        <Routes />
        <Player />
      </Provider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
