import * as React from 'react';
import { FlagPropsInterface } from '../../index';

export const PolandFlag = (props: FlagPropsInterface) => (
  <svg width={100} height={60} viewBox="0 0 16 10" {...props}>
    <path fill="#fff" d="M0 0h16v10H0z" />
    <path fill="#dc143c" d="M0 5h16v5H0z" />
  </svg>
);

export default PolandFlag;
