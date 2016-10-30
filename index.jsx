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
			React.PropTypes.number,
			React.PropTypes.string
		]),
		className: React.PropTypes.string,
		currency: React.PropTypes.string,
		prefix: React.PropTypes.any,
		postfix: React.PropTypes.any,
		type: React.PropTypes.oneOf([
			'def',
			'old'
		])
	},

	getDefaultProps() {
		return {
			type: 'def'
		};
	},

	render() {
		const {
			className,
			cost,
			currency,
			postfix,
			prefix,
			type
		} = this.props;
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
				{prefix ? (
					<span className="price__prefix">
						{prefix}
					</span>
				) : null}

				{isCostVisible ? (
					<span className="price__cost">
						{cost}
					</span>
				) : null}

				{isCurrencyVisible ? (
					<span className="price__currency">
						{currency}
					</span>
				) : null}

				{postfix ? (
					<span className="price__postfix">
						{postfix}
					</span>
				) : null}
			</t.tagName>
		);
	}
});

export default Price;
