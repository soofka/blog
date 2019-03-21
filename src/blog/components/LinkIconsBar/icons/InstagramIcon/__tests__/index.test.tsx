import { shallow } from 'enzyme';
import * as React from 'react';

import { InstagramIcon } from '../';

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
