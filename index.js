/**
 * ORDER-BUILDER
 * @param queryOrder {Array}
 * @param aliases {Object}
 * @param defaultOrder {Array}
 * @return {Array}
 */
module.exports = (queryOrder, aliases, defaultOrder) => {
  defaultOrder ||= []

  if (queryOrder) {
    const [alias, orderBy] = queryOrder

    if (['ASC', 'DESC'].includes(orderBy)) {
      for (const [_alias, order] of Object.entries(aliases)) {
        if (alias === _alias) {
          order.push(orderBy)

          return [order, ...defaultOrder]
        }
      }
    }
  }

  return defaultOrder
}
