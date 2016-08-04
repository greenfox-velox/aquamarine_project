var mockConnectionMoreItems = {
  query: function(sql, cb) {
    cb(null, [{}, {}, {}])
  }
};

var mockConnectionOneItem = {
  query: function(sql, item, cb) {
    cb(null, [{}])
  }
};

module.exports = {
  mockConnectionMoreItems: mockConnectionMoreItems,
  mockConnectionOneItem: mockConnectionOneItem
};
