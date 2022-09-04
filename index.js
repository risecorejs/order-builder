"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ORDER-BUILDER
 * @param queryOrder {TQueryOrder}
 * @param orders {object}
 * @param defaultOrders {any[]?}
 * @param options {IOptions?}
 * @return {any[]}
 */
function default_1(queryOrder, orders, defaultOrders, options) {
    defaultOrders ||= [];
    options ||= {};
    if (queryOrder) {
        const [col, orderBy] = queryOrder;
        for (const [_col, order] of Object.entries(orders)) {
            if (_col === col) {
                if (orderBy === 'DESC' && options.descNullsLast) {
                    order.push(orderBy + ' NULLS LAST');
                }
                else {
                    order.push(orderBy);
                }
                return [order, ...defaultOrders];
            }
        }
    }
    return defaultOrders;
}
exports.default = default_1;
