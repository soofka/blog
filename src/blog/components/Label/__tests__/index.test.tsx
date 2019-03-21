import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'blog/common/testMocks';

import { Label } from '../';

// @todo: zamockować labelki
describe('<Label/>', () => {

  const componentProps = {
    name: 'testLabel',
  };

  it('renders correctly', () => {
    expect(shallow(
      <Label
        {...componentProps}
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

  it('renders correctly with param', () => {
    expect(shallow(
      <Label
        {...componentProps}
        {...mockStoreProps}
        params={{ testParam: 'testParamValue' }}
      />,
    )).toMatchSnapshot();
  });

  it('renders correctly with custom class', () => {
    expect(shallow(
      <Label
        {...componentProps}
        {...mockStoreProps}
        className="testClassName"
      />,
    )).toMatchSnapshot();
  });

});
