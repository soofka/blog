import * as React from 'react';
import { shallow } from 'enzyme';

import GitHubIcon from 'components/LinkIconsBar/icons/GitHubIcon';

describe('<GitHubIcon/>', () => {

  it('renders correctly', () => {
    expect(shallow(<GitHubIcon/>)).toMatchSnapshot();
  });

});
