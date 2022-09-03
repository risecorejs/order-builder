import { IOptions } from './interfaces';
import { TQueryOrder } from './types';
/**
 * ORDER-BUILDER
 * @param queryOrder {TQueryOrder}
 * @param orders {object}
 * @param defaultOrders {any[]?}
 * @param options {IOptions?}
 * @return {any[]}
 */
export default function (queryOrder: TQueryOrder, orders: object, defaultOrders?: any[], options?: IOptions): any[];
