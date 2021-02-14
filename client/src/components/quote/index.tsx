import { IQuote } from 'types/index';

import Icon from '../icon'

import './index.scss';

interface IQuoteProps {
  item: IQuote
}

const Quote = ({ item: { quote, currencyCode, currencyName } }: IQuoteProps) => {
  return (
    <div className='quote' data-testid='quote'>
      <div>
        <Icon name={currencyCode} classes='quote__icon' />
      </div>
      <div className='quote__currency-wrapper'>
        <span className='quote__currency'> {currencyName} </span>
        <span className='quote__value'>{currencyCode} {quote} </span>
      </div>
    </div>
  )
}

export default Quote
