import { Environment, Mode } from 'common/types';
import * as webpack from 'webpack';
import { getWebpackConfig } from './getWebpackConfig';

export const buildBlog = (environment: Environment, mode: Mode) => {
  webpack(getWebpackConfig(environment, mode), (error, stats) => {
    if (error) {
      throw error;
    }
    console.log(stats.toString());
  });
};

buildBlog(process.env.env as Environment, process.env.mode as Mode);
