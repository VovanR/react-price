import React from 'react';

const TYPES = {
	def: {
		className: 'price',
		tagName: 'div'
	},
	old: {
		className: 'price_old',
		tagName: 'del'
	}
};

const Price = React.createClass({
	propTypes: {
		cost: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.number
		]),
		currency: React.PropTypes.string,
		type: React.PropTypes.oneOf(['def', 'old']),
		className: React.PropTypes.string
	},

	getDefaultProps() {
		return {
			type: 'def'
		};
	},

	render() {
		const {cost, currency, type, className} = this.props;
		const isNotDefault = type !== 'def' && Boolean(TYPES[type]);
		const t = TYPES[type] || TYPES.def;

		let classes = [];
		classes.push(TYPES.def.className);
		if (isNotDefault) {
			classes.push(t.className);
		}
		if (className) {
			classes.push(className);
		}
		classes = classes.join(' ');

		const isCostVisible = (cost || cost === 0);
		const isCurrencyVisible = (currency !== undefined && isCostVisible);

		return (
			<t.tagName className={classes}>
				{isCostVisible ? (
					<span className="price__cost">{cost}</span>
				) : null}
				{isCurrencyVisible ? (
					<span className="price__currency">{currency}</span>
				) : null}
			</t.tagName>
		);
	}
});

export default Price;
