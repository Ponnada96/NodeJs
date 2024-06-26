
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp}  ${level}: ${message}`;
});

const createLoggerConfig = () => {
    return createLogger({
        level: 'debug',
        format: combine(colorize(),timestamp({ format: "HH:mm:ss" }), myFormat),
        // defaultMeta: { service: 'user-service' },
        transports: [
            //
            // - Write all logs with importance level of `error` or less to `error.log`
            // - Write all logs with importance level of `info` or less to `combined.log`
            //
            // new winston.transports.File({ filename: 'error.log', level: 'error' }),
            // new winston.transports.File({ filename: 'combined.log' }),
            new transports.Console()
        ],
    });
}

module.exports = createLoggerConfig;
