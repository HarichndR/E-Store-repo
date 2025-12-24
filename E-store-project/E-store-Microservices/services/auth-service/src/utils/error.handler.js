const { HTTP_STATUS } = require('./constants');

function Async_Handler(fn) {
    return async function (req, res, next) {
        try {
            const result = await fn(req, res, next);
            return result;
        } catch (error) {
            return res.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Internal server Error', error });
        }
    }
}

module.exports = { Async_Handler };