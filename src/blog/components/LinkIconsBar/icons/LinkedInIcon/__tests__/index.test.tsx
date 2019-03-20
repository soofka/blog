import { shallow } from 'enzyme';
import * as React from 'react';

import LinkedInIcon from 'components/LinkIconsBar/icons/LinkedInIcon';

describe('<LinkedInIcon/>', () => {

  it('renders correctly', () => {
    expect(shallow(<LinkedInIcon/>)).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <LinkedInIcon
        className="testClassName"
      />,
    )).toMatchSnapshot();
  });

});
