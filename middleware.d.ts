import express from 'express';
import { IOptions } from './interfaces';
/**
 * MIDDLEWARE
 * @return {express.Handler}
 */
export default function (): express.Handler;
declare global {
    namespace Express {
        interface Request {
            orderBuilder(orders: object, defaultOrders?: any[], options?: IOptions): any[];
        }
    }
}
