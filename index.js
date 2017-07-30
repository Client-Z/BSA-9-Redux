import React from 'react';
import ReactDOM from 'react-dom';
import UsersContainer from './components/usersContainer';
import configureStore from 'store/configureStore';
import {Provider} from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <UsersContainer />
    </Provider>,
  document.getElementById('root')
);