import React from 'react';
import classNames from 'classnames';

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
		cost: React.PropTypes.number,
		currency: React.PropTypes.string,
		type: React.PropTypes.string,
		className: React.PropTypes.string
	},

	render() {
		const {cost, currency, type, className} = this.props;
		const t = TYPES[type] || TYPES.def;
		const classes = {
			[TYPES.def.className]: true,
			[t.className]: Boolean(t)
		};

		return (
			<t.tagName className={classNames(className, classes)}>
				{cost === undefined ? null : (
					<span className="price__cost">{cost}</span>
				)}
				{currency === undefined || cost === undefined ? null : (
					<span className="price__currency">{currency}</span>
				)}
			</t.tagName>
		);
	}
});

export default Price;
