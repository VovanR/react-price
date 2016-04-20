/* global document, React, ReactDOM */

import Price from '../index.jsx';

require('../style.css');

const price = (
	<div
		style={{
			fontSize: '250%',
			fontFamily: 'monospace'
		}}
		>
		<p>
			<time>03.02.2016</time>
		</p>
		<div>
			<small>{'Old: '}</small>
			<Price cost={100} currency={'$'} type={'old'}/>
		</div>
		<div>
			<small>{'New: '}</small>
			<Price cost={91.55} currency={'€'}/>
		</div>
		<div>
			<small>{'Sale: '}</small>
			<Price cost={'7 793'} currency={'₽'}/>
		</div>
	</div>
);

ReactDOM.render(price, document.getElementById('app'));
