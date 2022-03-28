const orderBuilder = require('./index')

module.exports = (req, res, next) => {
  req.orderBuilder = (aliases, defaultOrder) => orderBuilder(req.query.order, aliases, defaultOrder)

  next()
}
