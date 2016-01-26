import partial from 'webpack-partial';
import path from 'path';

export default (root = 'src') => (config) => partial(config, {
  resolve: {
    root: [
      root.charAt(0) === '/' ? root : path.join(config.context, root),
    ],
  },
});
