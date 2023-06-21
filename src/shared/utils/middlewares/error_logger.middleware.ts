import * as winston from "winston";
import * as expressWinston from "express-winston";

const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
});

export { errorLogger };