import { Order } from 'sequelize'

import { IOptions } from './interfaces'
import { TQueryOrder } from './types'

/**
 * ORDER-BUILDER
 * @param queryOrder {TQueryOrder}
 * @param orders {object}
 * @param defaultOrders {any[]?}
 * @param options {IOptions?}
 * @return {any[]}
 */
export default function (queryOrder: TQueryOrder, orders: object, defaultOrders?: any[], options?: IOptions): Order {
  defaultOrders ||= []
  options ||= {}

  if (queryOrder) {
    const [col, orderBy] = queryOrder

    for (const [_col, order] of Object.entries(orders)) {
      if (_col === col) {
        if (orderBy === 'DESC' && options.descNullsLast) {
          order.push(orderBy + ' NULLS LAST')
        } else {
          order.push(orderBy)
        }

        return [order, ...defaultOrders]
      }
    }
  }

  return defaultOrders
}
