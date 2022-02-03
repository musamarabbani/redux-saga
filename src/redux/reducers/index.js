import { GET_NEWS, NEWS_RECEIVED } from '../actions/types';

const reducer = (state = {}, action) => {
	console.log('actions ==>', action);
	switch (action.type) {
		case GET_NEWS:
			return { ...state, loading: true };
		case NEWS_RECEIVED:
			return { ...state, news: action.json.articles[0], loading: false };
		default:
			return state;
	}
};

export default reducer;
