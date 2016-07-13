function Handlers() {
    function error(res, reason, message, code) {
        console.log("Error: " + reason);
        res.status(code || 500).json({"error": message});
    }

    function log(message) {
        console.log(message);
    }

    return {
        log: log,
        error: error
    }
}

module.exports = Handlers;