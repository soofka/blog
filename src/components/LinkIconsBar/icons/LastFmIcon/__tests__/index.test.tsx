import * as React from 'react';
import { shallow } from 'enzyme';

import LastFmIcon from 'components/LinkIconsBar/icons/LastFmIcon';

describe('<LastFmIcon/>', () => {

  it('renders correctly', () => {
    expect(shallow(<LastFmIcon/>)).toMatchSnapshot();
  });

});
