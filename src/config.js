const { PORT, NODE_ENV, DB_URL, TEST_DB_URL, API_TOKEN, JWT_SECRET } = process.env;

module.exports = {
  PORT: PORT || 8000,
  NODE_ENV: NODE_ENV || 'development',
  DB_URL: DB_URL || 'postgresql://postgres@localhost/stock_portfolio_database',
  TEST_DB_URL: TEST_DB_URL || 'postgresql://postgres@localhost/stock_portfolio_database_test',
  API_TOKEN,
  JWT_SECRET
}