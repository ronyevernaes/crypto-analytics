export default () => ({
  exchange: {
    interval: process.env.EXCHANGE_INTERVAL_REQUEST_MINS,
    assets: process.env.SUPPORTED_ASSETS,
    apiUrl: process.env.EXCHANGE_API_URL,
    currencies: process.env.SUPPORTED_CURRENCIES,
  },
  database: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
  },
});
