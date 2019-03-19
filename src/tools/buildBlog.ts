import webpack from 'webpack';
import { getWebpackConfig } from './getWebpackConfig';

export const buildBlog = (environment, mode) => {
  webpack(getWebpackConfig(environment, mode), (error, stats) => {
    if (error) {
      throw error;
    }
    console.log(stats.toString());
  })
};

buildBlog(process.env.env, process.env.mode);
