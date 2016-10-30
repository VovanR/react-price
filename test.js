import test from 'ava';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import C from './';

function createComponent(component, props = {}) {
	const shallowRenderer = ReactTestUtils.createRenderer();
	shallowRenderer.render(React.createElement(component, props));
	return shallowRenderer.getRenderOutput();
}

test('render price block', t => {
	const result = createComponent(C);

	t.is(result.props.className, 'price');
	t.is(result.type, 'div');
});

test('render childrens blocks', t => {
	const props = {
		cost: 99,
		currency: 'USD'
	};
	const result = createComponent(C, props);

	t.is(result.props.children[1].type, 'span');
	t.is(result.props.children[2].type, 'span');
});

test('don\'t render currency without currency prop', t => {
	const props = {
		cost: 99
	};
	const result = createComponent(C, props);

	t.is(result.props.children[1].type, 'span');
	t.is(result.props.children[2], null);
});

test('don\'t render childrens without props', t => {
	const props = {
	};
	const result = createComponent(C, props);

	t.is(result.props.children[1], null);
	t.is(result.props.children[2], null);
});

test('don\'t render currency without cost', t => {
	const props = {
		currency: 'USD'
	};
	const result = createComponent(C, props);

	t.is(result.props.children[1], null);
	t.is(result.props.children[2], null);
});

test('don\'t render currency if cost is empty string', t => {
	const props = {
		cost: '',
		currency: 'USD'
	};
	const result = createComponent(C, props);

	t.is(result.props.children[1], null);
	t.is(result.props.children[2], null);
});

test('understand cost value is `0`', t => {
	const props = {
		cost: 0,
		currency: 'USD'
	};
	const result = createComponent(C, props);

	t.is(result.props.children[1].type, 'span');
	t.is(result.props.children[2].type, 'span');
});

test('price type', t => {
	const props = {
		cost: 5,
		currency: '$',
		type: 'old'
	};
	const result = createComponent(C, props);

	t.is(result.props.className, 'price price_old');
	t.is(result.type, 'del');
});

test('custom className', t => {
	const props = {
		cost: 5,
		type: 'old',
		className: 'foo bar baz'
	};
	const result = createComponent(C, props);

	t.is(result.props.className, 'price price_old foo bar baz');
});

test('`cost` prop type `String|Number`', t => {
	const props = {
		cost: '15 000'
	};
	const result = createComponent(C, props);

	t.is(result.props.children[1].props.children, '15 000');
});

test('`prefix` prop', t => {
	const props = {
		prefix: 'foo'
	};
	const result = createComponent(C, props);

	t.is(result.props.children[0].props.children, 'foo');
});

test('`postfix` prop', t => {
	const props = {
		postfix: 'foo'
	};
	const result = createComponent(C, props);

	t.is(result.props.children[3].props.children, 'foo');
});
