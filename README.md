#karma-web-notification-reporter

[![Web notification example](/images/example.png)]

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
    reporters: ['progress', 'web-notification'],
    client: {
      clearContext: false // make sure this is set to "false", otherwise it won't work
    }
  });
};
```

----

For more information about Karma see the [homepage].

[homepage]: http://karma-runner.github.com