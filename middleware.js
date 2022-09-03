"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
/**
 * MIDDLEWARE
 * @return {express.Handler}
 */
function default_1() {
    return function (req, res, next) {
        req.orderBuilder = (orders, defaultOrders, options) => {
            return (0, index_1.default)(req.query.order, orders, defaultOrders, options);
        };
        next();
    };
}
exports.default = default_1;
