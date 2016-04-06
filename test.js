import test from 'ava';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import C from './';

function createComponent(component, props = {}) {
	const shallowRenderer = ReactTestUtils.createRenderer();
	shallowRenderer.render(React.createElement(component, props));
	return shallowRenderer.getRenderOutput();
}

test(t => {
	const result = createComponent(C);

	t.is(result.props.className, 'price');
	t.is(result.type, 'div');
});

test(t => {
	const props = {
		cost: 99,
		currency: 'USD'
	};
	const result = createComponent(C, props);

	t.is(result.props.children[0].type, 'span');
	t.is(result.props.children[1].type, 'span');
});

test(t => {
	const props = {
		cost: 99
	};
	const result = createComponent(C, props);

	t.is(result.props.children[0].type, 'span');
	t.is(result.props.children[1], null);
});

test(t => {
	const props = {
	};
	const result = createComponent(C, props);

	t.is(result.props.children[0], null);
	t.is(result.props.children[1], null);
});

test(t => {
	const props = {
		currency: 'USD'
	};
	const result = createComponent(C, props);

	t.is(result.props.children[0], null);
	t.is(result.props.children[1], null);
});

test(t => {
	const props = {
		cost: 0,
		currency: 'USD'
	};
	const result = createComponent(C, props);

	t.is(result.props.children[0].type, 'span');
	t.is(result.props.children[1].type, 'span');
});

test(t => {
	const props = {
		cost: 5,
		currency: '$',
		type: 'old'
	};
	const result = createComponent(C, props);

	t.is(result.props.className, 'price price_old');
	t.is(result.type, 'del');
});

test('`cost` prop type `String|Number`', t => {
	const props = {
		cost: '15 000'
	};
	const result = createComponent(C, props);

	t.is(result.props.children[0].props.children, '15 000');
});
