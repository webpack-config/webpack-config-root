import path from 'path';

const exists = (path, resolve) => {
  if (Array.isArray(resolve)) {
    return resolve.some((entry) => exists(path, entry));
  } else if (typeof resolve === 'function') {
    return resolve(path);
  }
  return path === resolve;
};

const append = (path, resolve) => {
  if (Array.isArray(resolve)) {
    return [...resolve, path];
  }
  return [resolve, path];
};

export default (root = 'src') => (config) => {
  const entry = root.charAt(0) === '/' ? root : path.join(config.context, root);
  if (!config.resolve || !config.resolve.root) {
    return {
      ...config,
      resolve: {root: [entry]},
    };
  } else if (config.resolve.root && exists(entry, config.resolve.root)) {
    return config;
  }
  return {
    ...config,
    resolve: {
      ...config.resolve,
      root: append(entry, config.resolve.root),
    },
  };
};
