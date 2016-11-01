import React from 'react';

const className = 'price';

const TYPES = {
	def: {
		className,
		tagName: 'span'
	},
	old: {
		className: `${className}_old`,
		tagName: 'del'
	}
};

const Price = React.createClass({
	propTypes: {
		cost: React.PropTypes.oneOfType([
			React.PropTypes.number,
			React.PropTypes.string
		]),
		className: React.PropTypes.string,
		currency: React.PropTypes.string,
		currencyFirst: React.PropTypes.bool,
		prefix: React.PropTypes.any,
		postfix: React.PropTypes.any,
		type: React.PropTypes.oneOf([
			'def',
			'old'
		])
	},

	getDefaultProps() {
		return {
			currencyFirst: false,
			type: 'def'
		};
	},

	renderBlock(name) {
		return (
			<span
				key={name}
				className={`${className}__${name}`}
				>
				{this.props[name]}
			</span>
		);
	},

	getClassName() {
		const {
			className,
			type
		} = this.props;
		const t = TYPES[type] || TYPES.def;
		const isNotDefault = type !== 'def' && Boolean(TYPES[type]);
		const classes = [];

		classes.push(TYPES.def.className);

		if (isNotDefault) {
			classes.push(t.className);
		}

		if (className) {
			classes.push(className);
		}

		return classes.join(' ');
	},

	render() {
		const {
			cost,
			currency,
			currencyFirst,
			postfix,
			prefix,
			type
		} = this.props;
		const t = TYPES[type] || TYPES.def;

		const isCostVisible = (cost || cost === 0);
		const isCurrencyVisible = (currency !== undefined && isCostVisible);

		const r = [];

		if (prefix && isCostVisible) {
			r.push(this.renderBlock('prefix'));
		}

		let priceCost = null;
		if (isCostVisible) {
			priceCost = this.renderBlock('cost');
		}

		let priceCurrency = null;
		if (isCurrencyVisible) {
			priceCurrency = this.renderBlock('currency');
		}

		if (currencyFirst) {
			r.push(priceCurrency);
			r.push(priceCost);
		} else {
			r.push(priceCost);
			r.push(priceCurrency);
		}

		if (postfix && isCostVisible) {
			r.push(this.renderBlock('postfix'));
		}

		return React.createElement(
			t.tagName,
			{
				className: this.getClassName()
			},
			r
		);
	}
});

export default Price;
