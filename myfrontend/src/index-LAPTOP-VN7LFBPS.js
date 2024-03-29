import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
//import  auth from './store/actions/auth';

/*const logger= store =>{
return next=>{
    return action =>{
        console.log('[Middleware] Dispatching', action);
      const result=  next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
}
};*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const app=(
    <Provider store={store}>
 <BrowserRouter>
    <App/>
    </BrowserRouter>

    </Provider>
   
);


ReactDOM.render(app, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();

