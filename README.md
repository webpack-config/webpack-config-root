# webpack-config-root

Make everything in your source folder quickly accessible.

![build status](http://img.shields.io/travis/webpack-config/webpack-config-root/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/webpack-config/webpack-config-root/master.svg?style=flat)
![license](http://img.shields.io/npm/l/webpack-config-root.svg?style=flat)
![version](http://img.shields.io/npm/v/webpack-config-root.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/webpack-config-root.svg?style=flat)

## Usage

Install:

```sh
npm install --save webpack-config-root
```

Add to your `webpack.config.babel.js`:

```javascript
import root from `webpack-config-root`;

root('src')({
  /* existing webpack configuration */
})
```

[webpack]: https://webpack.github.io
