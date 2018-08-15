import * as React from 'react';
import { shallow } from 'enzyme';

import ErrorBox from 'components/ErrorBox';

describe('<ErrorBox/>', () => {

  it('renders correctly', () => {
    expect(shallow(<ErrorBox/>)).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <ErrorBox
        message="testMessage"
      />,
    )).toMatchSnapshot();
  });

});
