# Knab Coding Challenge

## Description

This project was built for a coding challenge. The client is a CRA React + Typescript application. The server was built using Node js and Express(BFF approach). This project uses Sass + BEM for the styling.

## Folder structure
    root
      ├── server
      │   └── src
      │       ├── api
      │       │    ├── controllers
      │       │    ├── routes
      │       │    └── index.js
      │       ├── constants
      │       ├── integration
      │       ├── middlewares
      │       ├── service
      │       └── utils
      │
      ├── client
      │   ├── public
      │   └── src
      │       ├── assets
      │       ├── components
      │       ├── constants
      │       ├── containers
      │       ├── hooks
      │       ├── pages
      │       ├── styles
      │       ├── types
      │       ├── utils
      │       └── index.tsx
      │
      └── README.md

## Stack

### Server

    - Node JS
    - Express

### Frontend

    - React + hooks
    - Typescript
    - Context API
    - Sass + BEM
    - Jest + React testing library

## How to start

### Clone

You can clone the repo using this url: https://github.com/Safro94/knab

```
git clone https://github.com/Safro94/knab.git
```

### Install dependencies

Make sure you are using the correct Node version(v12). If using NVM, just type

```
nvm use
```

Go to the client folder

```
cd knab/client
```

Run

```
npm install
```

Go to the server folder

```
cd knab/server
```

Run

```
npm install
```

Add .env file with this keys

```
COIN_MARKET_CAP_API_KEY=your_coin_market_cap_api
COIN_MARKET_CAP_API_URL=https://pro-api.coinmarketcap.com/v1
EXCHANGE_RATES_API_URL=https://api.exchangeratesapi.io
PORT=9000
```

To run both projects at the same time, go to the server folder and run

```
npm run dev
```

the server should be running on http://localhost:9000 and the client http://localhost:3000

## Test

The frontend uses Jest + React testing library. The server uses Jest. You can run this command on each project

```
npm test
```

to run the tests.

## Technical questions

See this [file](https://github.com/Safro94/knab/blob/master/answers_to_technical_questions.md) for the answers.
