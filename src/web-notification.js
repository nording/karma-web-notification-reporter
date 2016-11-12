(function (window) {
    if (Notification && Notification.permission !== 'granted') {
        Notification.requestPermission();
    }

    function showFailureNotification(result) {
        var body = '';
        var assertErrors = '';

        result.log.forEach(function (assertError) {
            assertErrors += assertError;
        });

        body += assertErrors;

        var notification = new Notification('Failed: ' + result.description,
            { body: body, tag: 'karmaNotification' });
    };

    (function (originalKarmaResult) {
        window.__karma__.result = function (result) {
            if (!result.success) {
                showFailureNotification(result);
            }

            originalKarmaResult.apply(this, arguments);
        };
    })(window.__karma__.result);
})(window);