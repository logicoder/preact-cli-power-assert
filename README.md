# preact-cli-power-assert

Plugin for [⚛️ preact-cli](https://github.com/developit/preact-cli) to use [power-assert](https://github.com/power-assert-js/power-assert) assertions.

[![npm](https://img.shields.io/npm/v/preact-cli-power-assert.svg?style=flat-square)](https://www.npmjs.com/package/preact-cli-power-assert)
[![David](https://img.shields.io/david/logicoder/preact-cli-power-assert.svg?style=flat-square)](https://github.com/logicoder/preact-cli-power-assert/blob/master/package.json)
[![license](https://img.shields.io/github/license/logicoder/preact-cli-power-assert.svg?style=flat-square)](https://github.com/logicoder/preact-cli-power-assert/blob/master/LICENSE)

## Getting Started

Install it with npm:

```shell
npm i -D preact-cli-power-assert
```

or with yarn:

```shell
yarn add preact-cli-power-assert --dev
```

This will also install:

- [babel-plugin-empower-assert](https://npm.im/babel-plugin-empower-assert)
- [babel-plugin-espower](https://npm.im/babel-plugin-espower)
- [power-assert](https://npm.im/power-assert)

And include in your project by creating or adding to `preact.config.js`.

```javascript
export default function customWebpackConfiguration(config, env, helpers) {
  // Will run only in test environment via process.env.NODE_ENV check
  require('preact-cli-power-assert')(config, env);
}
```

## Example

Write your assertions as usual, assert API is converted to power-assert by Babel.

```javascript
import assert from 'assert';

function add (a, b) {
    assert(!isNaN(a));
    assert.equal(typeof b, 'number');
    assert.ok(!isNaN(b));
    return a + b;
}
```

## Related

See also [preact-cli-unassert](https://npm.im/preact-cli-unassert).

## Thanks

Many thanks to [Jason Miller](https://twitter.com/_developit) for creating [⚛️ Preact](https://preactjs.com/), much of the related ecosystem and lots of useful stuff.

Heavily inspired by [preact-cli-lodash](https://github.com/SaraVieira/preact-cli-lodash) from [Sara Vieira](https://twitter.com/NikkitaFTW).

## License

[MIT](https://mdt.mit-license.org/)
