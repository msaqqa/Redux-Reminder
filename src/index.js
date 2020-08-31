import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './reducers/reducer';
import './index.css';

const store = createStore(Reducer);

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))