import React from 'react';
import classNames from 'classnames';

const TYPES = {
	old: 'price_old'
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
		const classes = {
			price: true,
			[TYPES[type]]: Boolean(TYPES[type])
		};

		return (
			<div className={classNames(className, classes)}>
				{cost === undefined ? null : (
					<span className="price__cost">{cost}</span>
				)}
				{currency === undefined || cost === undefined ? null : (
					<span className="price__currency">{currency}</span>
				)}
			</div>
		);
	}
});

export default Price;
