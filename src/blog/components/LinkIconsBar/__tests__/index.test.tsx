import * as React from 'react';
import { shallow } from 'enzyme';

import LinkIconsBar from 'components/LinkIconsBar';

describe('<LinkIconsBar/>', () => {

  it('renders correctly', () => {
    expect(shallow(<LinkIconsBar/>)).toMatchSnapshot();
  });

});
