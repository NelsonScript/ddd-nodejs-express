const buildPayload = (statusCode: number,
    message: string,
    data: object = {}) => ({
  payload: {
    data: data,
    statusCode: statusCode,
    message: message,
  },
});

export {buildPayload};
