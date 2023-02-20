import {legacy_createStore as createStore} from 'redux';
import reducer from './Reducer';

const ConfigureStore =  createStore(reducer);

export default ConfigureStore;