# react-price

[![Commitizen friendly][commitizen-image]][commitizen-url]
[![XO code style][codestyle-image]][codestyle-url]

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> React price component

Demo: [vovanr.github.io/react-price][demo]

![](preview.png)

## Install

```
npm install --save react-price
```

## Usage
See: [example](example/app.jsx)

```js
import Price from 'react-price';

const price = (
    <div>
        <div>
            <small>{'Old: '}</small>
            <Price cost={100} currency={'$'} type={'old'}/>
        </div>
        <div>
            <small>{'New: '}</small>
            <Price cost={91.55} currency={'€'}/>
        </div>
        <div>
            <small>{'Sale: '}</small>
            <Price cost={'7 793'} currency={'₽'}/>
        </div>
    </div>
);

ReactDOM.render(price, document.getElementById('app'));
```

## Api

```js
Price.propTypes = {
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
    ]),
};
Price.defaultProps = {
    currencyFirst: false,
    type: 'def'
};
```

## License
MIT © [Vladimir Rodkin](https://github.com/VovanR)

[demo]: http://vovanr.github.io/react-price

[commitizen-url]: http://commitizen.github.io/cz-cli/
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square

[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square

[npm-url]: https://npmjs.org/package/react-price
[npm-image]: https://img.shields.io/npm/v/react-price.svg?style=flat-square

[travis-url]: https://travis-ci.org/VovanR/react-price
[travis-image]: https://img.shields.io/travis/VovanR/react-price.svg?style=flat-square

[depstat-url]: https://david-dm.org/VovanR/react-price
[depstat-image]: https://david-dm.org/VovanR/react-price.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/VovanR/react-price
[depstat-dev-image]: https://david-dm.org/VovanR/react-price/dev-status.svg?style=flat-square
