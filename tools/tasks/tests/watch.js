var Server = require('karma').Server;

module.exports = function (gulp, opts) {
    return function () {
        var server = new Server({
            configFile: opts.PROJECT_PATH.tests + '/karma.conf.js'
        });

        server.start();
    };
};
