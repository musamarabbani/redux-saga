import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { logger } from 'redux-logger';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	applyMiddleware(
		sagaMiddleware,
		logger,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
sagaMiddleware.run(rootSaga);

export default store;
