import { all, takeLatest, put } from 'redux-saga/effects';
import { GET_NEWS, NEWS_RECEIVED } from '../actions/types';
import axios from 'axios';

const API_URL =
	'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc';

function* fetchNews() {
	try {
		const response = yield axios.get(API_URL);
		let data = response.data;
		console.log('data ==>', data);
		if (data.status === 'ok') {
			yield put({ type: NEWS_RECEIVED, json: data });
		} else throw new Error('something went wrong');
	} catch (err) {
		console.log('error ==>', err);
	}
}

function* actionWatcher() {
	console.log('middleware again called');
	yield takeLatest(GET_NEWS, fetchNews);
}

export default function* rootSaga() {
	console.log('middleware called');
	yield all([actionWatcher()]);
}
