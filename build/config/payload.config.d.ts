declare const buildPayload: (statusCode: number, message: string, data?: object) => {
    payload: {
        data: object;
        statusCode: number;
        message: string;
    };
};
export { buildPayload };
