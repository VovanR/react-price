import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import C from '../';

test('render price block', t => {
	const wrapper = shallow(<C/>);
	t.true(wrapper.equals(
		<span className="price"/>
	));
});

test('render children blocks', t => {
	const props = {
		cost: 99,
		currency: 'USD'
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span className="price__cost">{99}</span>
			<span className="price__currency">{'USD'}</span>
		</span>
	));
});

test('don\'t render currency without `currency` prop', t => {
	const props = {
		cost: 99
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span className="price__cost">{99}</span>
		</span>
	));
});

test('don\'t render childrens without props', t => {
	const wrapper = shallow(<C/>);
	t.true(wrapper.equals(
		<span className="price"/>
	));
});

test('don\'t render currency without cost', t => {
	const props = {
		currency: 'USD'
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price"/>
	));
});

test('don\'t render currency if cost is empty string', t => {
	const props = {
		cost: '',
		currency: 'USD'
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price"/>
	));
});

test('understand cost value is `0`', t => {
	const props = {
		cost: 0,
		currency: 'USD'
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span className="price__cost">{0}</span>
			<span className="price__currency">{'USD'}</span>
		</span>
	));
});

test('price `type` prop', t => {
	const props = {
		cost: 5,
		currency: '$',
		type: 'old'
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<del className="price price_old">
			<span className="price__cost">{5}</span>
			<span className="price__currency">{'$'}</span>
		</del>
	));
});

test('`className` prop', t => {
	const props = {
		cost: 5,
		type: 'old',
		className: 'foo bar baz'
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<del className="price price_old foo bar baz">
			<span className="price__cost">{5}</span>
		</del>
	));
});

test('`cost` prop type `String|Number`', t => {
	const props = {
		cost: '15 000'
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span className="price__cost">{'15 000'}</span>
		</span>
	));
});

test('`prefix` prop', t => {
	const props = {
		prefix: 'foo',
		cost: 5
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span className="price__prefix">{'foo'}</span>
			<span className="price__cost">{5}</span>
		</span>
	));
});

test('`postfix` prop', t => {
	const props = {
		postfix: 'foo',
		cost: 5
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span className="price__cost">{5}</span>
			<span className="price__postfix">{'foo'}</span>
		</span>
	));
});

test('`prefix` and `postfix` prop', t => {
	const props = {
		prefix: 'foo',
		postfix: 'bar',
		cost: 5
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span className="price__prefix">{'foo'}</span>
			<span className="price__cost">{5}</span>
			<span className="price__postfix">{'bar'}</span>
		</span>
	));
});

test('`currencyFirst=false` prop', t => {
	const props = {
		cost: 5,
		currency: 'USD',
		currencyFirst: false
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span className="price__cost">{5}</span>
			<span className="price__currency">{'USD'}</span>
		</span>
	));
});

test('`currencyFirst=true` prop', t => {
	const props = {
		cost: 5,
		currency: 'USD',
		currencyFirst: true
	};
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span className="price__currency">{'USD'}</span>
			<span className="price__cost">{5}</span>
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
	const wrapper = shallow(<C {...props}/>);
	t.true(wrapper.equals(
		<span className="price">
			<span className="price__prefix">{'foo'}</span>
			<span className="price__currency">{'USD'}</span>
			<span className="price__cost">{5}</span>
			<span className="price__postfix">{'bar'}</span>
		</span>
	));
});
