/**
 * ORDER-BUILDER
 * @param queryOrder {Array}
 * @param aliases {Object}
 * @param defaultOrder {Array}
 * @param options {{
 *   descNullsLast: boolean?
 * }?}
 * @return {Array}
 */
module.exports = (queryOrder, aliases, defaultOrder, options) => {
  defaultOrder ||= []

  if (queryOrder) {
    const [alias, orderBy] = queryOrder

    if (['ASC', 'DESC'].includes(orderBy)) {
      for (const [_alias, order] of Object.entries(aliases)) {
        if (alias === _alias) {
          if (orderBy === 'DESC' && options.descNullsLast) {
            order.push(orderBy + ' NULLS LAST')
          } else {
            order.push(orderBy)
          }

          return [order, ...defaultOrder]
        }
      }
    }
  }

  return defaultOrder
}
