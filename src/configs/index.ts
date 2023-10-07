import BaseConfig from './config.base';

let ExtraConfig = {};

if (__DEV__) {
  ExtraConfig = BaseConfig;
}

const Config = { ...BaseConfig, ...ExtraConfig };

export default Config;
