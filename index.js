import React, {Component} from 'react';
import PropTypes from 'prop-types';

const className = 'price';

export const PRICE_TYPE = {
	DEF: 'def',
	OLD: 'old'
};

const BLOCK_SETTINGS_BY_TYPE = {
	[PRICE_TYPE.DEF]: {
		className,
		tagName: 'span'
	},
	[PRICE_TYPE.OLD]: {
		className: `${className}_old`,
		tagName: 'del'
	}
};

const propTypes = {
	cost: PropTypes.any,
	className: PropTypes.string,
	currency: PropTypes.any,
	currencyFirst: PropTypes.bool,
	prefix: PropTypes.any,
	postfix: PropTypes.any,
	type: PropTypes.oneOf([
		PRICE_TYPE.DEF,
		PRICE_TYPE.OLD
	])
};

const defaultProps = {
	cost: null,
	className: '',
	currency: null,
	currencyFirst: false,
	prefix: null,
	postfix: null,
	type: PRICE_TYPE.DEF
};

class Price extends Component {
	renderBlock(name) {
		return React.createElement(
			'span',
			{
				key: name,
				className: `${className}__${name}`
			},
			this.props[name]
		);
	}

	getClassName() {
		const {
			className,
			type
		} = this.props;
		const t = BLOCK_SETTINGS_BY_TYPE[type] || BLOCK_SETTINGS_BY_TYPE[PRICE_TYPE.DEF];
		const isNotDefault = type !== PRICE_TYPE.DEF && Boolean(BLOCK_SETTINGS_BY_TYPE[type]);
		const classes = [];

		classes.push(BLOCK_SETTINGS_BY_TYPE[PRICE_TYPE.DEF].className);

		if (isNotDefault) {
			classes.push(t.className);
		}

		if (className) {
			classes.push(className);
		}

		return classes.join(' ');
	}

	render() {
		const {
			cost,
			currency,
			currencyFirst,
			postfix,
			prefix,
			type
		} = this.props;
		const t = BLOCK_SETTINGS_BY_TYPE[type] || BLOCK_SETTINGS_BY_TYPE[PRICE_TYPE.DEF];

		const isCostVisible = isDefined(cost);
		const isCurrencyVisible = (isDefined(currency) && isCostVisible);

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
}
Price.propTypes = propTypes;
Price.defaultProps = defaultProps;

/**
 * @param {*} item
 * @returns {boolean}
 */
function isDefined(item) {
	return item !== undefined && item !== null && item !== '';
}

export default Price;
