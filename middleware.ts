import express from 'express'

import orderBuilder from './index'

import { IOptions } from './interfaces'
import { TQueryOrder } from './types'

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
    export interface Request {
      orderBuilder(orders: object, defaultOrders?: any[], options?: IOptions): any[]
    }
  }
}
