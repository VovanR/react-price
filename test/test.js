import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Price, {PRICE_TYPE} from '..';

test('render price block', t => {
	const wrapper = shallow(<Price/>);
	t.true(wrapper.equals(
		<span className="price"/>
	));
});

test('render children blocks', t => {
	const props = {
		cost: 99,
		currency: 'USD'
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="cost" className="price__cost">{99}</span>
			<span key="currency" className="price__currency">USD</span>
		</span>
	));
});

test('don\'t render currency without `currency` prop', t => {
	const props = {
		cost: 99
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="cost" className="price__cost">{99}</span>
		</span>
	));
});

test('don\'t render childrens without props', t => {
	const wrapper = shallow(<Price/>);
	t.true(wrapper.equals(
		<span className="price"/>
	));
});

test('don\'t render currency without cost', t => {
	const props = {
		currency: 'USD'
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price"/>
	));
});

test('don\'t render currency if cost is empty string', t => {
	const props = {
		cost: '',
		currency: 'USD'
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price"/>
	));
});

test('understand cost value is `0`', t => {
	const props = {
		cost: 0,
		currency: 'USD'
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="cost" className="price__cost">{0}</span>
			<span key="currency" className="price__currency">USD</span>
		</span>
	));
});

test('price `type` prop', t => {
	const props = {
		cost: 5,
		currency: '$',
		type: 'old'
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<del className="price price_old">
			<span key="cost" className="price__cost">{5}</span>
			<span key="currency" className="price__currency">$</span>
		</del>
	));
});

test('`className` prop', t => {
	const props = {
		cost: 5,
		type: 'old',
		className: 'foo bar baz'
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<del className="price price_old foo bar baz">
			<span key="cost" className="price__cost">{5}</span>
		</del>
	));
});

test('`cost` prop type `String|Number`', t => {
	const props = {
		cost: '15 000'
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="cost" className="price__cost">15 000</span>
		</span>
	));
});

test('`cost` prop type `PropTypes.node`', t => {
	const props = {
		cost: <span>15 000</span>
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="cost" className="price__cost"><span>15 000</span></span>
		</span>
	));
});

test('`currency` prop type `PropTypes.node`', t => {
	const props = {
		cost: 3000,
		currency: <span>USD</span>
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="cost" className="price__cost">{3000}</span>
			<span key="currency" className="price__currency"><span>USD</span></span>
		</span>
	));
});

test('`prefix` prop', t => {
	const props = {
		prefix: 'foo',
		cost: 5
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="prefix" className="price__prefix">foo</span>
			<span key="cost" className="price__cost">{5}</span>
		</span>
	));
});

test('don\'t render `prefix` without `cost` prop', t => {
	const props = {
		prefix: 'foo'
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price"/>
	));
});

test('`postfix` prop', t => {
	const props = {
		postfix: 'foo',
		cost: 5
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="cost" className="price__cost">{5}</span>
			<span key="postfix" className="price__postfix">foo</span>
		</span>
	));
});

test('don\'t render `postfix` without `cost` prop', t => {
	const props = {
		postfix: 'foo'
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price"/>
	));
});

test('`prefix` and `postfix` prop', t => {
	const props = {
		prefix: 'foo',
		postfix: 'bar',
		cost: 5
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="prefix" className="price__prefix">foo</span>
			<span key="cost" className="price__cost">{5}</span>
			<span key="postfix" className="price__postfix">bar</span>
		</span>
	));
});

test('`currencyFirst=false` prop', t => {
	const props = {
		cost: 5,
		currency: 'USD',
		currencyFirst: false
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="cost" className="price__cost">{5}</span>
			<span key="currency" className="price__currency">USD</span>
		</span>
	));
});

test('`currencyFirst=true` prop', t => {
	const props = {
		cost: 5,
		currency: 'USD',
		currencyFirst: true
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="currency" className="price__currency">USD</span>
			<span key="cost" className="price__cost">{5}</span>
		</span>
	));
});

test('`currencyFirst`, `prefix` and `postfix` prop', t => {
	const props = {
		prefix: 'foo',
		postfix: 'bar',
		cost: 5,
		currency: 'USD',
		currencyFirst: true
	};
	const wrapper = shallow(<Price {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span key="prefix" className="price__prefix">foo</span>
			<span key="currency" className="price__currency">USD</span>
			<span key="cost" className="price__cost">{5}</span>
			<span key="postfix" className="price__postfix">bar</span>
		</span>
	));
});

test('module exports `PRICE_TYPE` constants', t => {
	t.deepEqual(PRICE_TYPE, {
		DEF: 'def',
		OLD: 'old'
	});
});
