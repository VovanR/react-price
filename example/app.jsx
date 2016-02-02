/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import Price from '../index.jsx';

require('../style.css');

const price = (
	<div>
		<Price cost={100} currency={'USD'} type={'old'} />
		<Price cost={99} currency={'USD'} />
		<Price currency={'USD'} />
		<Price />
	</div>
);

ReactDOM.render(price, document.getElementById('app'));
