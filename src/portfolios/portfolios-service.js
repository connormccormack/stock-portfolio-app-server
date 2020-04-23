const xss = require('xss');

const PortfoliosService = {
  getAssetList(db, user_id) {
    return db
      .from('portfolio_items AS assets')
      .select(
        'assets.id',
        'assets.user_id',
        'assets.asset_name',
        'assets.asset_class'
      )
      .where('assets.user_id', user_id);
  },
  insertItem(db, newItem) {
    return db
      .insert(newItem)
      .into('portfolio_items');
  }
};

module.exports = PortfoliosService;