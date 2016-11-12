var path = require('path');

var webNotification = function(configFiles){
    configFiles.push({ 
        pattern: path.join(__dirname, 'src/web-notification.js'), 
        included: true, 
        served: true, 
        watched: false 
    });
}

webNotification.$inject = ['config.files'];

module.exports = {
    'reporter:web-notification': ['factory', webNotification]
};