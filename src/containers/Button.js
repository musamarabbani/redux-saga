import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../redux/actions';

let Button = ({ getNews }) => (
	<button type='button' onClick={getNews}>
		Press to get News
	</button>
);

const mapDispatchToProps = {
	getNews: getNews,
};

Button = connect(null, mapDispatchToProps)(Button);

export default Button;
