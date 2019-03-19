import * as React from 'react';
import { shallow } from 'enzyme';

import InstagramIcon from 'components/LinkIconsBar/icons/InstagramIcon';

describe('<InstagramIcon/>', () => {

  it('renders correctly', () => {
    expect(shallow(<InstagramIcon/>)).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <InstagramIcon
        className="testClassName"
      />,
    )).toMatchSnapshot();
  });

});
