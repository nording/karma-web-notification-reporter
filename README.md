#karma-web-notification-reporter

## Installation

```bash
npm install karma-web-notification-reporter --save-dev
```

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    plugins: [
        require('karma-web-notification-reporter')
    ],
    reporters: ['web-notification']
  });
};
```

----

For more information on Karma see the [homepage].

[homepage]: http://karma-runner.github.com