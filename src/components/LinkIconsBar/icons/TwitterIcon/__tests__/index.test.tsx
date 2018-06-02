import * as React from 'react';
import { shallow } from 'enzyme';

import TwitterIcon from 'components/LinkIconsBar/icons/TwitterIcon';

describe('<TwitterIcon/>', () => {

  it('renders correctly', () => {
    expect(shallow(<TwitterIcon/>)).toMatchSnapshot();
  });

});
