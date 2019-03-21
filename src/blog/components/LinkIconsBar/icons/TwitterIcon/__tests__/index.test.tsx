import { shallow } from 'enzyme';
import * as React from 'react';

import { TwitterIcon } from '../';

describe('<TwitterIcon/>', () => {

  it('renders correctly', () => {
    expect(shallow(<TwitterIcon/>)).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <TwitterIcon
        className="testClassName"
      />,
    )).toMatchSnapshot();
  });

});
