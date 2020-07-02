/* global document React ReactDOM */

import Price, {PRICE_TYPE} from '..';

// eslint-disable-next-line import/no-unassigned-import
import '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      currencyFirst: false,
      postfix: '',
      prefix: ''
    };

    this.handleChangeCurrencyFirst = this.handleChangeCurrencyFirst.bind(this);
    this.handleChangePostfix = this.handleChangePostfix.bind(this);
    this.handleChangePrefix = this.handleChangePrefix.bind(this);
  }

  handleChangeCurrencyFirst() {
    this.setState(previousState => ({
      currencyFirst: !previousState.currencyFirst
    }));
  }

  handleChangePostfix({target: {value}}) {
    this.setState({postfix: value});
  }

  handleChangePrefix({target: {value}}) {
    this.setState({prefix: value});
  }

  render() {
    const {
      currencyFirst,
      postfix,
      prefix
    } = this.state;

    return (
      <div>
        <p>
          <label>
            <input
              value={currencyFirst}
              type="checkbox"
              onChange={this.handleChangeCurrencyFirst}
            />

            <span>
              Currency first
            </span>
          </label>
        </p>

        <p>
          <label>
            <span>Prefix: </span>

            <input
              value={prefix}
              onChange={this.handleChangePrefix}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Postfix: </span>

            <input
              value={postfix}
              onChange={this.handleChangePostfix}
            />
          </label>
        </p>

        <div
          style={{
            fontSize: '250%',
            fontFamily: 'monospace'
          }}
        >
          <p>
            <time>
              03.02.2016
            </time>
          </p>

          <div>
            <small>Old: </small>

            <Price
              cost={100}
              currency="$"
              type={PRICE_TYPE.OLD}
              currencyFirst={currencyFirst}
              postfix={postfix}
              prefix={prefix}
            />
          </div>

          <div>
            <small>New: </small>

            <Price
              cost={91.55}
              currency="€"
              currencyFirst={currencyFirst}
              postfix={postfix}
              prefix={prefix}
            />
          </div>

          <div>
            <small>Sale: </small>

            <Price
              cost="7 793"
              currency="₽"
              currencyFirst={currencyFirst}
              postfix={postfix}
              prefix={prefix}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
