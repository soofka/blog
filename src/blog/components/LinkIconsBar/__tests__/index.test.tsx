import { shallow } from 'enzyme';
import * as React from 'react';

import { LinkIconsBar } from '../';

describe('<LinkIconsBar/>', () => {

  it('renders correctly', () => {
    expect(shallow(<LinkIconsBar/>)).toMatchSnapshot();
  });

});
