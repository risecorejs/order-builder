import { IOptions } from './interfaces'

declare global {
  namespace Express {
    export interface Request {
      orderBuilder(orders: object, defaultOrders?: any[], options?: IOptions): any[]
    }
  }
}
