const {  format, transports } = require('winston');
const winston = require('winston')
require('winston-mongodb');
const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: 'info'
        }),
        new winston.transports.File({
            level: 'warn',
            filename: 'logger_warn.log',
        }),
        new transports.MongoDB({
            level: 'error',
            db: 'mongodb://srv1:27017/212625917Nessi&Shira',

            options :{
                useUnifiedTopology:true
            },
            collection: 'server_logs',
            format: format.combine(
                format.timestamp(),
                format.json()
            )
        })
    ]
}
// logger.error("Hello, Winston logger, the first error!");
// logger.warn("Hello, Winston logger, the first warning!");
// logger.warn("Hello, Winston logger, the second warning!");
// logger.error("Hello, Winston logger, the second error!");
// logger.info("Hello, Winston logger, some info!");
module.exports = winston.createLogger(logConfiguration)