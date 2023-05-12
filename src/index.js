import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, bindActionCreators} from 'redux';

import reducer from './reducer';
import * as actions from './action';

const initialState = {value: 0};

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
	document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
// 	dispatch(creator(...args));
// }

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);


document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
	const value = Math.floor(Math.random() * 10);
	rnd(value);
});

// let state = reducer(undefined, {type: 'INC'});
// 	state = reducer(state, {type: 'INC'});
//  	state = reducer(state, {type: 'INC'})

// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<>
		
		</>
	</React.StrictMode>
);
