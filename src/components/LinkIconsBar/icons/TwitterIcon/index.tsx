import * as React from 'react';
import { SvgIconPropsInterface } from '../../index';

export const TwitterIcon = (props: SvgIconPropsInterface) => (
  <a href="https://twitter.com/pansoofka" target="_blank">
    <svg viewBox="0 0 512 512" {...props}>
      {/* tslint:disable-next-line */}
      <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36-12.6 7.5-26.5 12.9-41.3 15.8C357.6 146 340.7 138 322 138c-42 0-72.9 39.2-63.4 79.9-54.1-2.7-102.1-28.6-134.2-68-17 29.2-8.8 67.5 20.1 86.9-10.7-.3-20.7-3.3-29.5-8.1-.7 30.2 20.9 58.4 52.2 64.6-9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2-27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6 12.9-9.1 23.9-20.5 32.6-33.6z" />
    </svg>
  </a>
);

export default TwitterIcon;
