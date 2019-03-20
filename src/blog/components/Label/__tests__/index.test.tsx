import { shallow } from 'enzyme';
import * as React from 'react';

import { mockStoreProps } from 'common/testMocks';

import Label from 'components/Label';

describe('<Label/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <Label
        {...mockStoreProps}
      />,
    )).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <Label
        {...mockStoreProps}
        className="testClassName"
      />,
    )).toMatchSnapshot();
  });

});
