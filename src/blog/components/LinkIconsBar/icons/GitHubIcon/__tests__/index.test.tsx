import { shallow } from 'enzyme';
import * as React from 'react';

import { GitHubIcon } from '../';

describe('<GitHubIcon/>', () => {

  it('renders correctly', () => {
    expect(shallow(<GitHubIcon/>)).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <GitHubIcon
        className="testClassName"
      />,
    )).toMatchSnapshot();
  });

});
