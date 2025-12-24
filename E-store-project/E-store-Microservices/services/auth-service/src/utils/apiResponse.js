const { HTTP_STATUS } = require('./constants');

class Standerd_API_response {

    static success(res, message = 'success', data = null, statuscode = HTTP_STATUS.OK) {
        return res.status(statuscode).json({
            success: true,
            message: message,
            data: data,
            timestamp: new Date().toISOString(),
        });

    }


    static error(res, message = 'error', errors = null, statuscode = HTTP_STATUS.SERVER_ERROR) {
        return res.status(statuscode).json({
            success: false,
            message: message,
            errors: errors,
            timestamp: new Date().toISOString()

        })

    }

    static validationError(res, errors) {
        return res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({
            success: false,
            message: 'validation error ',
            errors: errors,
            timestamp: new Date().toISOString()
        })

    }


    static pegintionresponse(res, data,) {

    }

}

module.exports = Standerd_API_response;