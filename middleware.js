const orderBuilder = require('./index')

module.exports = () => (req, res, next) => {
  req.orderBuilder = (aliases, defaultOrder, options) => orderBuilder(req.query.order, aliases, defaultOrder, options)

  next()
}
