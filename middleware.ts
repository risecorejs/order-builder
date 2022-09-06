import express from 'express'

import { IOptions } from './interfaces'
import { TQueryOrder } from './types'

import orderBuilder from './index'

/**
 * MIDDLEWARE
 * @return {express.Handler}
 */
export default function (): express.Handler {
  return function (req: express.Request, res: express.Response, next: express.NextFunction) {
    req.orderBuilder = (orders: object, defaultOrders?: any[], options?: IOptions) => {
      return orderBuilder(<TQueryOrder>req.query.order, orders, defaultOrders, options)
    }

    next()
  }
}

declare global {
  namespace Express {
    interface Request {
      orderBuilder(orders: object, defaultOrders?: any[], options?: IOptions): any[]
    }
  }
}
