import { shallow } from 'enzyme';
import * as React from 'react';

import { ErrorBox } from '../';

describe('<ErrorBox/>', () => {

  it('renders correctly', () => {
    expect(shallow(<ErrorBox/>)).toMatchSnapshot();
  });

  it('renders correctly with message', () => {
    expect(shallow(
      <ErrorBox
        message="testMessage"
      />,
    )).toMatchSnapshot();
  });

});
