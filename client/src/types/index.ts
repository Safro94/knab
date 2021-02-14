interface IQuote {
  quote: string;
  currencyCode: string;
  currencyName: string;
}

export interface ICryptocurrency {
  id: string;
  name: string;
  code: string;
  price: string;
  quotes: IQuote
}