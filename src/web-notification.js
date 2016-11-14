(function (window) {
    if (Notification && Notification.permission !== 'granted') {
        Notification.requestPermission();
    }

    function showFailureNotification(result) {
        var assertErrors = '';

        result.log.forEach(function (assertError) {
            assertErrors += assertError;
        });

        var notify = {
            title: 'Failed: ' + result.description,
            options: {
                body: assertErrors,
                icon: 'base/node_modules/karma-web-notification-reporter/images/error.png'                
            }
        };

        return notify;
    };

    function reduceQueue(queue){
        if(queue.length > 0){
            var notifyData = queue.pop();
            var notification = new Notification(notifyData.title, notifyData.options);
        
            window.setTimeout(function(){
                reduceQueue(queue);
            }, 1000);
        }
    }

    (function (originalKarmaResult, originalKarmaComplete) {
        var notificationQueue = [];

        window.__karma__.result = function (result) {
            if (!result.success) {
                notificationQueue.push(showFailureNotification(result));
            }

            originalKarmaResult.apply(this, arguments);
        };

        window.__karma__.complete = function(){
            reduceQueue(notificationQueue);
            originalKarmaComplete.apply(this, arguments);
        };
    })(window.__karma__.result, window.__karma__.complete);
})(window);