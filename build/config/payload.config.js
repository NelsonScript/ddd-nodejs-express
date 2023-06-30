"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPayload = void 0;
const buildPayload = (statusCode, message, data = {}) => ({
    payload: {
        data: data,
        statusCode: statusCode,
        message: message,
    },
});
exports.buildPayload = buildPayload;
