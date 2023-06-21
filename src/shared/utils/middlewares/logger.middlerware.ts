import * as winston from "winston";
import * as expressWinston from "express-winston";

const logger = winston.createLogger({
  level: 'info',
  //format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({ level: 'info' })
  ],
  format: winston.format.combine(
    //winston.format.colorize(),
    winston.format.json()
  )
});

const winstonLogger = expressWinston.logger({
  transports: [
    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
});

export { logger, winstonLogger };
