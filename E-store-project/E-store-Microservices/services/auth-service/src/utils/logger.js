class logger {
    static info(message, data = null) {

        console.log(`[INFO:] ${new Date().toISOString()} :-> ${message}`, data || '')
    }


    static warn(message, data = null) {
        console.log(`[WARN:] ${new Date().toISOString()} :-> ${message} `, data || '');
    }


    static Error(message) {
        console.error(
            `[ERROR:] ${new Date().toISOString()}:-> ${message}, `

        )
    }
}


module.exports = logger;